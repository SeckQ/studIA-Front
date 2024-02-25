import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
import axios from 'axios';

const TusMaterias = () => {
    const [subjects, setSubjects] = useState([]);

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

//     const renderSubjectItem = ({ item }) => (
//
//         <View style={styles.listItemContainer}>
//             <Text style={styles.subjectName}>{item.name}</Text>
//             <Text style={styles.subjectProfessor}>Professor: {item.professor}</Text>
//             <Text style={styles.subjectSemester}>Semester: {item.semester}</Text>
//         </View>
//     );
//
//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={subjects}
//                 keyExtractor={(item) => item.subject_id.toString()}
//                 renderItem={renderSubjectItem}
//             />
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f8f8f8',
//         paddingHorizontal: 20,
//         paddingTop: 20,
//     },
//     listItemContainer: {
//         marginBottom: 20,
//         padding: 10,
//         backgroundColor: '#fff',
//         borderRadius: 10,
//     },
//     subjectName: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 5,
//         color: '#333',
//     },
//     subjectProfessor: {
//         fontSize: 16,
//         color: '#666',
//     },
//     subjectSemester: {
//         fontSize: 16,
//         color: '#666',
//     },
// });
    const renderSubjectItem = ({ item }) => (
        <Card style={styles.card}>
            <Card.Title title={item.name} subtitle={`Professor: ${item.professor}`} />
            <Card.Content>
                <Text>Semester: {item.semester}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
                <Button>Ver detalles</Button>
            </Card.Actions>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={subjects}
                keyExtractor={(item) => item.subject_id.toString()}
                renderItem={renderSubjectItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    card: {
        width: "30%",
        height: "30%",
        marginBottom: 20,
    },
});

export default TusMaterias;

