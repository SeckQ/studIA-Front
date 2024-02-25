import * as React from "react";
import {Appbar, Button, Card, Text, Icon} from 'react-native-paper';
import {StyleSheet, ScrollView, Image, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import MateriaInicioCard from "../components/MateriaInicioCard"

const Inicio = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{...StyleSheet.absoluteFillObject, backgroundColor: "#ffffff"}}>
            <ScrollView contentContainerStyle={{padding: 20, gap: 10}}>
                <Appbar.Header>
                    <Appbar.Content title="Hola Juan!!" titleStyle={{ fontWeight: "bold" }}/>
                    <Appbar.Action icon="magnify"/>
                    <Appbar.Action icon="bell-outline"/>
                    <Image
                        style={styles.avatar}
                        source={require("../../assets/avatar-52.png")}
                    />
                </Appbar.Header>


                <Card style={styles.Card}>
                    <Card.Content>
                        <View style={styles.containerCard}>
                            <View style={styles.containerTextCard}>
                                <Text style={{color: '#7930D8'}} variant="titleLarge">Horario</Text>
                                <Text variant="bodyMedium">Revisa tu horario</Text>
                                <Card.Actions>
                                    <Button style={{backgroundColor: '#7930D8', marginLeft: -10}}
                                            mode="contained">Empieza!</Button>
                                </Card.Actions>
                            </View>
                            <View style={styles.imagenContainer}>
                                <Card.Cover source={require("../../assets/image-3.png")} style={styles.imagenCard}/>
                            </View>
                        </View>
                    </Card.Content>
                </Card>

                <View>
                    <Appbar.Header>
                        <Appbar.Content title="Materias" titleStyle={{ fontWeight: "bold" }}/>
                        <Appbar.Action

                            icon="chevron-right"
                            color="#7930D8"
                            onPress={() => {
                                navigation.navigate('TusMaterias');
                            }}
                        />
                    </Appbar.Header>
                    <MateriaInicioCard></MateriaInicioCard>
                </View>

                <View>
                    <Appbar.Header>
                        <Appbar.Content title="Tareas" titleStyle={{ fontWeight: "bold" }} />
                        <Appbar.Action
                            icon="chevron-right"
                            color="#7930D8"
                            onPress={() => {

                            }}
                        />
                    </Appbar.Header>
                    <View style={styles.containerMaterias}>
                    </View>

                    <ScrollView horizontal style={styles.scrollView}>
                        <Card style={styles.card}>
                            <Card.Cover source={require("../../assets/image-15.png")} />
                            <View style={styles.cardContent}>
                                <Text variant="titleLarge" style={styles.title}>Deber 1</Text>
                                <Text variant="bodyMedium" style={styles.subtitle}>Álgebra Lineal</Text>
                                <Text variant="bodyMedium" style={styles.date}>Jue. 22. Febrero 2024 7:00am</Text>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <Card.Cover source={require("../../assets/image-18.jpg")} />
                            <View style={styles.cardContent}>
                                <Text variant="titleLarge" style={styles.title}>Deber D.M</Text>
                                <Text variant="bodyMedium" style={styles.subtitle}>Dispositivos Móviles</Text>
                                <Text variant="bodyMedium" style={styles.date}>Vie. 1. Marzo 2024 7:00am</Text>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <Card.Cover source={require("../../assets/image-19.webp")} />
                            <View style={styles.cardContent}>
                                <Text variant="titleLarge" style={styles.title}>Deber 3</Text>
                                <Text variant="bodyMedium" style={styles.subtitle}>Formación de Empre</Text>
                                <Text variant="bodyMedium" style={styles.date}>Mar. 27. Febrero 2023 7:00am</Text>
                            </View>
                        </Card>
                    </ScrollView>

                </View>

        </ScrollView>
</SafeAreaView>

)
    ;
};



const styles = StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        marginBottom: 0,
        marginLeft: 0,
        marginTop: 0,
    },


    Card: {
        backgroundColor: '#F2F9FD',
    },
    containerCard: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 0,
    },
    containerTextCard: {
        flex: 1,
        alignItems: 'flex-start',
    },
    imagenContainer: {
        height: 100,
        width: '50%', // La imagen ocupará el 50% del ancho de la tarjeta
    },
    imagenCard: {
        flex: 1, // Para que la imagen ocupe todo el espacio dentro del contenedor
    },


    containerMaterias: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Para que las tarjetas se distribuyan uniformemente
    },
    cardMaterias: {
        flex: 1, // Para que las tarjetas ocupen el 50% del ancho
        marginHorizontal: 5, // Para agregar un pequeño margen entre las tarjetas
    },


    scrollView: {
        flexDirection: 'row',
        padding: 10,
    },
    card: {
        marginRight: 10, // Espacio entre cada tarjeta
        width: 250, // Ancho de cada tarjeta
    },
    cardContent: {
        padding: 10,
    },
    title: {
        fontWeight: "bold",
    },
    subtitle: {
        color: "#939393",
        marginTop: 5,
    },
    date: {
        color: "#939393",
        marginTop: 15,
    },


});

export default Inicio;
