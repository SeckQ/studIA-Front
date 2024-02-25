import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import axios from 'axios';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const TusMaterias = () => {
    //const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/subjects/1')
            .then(response => {
                setSubjects(response.data.subjects);
                console.log(subjects)
            })
            .catch(error => {
                console.error('Error fetching subjects:', error);
            });
    }, []);

    return subjects.map((subject, subject_id) =>(
        <View>
            {subject.map}
        </View>

    ));

    // return (
    //     <View style={styles.container}>
    //         {subjects.map(subject => (
    //             <View key={subject.subject_id} style={styles.cardContainer}>
    //                 <Card>
    //                     <Card.Title title={subject.name} subtitle={`Professor: ${subject.professor}`} />
    //                     <Card.Content>
    //                         <Text>Semester: {subject.semester}</Text>
    //                     </Card.Content>
    //                     <Card.Actions>
    //                         <Button>Cancel</Button>
    //                         <Button>Ok</Button>
    //                     </Card.Actions>
    //                 </Card>
    //             </View>
    //         ))}
    //     </View>
    // );
};

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function TusMaterias() {
    return (
        <View style={styles.container}>
            <Text>Tus Materias!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    cardContainer: {
        width: '45%', // Ajusta el ancho según tus necesidades
        margin: '2.5%', // Ajusta el margen según tus necesidades
    },
});

export default TusMaterias;

        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

