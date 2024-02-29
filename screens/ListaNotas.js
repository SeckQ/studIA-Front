import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Button, Title, Paragraph, FAB, Appbar, Icon } from 'react-native-paper';
import axios from 'axios';
import Config from "../config/Config";
import { useNavigation } from "@react-navigation/native";
import ListaNotasCard from "../components/ListaNotasCard";

const ListaNotas = ({ route }) => {
    const [notas, setNotas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState(null);
    const navigation = useNavigation();
    const { materiaId } = route.params;

    useEffect(() => {
        const fetchNotas = async () => {
            try {
                const response = await axios.get(`${Config.apiUrl}/notes/1/${materiaId}`);
                const notasData = await Promise.all(response.data.notes.map(async (nota) => {
                    const topicResponse = await axios.get(`${Config.apiUrl}/topics/1/${nota.topic_id}`);
                    const topicName = topicResponse.data.topic_name;
                    return {
                        ...nota,
                        topic: topicName,
                    };
                }));
                console.log('Notas Data',notasData);
                setNotas(notasData);
                setLoading(false);

            } catch (error) {
                console.error('Error al obtener las notas:', error);
                setLoading(false);
            }
        };

        fetchNotas();
    }, []);


    const toggleExpand = (noteId) => {
        setExpandedId(expandedId === noteId ? null : noteId);
    };

    const renderNotas = () => {
        return notas.map((nota) => (
            <ListaNotasCard
                key={nota.note_id}
                nota={nota}
                expanded={expandedId === nota.note_id}
                toggleExpand={() => toggleExpand(nota.note_id)}
                handleRepaso={() => handleRepaso(nota.content)}
            />
        ));
    };

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft:10 }}>Tus Apuntes</Text>
                        <Text style={{ fontSize: 16, color: "#939393FF" , marginLeft:10}}>Elige sobre qué quieres estudiar</Text>
                    </View>
                    <Icon
                        source="alpha-a-circle"
                        color={"#7930D8FF"}
                        size={50}
                    />
                </View>
            </Appbar.Header>

            <ScrollView contentContainerStyle={{padding: 20, gap: 10}}>
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
                onPress={() => { navigation.navigate('Nota', {materiaId: materiaId}); }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

export default ListaNotas;
