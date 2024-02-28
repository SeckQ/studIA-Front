import {StatusBar} from 'expo-status-bar';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import ListaNotasCard from "../components/ListaNotasCard";
import {Appbar, Card, Chip, FAB, Icon, Title} from "react-native-paper";
import {useState} from "react";

export default function ListaNotas() {

    const [notas, setNotas] = useState([]);
    const [loading, setLoading] = useState(true);


    return (

        <SafeAreaView style={{...StyleSheet.absoluteFillObject, backgroundColor: "#ffffff"}}>
            <ScrollView contentContainerStyle={{padding: 20, gap: 10}}>

                <View style={styles.container}>

                    <Appbar.Header>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Tus Apuntes</Text>
                                <Text style={{ fontSize: 16, color: "#939393FF" }}>Elige sobre qué quieres estudiar</Text>
                            </View>
                            {/* Icono completamente a la derecha */}
                            <Icon
                                source="alpha-a-circle"
                                color={"#7930D8FF"}
                                size={50}
                            />
                        </View>
                    </Appbar.Header>


                    <Card style={styles.card}>
                        <View >
                            <View style={styles.titulo}>
                                <Text>Título</Text>
                                <Text style={{marginRight:50}}>Tipo</Text>
                            </View>
                        </View>
                        <ListaNotasCard> </ListaNotasCard>
                    </Card>

                    <ScrollView style={{width: '100%'}}>
                        {/*{loading ? (*/}
                        {/*    <Text>Cargando notas...</Text>*/}
                        {/*) : (*/}
                        {/*    <View>*/}
                        {/*        {notas.length > 0 ? (*/}
                        {/*            renderNotas()*/}
                        {/*        ) : (*/}
                        {/*            <Text>No hay notas disponibles</Text>*/}
                        {/*        )}*/}
                        {/*    </View>*/}
                        {/*)}*/}
                    </ScrollView>
                </View>

            </ScrollView>
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


    card: {
        marginTop: 10,
    },
    titulo: {
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },


});