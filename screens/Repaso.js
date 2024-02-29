import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';
import Config from "../config/Config";
import { useNavigation } from '@react-navigation/native';
import PreguntaCard from "../components/PreguntaCard";

const Repaso = ({ route }) => {
  const navigation = useNavigation();
  const [preguntas, setPreguntas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasUsuario, setRespuestasUsuario] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { content } = route.params;

  console.log(content);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${Config.apiUrl}/generate-questions`, {
          text: content,
          quantity: 4,
          temperature: 0.8
        });
        const { preguntas_y_respuestas } = response.data;
        setPreguntas(preguntas_y_respuestas);
        setCargando(false);
      } catch (error) {
        console.error('Error al obtener las preguntas:', error);
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  const handleSiguientePregunta = () => {
    setPreguntaActual(preguntaActual + 1);
  };

  const handleSelectOption = (index) => {
    const respuestaSeleccionada = index + 1;
    const nuevasRespuestas = [...respuestasUsuario];
    nuevasRespuestas[preguntaActual] = respuestaSeleccionada;
    setRespuestasUsuario(nuevasRespuestas);
  };

  const finalizarRepaso = () => {
    // Calcular la calificación
    const respuestasCorrectas = preguntas.map(pregunta => pregunta['Respuesta correcta']);
    console.log('Respuestas correctas:', respuestasCorrectas);
    console.log('Respuestas del usuario:', respuestasUsuario);

    const respuestasCorrectasUsuario = respuestasUsuario.filter((respuesta, index) => respuesta === respuestasCorrectas[index]).length;
    const calificacion = (respuestasCorrectasUsuario / preguntas.length) * 100;

    // Obtener las preguntas completas con sus respuestas y enviarlas a la pantalla de calificación
    const preguntasCompletas = preguntas.map((pregunta, index) => ({
      pregunta: pregunta.Pregunta,
      respuestaCorrecta: pregunta.Opciones[pregunta['Respuesta correcta'] - 1],
      respuestaUsuario: pregunta.Opciones[respuestasUsuario[index] - 1]
    }));

    // Navegar a la pantalla de calificación y pasar los parámetros

    //console.log("Salida de repaso",preguntasCompletas)
    navigation.navigate('Calificacion', {
      preguntas: preguntasCompletas,
      calificacion
    });
  };

  return (
      <View style={styles.container}>
        {cargando ? (
            <View style={styles.cargandoContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text style={styles.cargandoText}>Cargando preguntas...</Text>
            </View>
        ) : preguntas.length > 0 && preguntaActual < preguntas.length ? (
            <PreguntaCard
                pregunta={preguntas[preguntaActual].Pregunta}
                opciones={preguntas[preguntaActual].Opciones}
                respuestaCorrecta={preguntas[preguntaActual]['Respuesta correcta']}
                onSiguiente={handleSiguientePregunta}
                onSelectOption={handleSelectOption}
            />
        ) : (
            <View style={styles.finalizarContainer}>
              <Text style={styles.noPreguntasText}>
                {preguntaActual === preguntas.length ? '¡Has completado todas las preguntas!' : 'No hay más preguntas disponibles'}
              </Text>
              <Button mode="contained" onPress={finalizarRepaso} style={styles.finalizarButton}>
                {preguntaActual === preguntas.length ? 'Finalizar' : 'Aceptar'}
              </Button>
            </View>
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  cargandoContainer: {
    alignItems: 'center',
  },
  cargandoText: {
    fontSize: 16,
    marginTop: 10,
  },
  finalizarContainer: {
    alignItems: 'center',
  },
  noPreguntasText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  finalizarButton: {
    width: '50%',
  },
});

export default Repaso;
