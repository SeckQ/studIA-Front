import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
=======
import {View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { Card } from 'react-native-paper';
>>>>>>> test
import axios from 'axios';
import Modal from 'react-native-modal';
import Navigation from "../Navigation";
import MyTabs from "../MyTabs";

<<<<<<< HEAD
const TusMaterias = () => {
    const [subjects, setSubjects] = useState([]);
=======
const colors = [
    "#FF5733",
    "#33FF57",
    "#3366FF",
    "#FF3366",
    "#33FFFF",
    "#FFFF33",
    "#9933FF",
    "#FF33CC",
    "#33FF99",
    "#FF9933",
    "#6633FF",
    "#33FF66",
    "#CC33FF",
    "#FF6633",
    "#33CCFF",
    "#FF33FF",
    "#33FFCC",
    "#FFCC33",
    "#33FFFF",
    "#FF33FF",
];

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

const TusMaterias = () => {
    const [subjects, setSubjects] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newSubjectName, setNewSubjectName] = useState('');
    const [newProfessor, setNewProfessor] = useState('');
    const [newSemester, setNewSemester] = useState(0);
    const [shouldUpdate, setShouldUpdate] = useState(false);
>>>>>>> test

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/subjects/1');
                setSubjects(response.data.subjects);
<<<<<<< HEAD
                console.log(subjects)
=======
>>>>>>> test
            } catch (error) {
                console.error('Error fetching Subjects:', error);
            }
        };
<<<<<<< HEAD
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
=======
        fetchSubjects();
    }, [shouldUpdate]);

    const handleAddSubject = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/subjects', {
                active: 1,
                name: newSubjectName,
                professor: newProfessor,
                semester: newSemester,
                user_id: 1
            });
            console.log('Subject added successfully:', response.data);
            setShouldUpdate(prev => !prev);

            setIsModalVisible(false);
            setNewSubjectName('');
            setNewProfessor('');
            setNewSemester(0);
        } catch (error) {
            console.error('Error adding subject:', error);
        }
    };

    const renderSubjectItem = ({ item, index }) => {

        const initials = item.name ?
            item.name
            .split(' ')
            .map(word => word.charAt(0))
            .join(''):'';

        const circleColor = getRandomColor();

        return (
            <Card style={[styles.card, { backgroundColor: 'transparent' }]}>
                <Card.Content>
                    <View style={styles.cardContent}>
                        <View style={[styles.initialsContainer, { backgroundColor: circleColor }]}>
                            <Text style={styles.initialsText}>{initials}</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text variant="titleLarge" style={styles.title}>{item.name}</Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        );
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <View>
                <FlatList
                    data={[...subjects, { addNew: true }]}
                    keyExtractor={(item, index) => item.addNew ? 'addNew' : index.toString()}
                    renderItem={({ item, index }) => {
                        if (item.addNew) {
                            return (
                                <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                                    <Card style={styles.addNewCard}>
                                        <Card.Content>
                                            <View style={styles.cardContent}>
                                                <View style={styles.plusSignContainer}>
                                                    <Text style={styles.plusSign}>+</Text>
                                                </View>
                                                <View style={{ marginLeft: 10 }}>
                                                    <Text variant="titleLarge" style={styles.title}>Añadir Nueva Materia</Text>
                                                </View>
                                            </View>
                                        </Card.Content>
                                    </Card>
                                </TouchableOpacity>
                            );
                        } else {
                            return renderSubjectItem({ item, index });
                        }
                    }}
                    numColumns={2}
                    contentContainerStyle={styles.flatListContent}
                />

                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Ingrese el nombre de la nueva materia:</Text>
                        <TextInput
                            style={styles.modalInput}
                            value={newSubjectName}
                            onChangeText={setNewSubjectName}
                            placeholder="Nombre de la materia"
                        />
                        <TextInput
                            style={styles.modalInput}
                            value={newProfessor}
                            onChangeText={setNewProfessor}
                            placeholder="Profesor"
                        />
                        <TextInput
                            style={styles.modalInput}
                            value={newSemester.toString()}
                            onChangeText={text => setNewSemester(parseInt(text) || 0)}
                            placeholder="Semestre"
                            keyboardType="numeric"
                        />
                        <TouchableOpacity style={styles.modalButton} onPress={handleAddSubject}>
                            <Text style={styles.modalButtonText}>Agregar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => setIsModalVisible(false)}>
                            <Text style={styles.modalButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
            <MyTabs/>
        </ScrollView>
>>>>>>> test
    );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
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
=======
    card: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        width: "48%",
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    initialsContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginTop: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    initialsText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    addNewCard: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        width: "85%",
        backgroundColor: 'rgba(128, 0, 128, 0.1)',
    },
    plusSign: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    flatListContent: {
        padding: 20,
    },
    plusSignContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginTop: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalInput: {
        backgroundColor: '#F2F2F2',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    modalButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    modalButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
>>>>>>> test
    },
});

export default TusMaterias;

