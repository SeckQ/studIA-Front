import * as React from "react";
import {Appbar, Button, Card, Text, Icon, Avatar} from 'react-native-paper';
import {StyleSheet, ScrollView, Image, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import PerfilMateriaInformacion from "../components/PerfilMateriaInformacion";
import PerfilMateriaCard from "../components/PerfilMateriaCard";

const RegistroNotas = () => {

    const navigation = useNavigation();

    return (

        <SafeAreaView style={{...StyleSheet.absoluteFillObject, backgroundColor: "#ffffff"}}>
            <ScrollView contentContainerStyle={{marginTop:15, gap: 10}}>
                <Appbar.Header>
                    <Appbar.Action
                        icon="alpha-a-circle"
                        color="#7930D8"
                        size={77}
                    />
                    <Appbar.Button></Appbar.Button>
                </Appbar.Header>


                <PerfilMateriaInformacion></PerfilMateriaInformacion>


                <View>
                    <Appbar.Header style={styles.cardMaterias}>
                        <Appbar.Action
                            icon={({ color, size }) => (
                                <View style={[styles.circle, { backgroundColor: '#7930D8' }]}>
                                    <Appbar.Action icon="medal" color="#FFFFFF" size={size} />
                                </View>
                            )}
                        />
                        <Appbar.Content title="Registro de Notas" />
                        <Appbar.Action icon="chevron-right" size={30} onPress={() => {}} />
                    </Appbar.Header>
                </View>
                <View>
                    <Appbar.Header style={styles.cardMaterias}>
                        <Appbar.Action
                            icon={({ color, size }) => (
                                <View style={[styles.circle, { backgroundColor: '#7930D8' }]}>
                                    <Appbar.Action icon="folder" color="#FFFFFF" size={size} />
                                </View>
                            )}
                        />
                        <Appbar.Content title="Archivos" />
                        <Appbar.Action icon="chevron-right" size={30} onPress={() => {}} />
                    </Appbar.Header>
                </View>


                <PerfilMateriaCard></PerfilMateriaCard>


            </ScrollView>
        </SafeAreaView>



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
    },
    circle: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        margin: -10,
    },

});

export default RegistroNotas;