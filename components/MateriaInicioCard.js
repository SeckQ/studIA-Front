import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-paper';

const MateriaInicioCard = ({ materia }) => {
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

    return (
        <View style={styles.containerMaterias}>
            <Card style={styles.cardMaterias}>
                <Card.Title
                    title={materia.name}
                    left={(props) => (
                        <Avatar.Text
                            {...props}
                            label={materia.name.charAt(0).toUpperCase()}
                            style={{ backgroundColor: randomColor }}
                        />
                    )}
                />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    containerMaterias: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardMaterias: {
        flex: 1,
        marginHorizontal: 5,
        marginTop: 10
    },
});

export default MateriaInicioCard;
