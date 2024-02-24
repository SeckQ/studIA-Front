import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-paper';
import axios from 'axios';

const ListaNotas = () => {
    const [notas, setNotas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotas = async () => {
            try {
                const response = await axios.get('http://192.168.1.6:5000/notes/1');
                const notasData = response.data.notes; // Accede al array de notas en la respuesta
                setNotas(notasData);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener las notas:', error);
                setLoading(false);
            }
        };

        fetchNotas();
    }, []);

    const handleRepaso = async (content) => {
        try {
            const postData = {
                text: content,
                quantity: 3, // Cantidad de preguntas a generar
                temperature: 0.8 // Temperatura para la generación de texto
            };

            // Realiza la solicitud POST al microservicio con los datos formateados
            const response = await axios.post('http://192.168.1.6:5000/generate-questions', postData);

            console.log('Respuesta del microservicio:', response.data);
            console.log('Contenido enviado para repaso:', content);
        } catch (error) {
            console.error('Error al enviar contenido para repaso:', error);
        }
    };


    const renderNotas = () => {
        return notas.map((nota) => (
            <Card key={nota.note_id} style={styles.card}>
                <Card.Title title={nota.title} />
                <Card.Content>
                    <Text>{nota.content}</Text>
                    <TouchableOpacity onPress={() => handleRepaso(nota.content)}>
                        <Text style={styles.repasoButton}>Repaso</Text>
                    </TouchableOpacity>
                </Card.Content>
            </Card>
        ));
    };

    return (
        <View style={styles.container}>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    card: {
        marginVertical: 10,
        width: '100%',
    },
    repasoButton: {
        color: 'blue',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default ListaNotas;
