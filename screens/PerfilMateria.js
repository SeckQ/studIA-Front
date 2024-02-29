import * as React from "react";
import {Appbar, Button, Card, Text, Icon, Avatar, IconButton, Chip} from 'react-native-paper';
import {StyleSheet, ScrollView, Image, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import PerfilMateriaInformacion from "../components/PerfilMateriaInformacion";
import PerfilMateriaCard from "../components/PerfilMateriaCard";
import AvatarComponent from "../components/AvatarComponent"
import axios from "axios";
import Config from "../config/Config";

const PerfilMateria = ({route}) => {

  const navigation = useNavigation();
  const { materiaId } = route.params;
  const [materia, setMateria] = React.useState('');


  React.useEffect(() => {
    const obtenerInformacionMateria = async () => {
      try {
        const response = await axios.get(`${Config.apiUrl}/subjects/1/${materiaId}`);
        setMateria(response.data.subject);
      } catch (error) {
        console.error("Error al obtener la información de la materia:", error);
      }
    };

    obtenerInformacionMateria();
  }, [materiaId]);

  const colors = [
    "#FF5733",
    "#33FF57",
    "#3366FF",
    "#FF3366",
    "#33FFFF",
    "#FFFF33",
    "#9933FF",
    "#FF33CC",
    "#33FF99",
    "#FF9933",
    "#6633FF",
    "#33FF66",
    "#CC33FF",
    "#FF6633",
    "#33CCFF",
    "#FF33FF",
    "#33FFCC",
    "#FFCC33",
    "#33FFFF",
    "#FF33FF",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (

      <SafeAreaView style={{...StyleSheet.absoluteFillObject, backgroundColor: "#ffffff"}}>
        <ScrollView contentContainerStyle={{marginTop:2, gap: 10}}>
          <Appbar.Header>
            {materia && <AvatarComponent materia={materia}></AvatarComponent>}
          </Appbar.Header>

          <PerfilMateriaInformacion materia={materia}></PerfilMateriaInformacion>

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


          <PerfilMateriaCard materiaId={materiaId}></PerfilMateriaCard>


          <View>
            <Appbar.Header style={{margin:10}}>
              <Appbar.Content title="Próximas Tareas" titleStyle={{ fontWeight: "bold" }} />
            </Appbar.Header>


            <ScrollView horizontal style={styles.scrollView}>
              <Card style={styles.card2}>
                <View style={[styles.card2, {justifyContent: 'space-between'}]}>
                  <View>
                    <Text variant="titleMedium" style={styles.title2}>POR HACER 9</Text>
                  </View>
                  <View style={{margin:10}}>
                    <Icon
                        source="dots-vertical"
                        color={"#000000"}
                        size={30}
                    />
                  </View>
                </View>
                <Card style={styles.card3}>
                  <Text variant="titleMedium" >Vectores</Text>
                  <View style={styles.chipsContainer}>
                    <Chip style={[styles.chip, { backgroundColor: '#ffb6ae' }]}>Tareas</Chip>
                    <Chip style={[styles.chip, { backgroundColor: '#a8d7f8' }]}>Exposiciones</Chip>
                    <Chip style={[styles.chip, { backgroundColor: '#cdffce' }]}>Lecciones</Chip>
                  </View>
                  <View style={styles.info}>
                    <View style={styles.iconContainer}>
                      <Icon source="paperclip" color="#939393FF" size={20} />
                    </View>
                    <Text variant="bodyMedium" style={styles.number}>3</Text>
                    <View style={styles.iconContainer}>
                      <Icon source="forum-outline" color="#939393FF" size={20} />
                    </View>
                    <Text variant="bodyMedium" style={styles.number}>1</Text>
                    <View style={styles.iconContainer}>
                      <Icon source="check-circle-outline" color="#939393FF" size={20} />
                    </View>
                    <Text variant="bodyMedium" style={styles.number}>0/3</Text>
                    <View style={{marginLeft:18}}>
                      <Image
                          style={styles.avatar}
                          source={require("../assets/avatar-50.png")}
                      />
                    </View>
                  </View>
                </Card>
                <Card style={styles.card3}>
                  <Text variant="titleMedium" >Matrices</Text>
                  <View style={styles.chipsContainer}>
                    <Chip style={[styles.chip, { backgroundColor: '#fddaad' }]}>Pruebas</Chip>
                    <Chip style={[styles.chip, { backgroundColor: '#a8d7f8' }]}>Tareas</Chip>
                  </View>
                  <View style={styles.info}>
                    <View style={styles.iconContainer}>
                      <Icon source="paperclip" color="#939393FF" size={20} />
                    </View>
                    <Text variant="bodyMedium" style={styles.number}>3</Text>
                    <View style={{marginLeft:143}}>
                      <Image
                          style={styles.avatar}
                          source={require("../assets/avatar-51.png")}
                      />
                    </View>
                  </View>
                </Card>
                <Card style={styles.card3}>
                  <Text variant="titleMedium" >Sistemas de Ecuaciones</Text>
                  <View style={styles.chipsContainer}>
                    <Chip style={[styles.chip, { backgroundColor: '#a8d7f8' }]}>Tareas</Chip>
                    <Chip style={[styles.chip, { backgroundColor: '#d9befa' }]}>Ejercicios</Chip>
                    <Chip style={[styles.chip, { backgroundColor: '#a8d7f8' }]}>Pruebas</Chip>
                  </View>
                  <View style={styles.info}>
                    <View style={styles.iconContainer}>
                      <Icon source="paperclip" color="#939393FF" size={20} />
                    </View>
                    <Text variant="bodyMedium" style={styles.number}>3</Text>
                    <View style={{marginLeft:143}}>
                      <Image
                          style={styles.avatar}
                          source={require("../assets/avatar-34.png")}
                      />
                    </View>
                  </View>
                </Card>
              </Card>

              <Card style={styles.card2}>
                <View style={[styles.card2, {justifyContent: 'space-between'}]}>
                  <View>
                    <Text variant="titleMedium" style={[styles.title2, {color: "#ff9514"}]}>En PROGRESO 6</Text>
                  </View>
                  <View style={{margin:10}}>
                    <Icon
                        source="dots-vertical"
                        color={"#000000"}
                        size={30}
                    />
                  </View>
                </View>
                <Card style={styles.card3}>
                  <Text variant="titleMedium" >Espacios Vectoriales</Text>
                  <View style={styles.chipsContainer}>
                    <Chip style={[styles.chip, { backgroundColor: '#ffb6ae' }]}>Tareas</Chip>
                    <Chip style={[styles.chip, { backgroundColor: '#a8d7f8' }]}>Exposiciones</Chip>
                    <Chip style={[styles.chip, { backgroundColor: '#cdffce' }]}>Lecciones</Chip>
                  </View>
                  <View style={styles.info}>
                    <View style={styles.iconContainer}>
                      <Icon source="paperclip" color="#939393FF" size={20} />
                    </View>
                    <Text variant="bodyMedium" style={styles.number}>2</Text>
                    <View style={styles.iconContainer}>
                      <Icon source="forum-outline" color="#939393FF" size={20} />
                    </View>
                    <Text variant="bodyMedium" style={styles.number}>2</Text>
                    <View style={styles.iconContainer}>
                      <Icon source="check-circle-outline" color="#939393FF" size={20} />
                    </View>
                    <Text variant="bodyMedium" style={styles.number}>1/2</Text>
                    <View style={{marginLeft:18}}>
                      <Image
                          style={styles.avatar}
                          source={require("../assets/avatar-52.png")}
                      />
                    </View>
                  </View>
                </Card>
                <Card style={styles.card3}>
                  <Text variant="titleMedium" >ERP</Text>
                  <View style={styles.chipsContainer}>
                    <Chip style={[styles.chip, { backgroundColor: '#fddaad' }]}>Proyecto</Chip>
                    <Chip style={[styles.chip, { backgroundColor: '#a8d7f8' }]}>Ejemplo</Chip>
                  </View>
                  <View style={styles.info}>
                    <View style={styles.iconContainer}>
                      <Icon source="paperclip" color="#939393FF" size={20} />
                    </View>
                    <Text variant="bodyMedium" style={styles.number}>3</Text>
                    <View style={styles.iconContainer}>
                      <Icon source="forum-outline" color="#939393FF" size={20} />
                    </View>
                    <Text variant="bodyMedium" style={styles.number}>9</Text>
                    <View style={{marginLeft:88}}>
                      <Image
                          style={styles.avatar}
                          source={require("../assets/avatar-25.png")}
                      />
                    </View>
                  </View>
                </Card>
              </Card>
            </ScrollView>

          </View>
        </ScrollView>
      </SafeAreaView>



  );
}

const styles = StyleSheet.create({

  // estilos icono
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


  // estilos cards archivo, registro, etc
  scrollView: {
    flexDirection: 'row',
    padding: 0,
    marginVertical:20
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


  //estilos proximas tareas
  card2: {
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
  },
  card3: {
    backgroundColor:'#FFFFFF',
    marginBottom:10,
    padding: 10,
  },
  title2: {
    fontWeight: "bold",
    color: '#197DCA',
    marginLeft:10,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center', // Para alinear verticalmente los Chips si hay más de una línea
  },
  chip: {
    margin: 4, // Margen entre los Chips
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginLeft: 20, // Ajusta el espacio entre los iconos y los números
  },
  number: {
    color: '#939393FF',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5, // Ajusta el espacio entre los números
  },
  avatar: {
    width: 35,
    height: 35,
    resizeMode: 'contain', // Ajuste de la imagen para que quepa dentro del tamaño especificado sin distorsión
  },


});

export default PerfilMateria;