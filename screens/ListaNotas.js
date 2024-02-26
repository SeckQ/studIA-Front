import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Button, Title, Paragraph, FAB } from 'react-native-paper'; // Importamos FAB desde react-native-paper
import axios from 'axios';
import Config from "../config/Config";


const ListaNotas = ({ navigation }) => {
    const [notas, setNotas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        const fetchNotas = async () => {
            try {
                const response = await axios.get(`${Config.apiUrl}/notes/1`);
                const notasData = await Promise.all(response.data.notes.map(async (nota) => {
                    const topicResponse = await axios.get(`${Config.apiUrl}/topics/1/${nota.topic_id}`);
                    const topicName = topicResponse.data.topic_name;
                    return {
                        ...nota,
                        topic: topicName,
                    };
                }));
                setNotas(notasData);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener las notas:', error);
                setLoading(false);
            }
        };

        fetchNotas();
    }, []);

    const handleRepaso = (content) => {
        navigation.navigate('Repaso', { content });
    };

    const toggleExpand = (noteId) => {
        setExpandedId(expandedId === noteId ? null : noteId);
    };

    const truncateText = (text, limit) => {
        if (text.length <= limit) {
            return text;
        }
        return text.substring(0, limit) + '...';
    };

    const renderNotas = () => {
        return notas.map((nota) => (
            <Card key={nota.note_id} style={styles.card}>
                <TouchableOpacity onPress={() => toggleExpand(nota.note_id)}>
                    <Card.Title
                        title={nota.title}
                        subtitle={`Tema: ${nota.topic}\nFecha de Creación: ${nota.creation_date}`}
                        titleStyle={styles.title}
                        subtitleStyle={styles.subtitle}
                    />
                </TouchableOpacity>
                {expandedId === nota.note_id && (
                    <Card.Content style={styles.content}>
                        <Paragraph>{truncateText(nota.content, 100)}</Paragraph>
                        <View style={styles.buttonContainer}>
                            <Button mode="contained" onPress={() => handleRepaso(nota.content)} style={styles.button}>
                                Repaso
                            </Button>
                        </View>
                    </Card.Content>
                )}
            </Card>
        ));
    };

    return (
        <View style={styles.container}>
            <Title style={styles.header}>Apuntes</Title>
            <ScrollView style={{ width: '100%' }}>
                {loading ? (
                    <Text>Cargando notas...</Text>
                ) : (
                    <View>
                        {notas.length > 0 ? (
                            renderNotas()
                        ) : (
                            <Text>No hay notas disponibles</Text>
                        )}
                    </View>
                )}
            </ScrollView>
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => {navigation.navigate('Nota');}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 40, // Añade margen superior
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        marginVertical: 10,
        width: '100%',
    },
    title: {
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
    },
    content: {
        marginTop: 10,
    },
    buttonContainer: {
        alignItems: 'flex-end',
        marginTop: 10,
    },
    button: {
        borderWidth: 1,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

export default ListaNotas;
