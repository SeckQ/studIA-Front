import React from "react";
import { Card } from "react-native-paper";
import { StyleSheet, Text } from "react-native";

const PerfilMateriaInformacion = ({ materia }) => {
    return (
        <Card>
            <Card.Content style={styles.content}>
                <Text style={styles.title}>{materia.name}</Text>
                <Text style={styles.text}>Docente: {materia.professor}</Text>
                {/*<Text style={styles.text}>Contacto: {materia.contact}</Text>*/}
                <Text style={styles.text}>Semestre: {materia.semester}</Text>
                {/*<Text style={styles.text}>*/}
                {/*    Período Académico: {materia.academic_period}*/}
                {/*</Text>*/}
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#FFFFFF",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
    },
    text: {
        fontSize: 16,
        color: "#939393FF",
    },
});

export default PerfilMateriaInformacion;
