import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card, Chip, Icon, Button} from "react-native-paper";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

const ListaNotasCard = () => {

    const [expanded, setExpanded] = useState(false);
    const navigation = useNavigation();
    const nombre = "Maldito juancho nos trata como esclavos y no nos da ni cafecito";


    const handlePress = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={[styles.cardMaterias, { height: expanded ? 'auto' : 'auto', backgroundColor: expanded ? "#efefef" : "#FFFFFF" }]}>
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            source="alpha-a-circle"
                            color={"#7930D8FF"}
                            size={50}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row'}}>
                                <Text style={{ fontWeight: 'bold', fontSize: 14 }} numberOfLines={1}>
                                    {nombre.length > 16 ? `${nombre.substring(0, 16)}...` : nombre}
                                </Text>
                            </View>
                            <Text style={{ fontSize: 14, color: "#939393FF" }}>Fecha</Text>
                        </View>
                    </View>
                    <View style={styles.chipsContainer}>
                        <Chip style={[
                            styles.chip,
                            { backgroundColor: expanded ? '#7930d8' : '#decbfc' }
                        ]} textStyle={{ color: expanded ? '#FFFFFF' : '#000000' }}>Nota</Chip>
                    </View>
                    <Icon
                        source={expanded ? "chevron-up" : "chevron-down"}
                        color={"#939393"}
                        size={25}
                    />
                </View>
            </TouchableOpacity>
            {expanded && (
                <View style={styles.expandedContent}>
                    {/* Contenido extendido */}
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Descripción</Text>
                    <Text style={{ fontSize: 16, color: "#939393FF" }}>Que GOZU que soy!!!</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
                        <Button
                            icon="pencil"
                            mode="contained"
                            onPress={() => {navigation.navigate('Repaso');}}
                            style={{ alignSelf: 'flex-end', backgroundColor: '#7930D8' }}
                        >
                            Repaso
                        </Button>
                    </View>
                </View>
            )}
        </Card>
    );
}

const styles = StyleSheet.create({
    cardMaterias: {
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
        overflow: 'hidden',
    },
    container: {
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    chipsContainer: {
        alignItems: 'center', // Para alinear verticalmente los Chips si hay más de una línea
        marginLeft: 10,
    },
    expandedContent: {
        padding: 10,
    },
});

export default ListaNotasCard;