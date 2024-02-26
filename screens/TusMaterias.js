import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import MateriaCard from '../components/MateriaCard';
import axios from 'axios';
import Config from "../config/Config";
import {useNavigation} from "@react-navigation/native";

const TusMaterias = () => {
    const navigation = useNavigation();

    const [materias, setMaterias] = useState([]);

    useEffect(() => {
        const fetchMaterias = async () => {
            try {
                const response = await axios.get(`${Config.apiUrl}/subjects/1`);
                setMaterias(response.data.subjects);
            } catch (error) {
                console.error('Error al obtener las materias:', error);
            }
        };

        fetchMaterias();
    }, []);


    const renderMaterias = () => {
        return materias.map((materia, index) => (

            <MateriaCard materia={materia}/>

        ));
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                {renderMaterias()}
            </ScrollView>
        </View>
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
});

export default TusMaterias;
