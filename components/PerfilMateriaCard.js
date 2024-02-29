import {Appbar} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";



const PerfilMateriaInformacion = ({materiaId}) => {

    const navigation = useNavigation();

    return (
        <View>
            <Appbar.Header style={styles.cardMaterias}>
                <Appbar.Action
                    icon={({ color, size }) => (
                        <View style={[styles.circle, { backgroundColor: '#7930D8' }]}>
                            <Appbar.Action icon="note" color="#FFFFFF" size={size} />
                        </View>
                    )}
                />
                <Appbar.Content title="Apuntes" />
                <Appbar.Action icon="chevron-right" size={30} onPress={() => {navigation.navigate('ListaNotas',{materiaId});}} />
            </Appbar.Header>
        </View>
    );
}

const styles = StyleSheet.create({

    cardMaterias: {
        flex: 1, // Para que las tarjetas ocupen el 50% del ancho
        marginHorizontal: 5, // Para agregar un pequeño margen entre las tarjetas
        borderWidth: 1, // Ancho del borde
        borderColor: '#adadad', // Color del borde
        backgroundColor: 'transparent', // Fondo transparent
        borderRadius: 8,
        margin: 0,

    },
    circle: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        margin: -10,
    },

});

export default PerfilMateriaInformacion;