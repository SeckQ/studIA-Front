import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const Correccion = ({ route }) => {
    const { preguntas } = route.params;

    // Función para rendirizar cada elemento de la lista
    const renderItem = ({ item, index }) => (
        <Card style={[styles.card, { backgroundColor: item.respuestaCorrecta.id === item.respuestaUsuario.id ? '#E0F1C3' : '#FB9F9E' }]}>
            <Card.Content>
                <Text style={styles.pregunta}>{`${index + 1}. ${item.pregunta}`}</Text>
                <Text style={styles.respuestaCorrecta}>{`Respuesta Correcta: ${item.respuestaCorrecta.texto}`}</Text>
                <Text style={styles.respuestaUsuario}>{`Respuesta del Usuario: ${item.respuestaUsuario.texto}`}</Text>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={preguntas}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    card: {
        marginBottom: 20,
    },
    pregunta: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    respuestaCorrecta: {
        color: 'green',
        marginBottom: 3,
    },
    respuestaUsuario: {
        color: 'red',
    },
});

export default Correccion;
