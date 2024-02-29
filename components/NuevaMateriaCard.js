import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const NuevaMateriaCard = ({ onPress }) => {
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

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Card style={{ ...styles.card }}>
                <View style={styles.cardContent}>
                    <Avatar.Icon
                        size={80}
                        icon="plus"
                    />
                    <Text style={styles.materiaName}>Nueva Materia</Text>
                </View>
            </Card>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '48%',
        marginBottom: 20,
    },
    cardContent: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    materiaName: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default NuevaMateriaCard;
