import React from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {useNavigation} from "@react-navigation/native";

const Correccion = ({route}) => {
    const navigation = useNavigation();

    const {preguntas} = route.params;

    const finalizar = () => {
        // Navegar a la pantalla inicio
        navigation.navigate('MainTabs');
    };

    // Función para rendirizar cada elemento de la lista
    const renderItem = ({item, index}) => (
        <Card
            style={[styles.card, {backgroundColor: item.respuestaCorrecta.id === item.respuestaUsuario.id ? '#e6f8cb' : '#fdc2c2'}]}>
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
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={finalizar} style={styles.button}>
                    Finalizar
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        marginBottom: 20,
        elevation: 2, // Elevación de la tarjeta
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
