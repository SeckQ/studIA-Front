import React, { useState, useEffect } from 'react';
import {Appbar} from "react-native-paper";
import {FlatList, StyleSheet, View} from "react-native";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";

const MateriaInicioCard = () => {
    const [subjects, setSubjects] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/subjects/1');
                setSubjects(response.data.subjects);
                console.log(subjects)
            } catch (error) {
                console.error('Error fetching Subjects:', error);
            }
        };
        console.log(subjects);
        fetchSubjects();
    }, []);

    const renderSubjectItem = ({ item }) => (
        <View>
            <Appbar.Header style={styles.cardMaterias}>
                <Appbar.Action
                    icon={({ color, size }) => (
                        <View style={[styles.circle, { backgroundColor: '#7930D8' }]}>
                            <Appbar.Action icon="note" color="#FFFFFF" size={size} />
                        </View>
                    )}
                />
                <Appbar.Content title={item.name} />
                <Appbar.Action icon="chevron-right" size={30} onPress={() => {navigation.navigate('RegistroNotas');}} />
            </Appbar.Header>
        </View>
    );

    return (
        <View style={styles.containerMaterias}>
            <FlatList
                data={subjects}
                keyExtractor={(item) => item.subject_id.toString()}
                renderItem={renderSubjectItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    cardMaterias: {
        flex: 1, // Para que las tarjetas ocupen el 50% del ancho
        marginHorizontal: 5, // Para agregar un pequeño margen entre las tarjetas
        borderWidth: 1, // Ancho del borde
        borderColor: '#adadad', // Color del borde
        backgroundColor: 'transparent', // Fondo transparent
        borderRadius: 8,
        marginTop: 10,

    },
    circle: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        margin: -10,
    },

});

export default MateriaInicioCard;

