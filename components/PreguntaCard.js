import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';

const PreguntaCard = ({ pregunta, opciones, onSiguiente, onSelectOption }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        // Reiniciar la opción seleccionada cada vez que se renderice una nueva pregunta
        setSelectedOption(null);
    }, [pregunta]);

    const handleSelectOption = (index) => {
        setSelectedOption(index);
        onSelectOption(index); // Llamar a la función proporcionada por el padre para manejar la selección de la opción
    };

    const renderOpciones = () => {
        return opciones.map((opcion, index) => (
            <TouchableOpacity
                key={opcion.id}
                style={[
                    styles.optionContainer,
                    { backgroundColor: selectedOption === index ? '#f0f0f0' : 'transparent' }
                ]}
                onPress={() => handleSelectOption(index)}
            >
                <Text style={styles.optionText}>{opcion.texto}</Text>
                <RadioButton
                    value={index}
                    status={selectedOption === index ? 'checked' : 'unchecked'}
                    onPress={() => handleSelectOption(index)}
                />
            </TouchableOpacity>
        ));
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.pregunta}>{pregunta}</Text>
                {renderOpciones()}
            </View>
            <Button mode="contained" onPress={onSiguiente} style={styles.siguienteButton}>
                Siguiente
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        width: '100%',
    },
    pregunta: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 5,
    },
    optionText: {
        fontSize: 16,
        marginRight: 10,
    },
    siguienteButton: {
        marginTop: 20,
        width: '50%',
    },
});

export default PreguntaCard;
