import {Avatar, Card} from "react-native-paper";
import {StyleSheet, Text, View} from "react-native";


const MateriaInicioCard = () => {
    return (
        <View style={styles.containerMaterias}>
            <Card.Title
                title="Álgebra Lineal"
                left={(props) => <Avatar.Icon {...props} icon="folder" color="#FFFFFF" style={{backgroundColor: '#7930D8'}}/>}
                style={styles.cardMaterias}
            />
        </View>

    );
}

const styles = StyleSheet.create({

    containerMaterias: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Para que las tarjetas se distribuyan uniformemente
    },
    cardMaterias: {
        flex: 1, // Para que las tarjetas ocupen el 50% del ancho
        marginHorizontal: 5, // Para agregar un pequeño margen entre las tarjetas
    },
});

export default MateriaInicioCard;

