import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { Text, TextInput, RadioButton, Button as PaperButton, Card } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import {ImageBackground} from "expo-image"; // Importa useNavigation para la navegación
import Config from "../config/Config";

const DetallesNota = ({ route }) => {
    const navigation = useNavigation(); // Obtiene la instancia de navegación
    const { contenido, materiaId } = route.params;
    const [titulo, setTitulo] = useState('');
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [topics, setTopics] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [isLearning, setIsLearning] = useState(false);
    const [repetitionInterval, setRepetitionInterval] = useState(1);
    const [creationDate, setCreationDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchTypes();
        fetchTopics();
        setCreationDate(getCurrentDate());
    }, []);

    const fetchTypes = async () => {
        try {
            const response = await axios.get(`${Config.apiUrl}/note_types/1`);
            setTypes(response.data.note_types);
        } catch (error) {
            console.error('Error al obtener tipos:', error);
        }
    };

    const fetchTopics = async () => {
        try {
            const response = await axios.get(`${Config.apiUrl}/topics/1`);
            setTopics(response.data.topics);
        } catch (error) {
            console.error('Error al obtener temas:', error);
        }
    };

    const handleTituloChange = (text) => {
        setTitulo(text);
    };

    const handleTypeChange = (itemValue) => {
        setSelectedType(itemValue);
    };

    const handleTopicChange = (itemValue) => {
        setSelectedTopic(itemValue);
    };

    const handleIsLearningChange = () => {
        setIsLearning(!isLearning);
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            await axios.post(`${Config.apiUrl}/notes`, {
                title: titulo,
                content: contenido,
                topic_id: selectedTopic,
                note_type_id: selectedType,
                creation_date: creationDate,
                last_modification_date: getCurrentDate(),
                subject_id: materiaId,
                islearning: isLearning ? 1 : 0,
                repetition_interval: repetitionInterval,
                user_id: 1,
            });
            Alert.alert('Nota creada exitosamente'); // Muestra el mensaje de alerta
            navigation.navigate('ListaNotas',{materiaId: materiaId}); // Redirige a otra pantalla
        } catch (error) {
            console.error('Error al crear la nota:', error);
            setMessage('Error al crear la nota');
        } finally {
            setLoading(false);
        }
    };

    const getCurrentDate = () => {
        const date = new Date();
        return date.toISOString().split('T')[0];
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Fondo.png')} style={styles.backgroundImage}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Agrega los detalles</Text>
                    <View style={styles.content}>
                        <TextInput
                            label="Título de la Nota"
                            value={titulo}
                            onChangeText={handleTituloChange}
                            style={styles.input}
                            theme={{
                                colors: {
                                    primary: '#7930D8FF', // Color del borde y del texto cuando el input no está enfocado
                                },
                            }}
                            mode="outlined" // Añade bordes alrededor del input
                        />
                        <Text style={styles.tituloDetalle}>Tipo:</Text>
                        <Picker
                            selectedValue={selectedType}
                            onValueChange={handleTypeChange}
                            style={styles.picker}
                        >
                            {types.map(type => (
                                <Picker.Item key={type.type_id} label={type.type_name} value={type.type_id} />
                            ))}
                        </Picker>
                        <Text style={styles.tituloDetalle}>Tema:</Text>
                        <Picker
                            selectedValue={selectedTopic}
                            onValueChange={handleTopicChange}
                            style={styles.picker}
                        >
                            {topics.map(topic => (
                                <Picker.Item key={topic.topic_id} label={topic.topic_name} value={topic.topic_id} />
                            ))}
                        </Picker>
                        <View style={styles.radioButtonContainer}>
                            <Text style={styles.tituloDetalle}>Es Aprendizaje:</Text>
                            <RadioButton
                                value="learning"
                                status={isLearning ? 'checked' : 'unchecked'}
                                onPress={handleIsLearningChange}
                            />
                        </View>
                        {isLearning && (
                            <View>
                                <Text style={styles.tituloDetalle}>Intervalo de Repetición:</Text>
                                <Picker
                                    selectedValue={repetitionInterval}
                                    onValueChange={(itemValue) => setRepetitionInterval(itemValue)}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="1 día" value={1} />
                                    <Picker.Item label="2 días" value={2} />
                                    <Picker.Item label="3 días" value={3} />
                                </Picker>
                            </View>
                        )}
                        <Text style={styles.tituloDetalle}>Fecha de Creación:</Text>
                        <TextInput
                            value={creationDate}
                            editable={false}
                            style={styles.input}
                            mode="outlined"
                            theme={{
                                colors: {
                                    primary: '#7930D8FF',
                                    outlinedColor: '#7930D8FF',
                                },
                            }}

                        />
                        {loading ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                        ) : (
                            <Text>{message}</Text>
                        )}
                        <View style={{justifyContent: 'center', alignItems: 'center' }}>
                            <Card.Actions >
                                <PaperButton icon="content-save" onPress={handleSave} style={{ backgroundColor: '#7930D8', paddingLeft: 20, paddingRight:20 }} mode="contained" labelStyle={{ fontSize: 16, padding: 0 }}>
                                    Guardar
                                </PaperButton>
                            </Card.Actions>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        height: '50%',
        width: '100%',
        resizeMode: "cover",
        justifyContent: "center",
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '95%', // Ajusta el ancho del contenido según tus necesidades
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        marginBottom: 10,
        borderRadius: 8, // Añade bordes curvos
        backgroundColor: '#e3e3e3',
    },
    picker: {
        marginBottom: 10,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    tituloDetalle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
    },
});


export default DetallesNota;
