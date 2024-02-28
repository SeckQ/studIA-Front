import {Avatar, Card} from "react-native-paper";
import {StyleSheet, Text, View} from "react-native";


const PerfilMateriaInformacion = () => {
    return (
        <Card>
            <Card.Content style={{ backgroundColor: "#FFFFFF" }}>
                <Text style={styles.title}>Álgebra Lineal</Text>
                <Text style={styles.text}>Docente: Carlos López</Text>
                <Text style={styles.text}>Contacto: clopez@estudio.edu</Text>
                <Text style={styles.text}>Semestre: 6to</Text>
                <Text style={styles.text}>Perio Acádemico: 2023 - 2024</Text>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({

    title: {
        fontSize: 20, // Tamaño de fuente más grande para el título
        fontWeight: 'bold', // Negrita para el título
        color: '#000000', // Color de texto negro para el título
    },
    text: {
        fontSize: 16, // Tamaño de fuente normal para el texto
        color: '#939393FF', // Color de texto gris claro para el texto
    },

});

export default PerfilMateriaInformacion;

