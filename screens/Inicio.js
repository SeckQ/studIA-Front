import * as React from "react";
import { Appbar, Button, Card, Text, Icon } from 'react-native-paper';
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MateriaIncioCard from "../components/MateriaInicioCard";
import axios from 'axios';
import Config from "../config/Config";

const Inicio = () => {
  const navigation = useNavigation();
  const [materias, setMaterias] = React.useState([]); // Estado para almacenar las materias

  const obtenerMaterias = async () => {
    try {
      const response = await axios.get(`${Config.apiUrl}/subjects/1`);
      setMaterias(response.data.subjects.slice(0, 4)); // Actualizar el estado con las primeras 4 materias obtenidas
    } catch (error) {
      console.error('Error al obtener las materias:', error);
    }
  };

  React.useEffect(() => {
    obtenerMaterias();
  }, []);

  const handleMateriaPress = (materiaId) => {
    // Navegar a la pantalla PerfilMateria y pasar el ID de la materia
    navigation.navigate('PerfilMateria', { materiaId });
  };

  return (
      <SafeAreaView style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "#ffffff" }}>
        <ScrollView contentContainerStyle={{ padding: 20, gap: 10 }}>
          <Appbar.Header>
            <Appbar.Content title="Hola Juan!!" titleStyle={{ fontWeight: "bold" }} />
            <Appbar.Action icon="magnify" />
            <Appbar.Action icon="bell-outline" />
            <Image
                style={styles.avatar}
                source={require("../assets/avatar-52.png")}
            />
          </Appbar.Header>

          <Card style={styles.Card}>
            <Card.Content>
              <View style={styles.containerCard}>
                <View style={styles.containerTextCard}>
                  <Text style={{ color: '#7930D8' }} variant="titleLarge">Horario</Text>
                  <Text variant="bodyMedium">Revisa tu horario</Text>
                  <Card.Actions>
                    <Button style={{ backgroundColor: '#7930D8', marginLeft: -10 }}
                            mode="contained">Empieza!</Button>
                  </Card.Actions>
                </View>
                <View style={styles.imagenContainer}>
                  <Card.Cover source={require("../assets/image-3.png")} style={styles.imagenCard} />
                </View>
              </View>
            </Card.Content>
          </Card>

          <View>
            <Appbar.Header>
              <Appbar.Content title="Materias" titleStyle={{ fontWeight: "bold" }} />
              <Appbar.Action
                  icon="chevron-right"
                  color="#7930D8"
                  onPress={() => {
                    navigation.navigate('TusMaterias');
                  }}
              />
            </Appbar.Header>
            <View style={styles.materiasContainer}>
              {/* Mapear las materias y renderizar los componentes MateriaInicioCard */}
              {materias.map(materia => (
                  <TouchableOpacity key={materia.subject_id} onPress={() => handleMateriaPress(materia.subject_id)}>
                    <MateriaIncioCard materia={materia} />
                  </TouchableOpacity>
              ))}
            </View>
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
            <ScrollView horizontal style={styles.scrollView}>
              <Card style={styles.card}>
                <Card.Cover source={require("../assets/image-15.png")} />
                <View style={styles.cardContent}>
                  <Text variant="titleLarge" style={styles.title}>Deber 1</Text>
                  <Text variant="bodyMedium" style={styles.subtitle}>Álgebra Lineal</Text>
                  <Text variant="bodyMedium" style={styles.date}>Jue. 22. Febrero 2024 7:00am</Text>
                </View>
              </Card>
              <Card style={styles.card}>
                <Card.Cover source={require("../assets/image-18.jpg")} />
                <View style={styles.cardContent}>
                  <Text variant="titleLarge" style={styles.title}>Deber D.M</Text>
                  <Text variant="bodyMedium" style={styles.subtitle}>Dispositivos Móviles</Text>
                  <Text variant="bodyMedium" style={styles.date}>Vie. 1. Marzo 2024 7:00am</Text>
                </View>
              </Card>
              <Card style={styles.card}>
                <Card.Cover source={require("../assets/image-19.webp")} />
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
  );
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
    width: '50%',
  },
  imagenCard: {
    flex: 1,
  },
  containerMaterias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Permite que los elementos pasen a la siguiente fila
  },
  cardMaterias: {
    width: '48%', // Establece el ancho para que se muestren dos tarjetas por fila
    marginBottom: 10,
  },
  scrollView: {
    flexDirection: 'row',
    padding: 10,
  },
  card: {
    marginRight: 10,
    width: 250,
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
