import * as React from "react";
import {Appbar, Avatar, Button, Card, Text, IconButton} from 'react-native-paper';
import {StyleSheet, ScrollView, Image, View, TouchableRipple} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";

const Inicio = () => {
    const navigation = useNavigation();
    const LeftContent = props => <Avatar.Icon {...props} icon="folder"/>
    const [visible, setVisible] = React.useState(true);

    return (
        <SafeAreaView style={{...StyleSheet.absoluteFillObject, backgroundColor: "#ffffff"}}>
            <ScrollView contentContainerStyle={{padding: 20, gap: 10}}>
                <Appbar.Header>
                    <Appbar.Content title="Hola Juan!!"/>
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
                        <Appbar.Content title="Materias" />
                        <Appbar.Action

                            icon="chevron-right"
                            color="#7930D8"
                            onPress={() => {
                                /* Acción al presionar el botón "Ver más" */
                            }}
                        />
                    </Appbar.Header>
                    <View style={styles.containerMaterias}>
                        <Card.Title
                            title="Álgebra Lineal"
                            left={(props) => <Avatar.Icon {...props} icon="folder" />}
                            style={styles.cardMaterias}
                        />
                        <Card.Title
                            title="Análisis de Datos"
                            left={(props) => <Avatar.Icon {...props} icon="folder" />}
                            style={styles.cardMaterias}
                        />
                    </View>
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


});

export default Inicio;
