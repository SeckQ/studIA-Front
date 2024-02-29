import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Modal } from 'react-native';
import { Portal, Provider, TextInput, Button } from 'react-native-paper';
import MateriaCard from '../components/MateriaCard';
import axios from 'axios';
import Config from "../config/Config";
import { useNavigation } from "@react-navigation/native";
import NuevaMateriaCard from "../components/NuevaMateriaCard";

const TusMaterias = () => {
    const navigation = useNavigation();
    const [materias, setMaterias] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newMateriaName, setNewMateriaName] = useState('');
    const [newMateriaProfesor, setNewMateriaProfesor] = useState('');
    const [newMateriaSemestre, setNewMateriaSemestre] = useState('');

    const fetchMaterias = async () => {
        try {
            const response = await axios.get(`${Config.apiUrl}/subjects/1`);
            setMaterias(response.data.subjects);
        } catch (error) {
            console.error('Error al obtener las materias:', error);
        }
    };

    useEffect(() => {
        fetchMaterias();
    }, []);

    const handleAddMateria = async () => {
        try {
            const response = await axios.post(`${Config.apiUrl}/subjects`, {
                name: newMateriaName,
                professor: newMateriaProfesor,
                semester: newMateriaSemestre,
                active: 1,
                user_id: 1
            });
            setModalVisible(false);
            setNewMateriaName('');
            setNewMateriaProfesor('');
            setNewMateriaSemestre('');
            fetchMaterias(); // Llamar fetchMaterias después de agregar una nueva materia
        } catch (error) {
            console.error('Error al agregar la nueva materia:', error);
        }
    };

    const handleNuevaMateriaPress = () => {
        setModalVisible(true);
    };

    return (
        <Provider>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    {materias.map((materia, index) => (
                        <MateriaCard materia={materia} key={materia.subject_id} />
                    ))}
                    <NuevaMateriaCard onPress={handleNuevaMateriaPress}></NuevaMateriaCard>
                </ScrollView>
            </View>
            <Portal>
                <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)} transparent animationType="slide">
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <TextInput
                                label="Nombre de la materia"
                                value={newMateriaName}
                                onChangeText={text => setNewMateriaName(text)}
                                style={styles.input}
                            />
                            <TextInput
                                label="Profesor"
                                value={newMateriaProfesor}
                                onChangeText={text => setNewMateriaProfesor(text)}
                                style={styles.input}
                            />
                            <TextInput
                                label="Semestre"
                                value={newMateriaSemestre}
                                onChangeText={text => setNewMateriaSemestre(text)}
                                style={styles.input}
                            />
                            <Button mode="contained" onPress={handleAddMateria} style={styles.addButton}>
                                Agregar Materia
                            </Button>
                        </View>
                    </View>
                </Modal>
            </Portal>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    scrollViewContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 8,
        elevation: 5,
    },
    input: {
        marginBottom: 10,
    },
    addButton: {
        marginTop: 10,
    },
});

export default TusMaterias;
