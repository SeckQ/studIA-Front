import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Calificacion = ({ route }) => {
    const navigation = useNavigation();

    const { preguntas, calificacion, materiaId } = route.params;

    const revisarCorreccion = () => {
        // Navegar a la pantalla de corrección
        console.log('Salida de Calificacion', JSON.stringify(preguntas, null, 2));
        navigation.navigate('Correccion', {
            preguntas: preguntas
        });
    };

    const regresarListaNotas = () => {
        // Navegar a la pantalla ListaNotas
        navigation.navigate('ListaNotas', {materiaId});
    };

    return (
        <View style={styles.container}>
            <Text style={styles.calificacionText}>Tu calificación es: {calificacion}%</Text>
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={revisarCorreccion} style={styles.button}>
                    Revisar Corrección
                </Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={regresarListaNotas} style={styles.button}>
                    Regresar a Lista de Notas
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 20,
    },
    calificacionText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#7930D8', // Color morado similar a Duolingo
    },
});

export default Calificacion;
