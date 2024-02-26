import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import PreguntaCard from '../components/PreguntaCard';
import { Button } from 'react-native-paper';
import axios from 'axios';
import Config from "../config/Config";


const Repaso = ({ route }) => {
  const [preguntas, setPreguntas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasUsuario, setRespuestasUsuario] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { content } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('CONTENT ENVIADO', content);
        const response = await axios.post(`${Config.apiUrl}/generate-questions`, {
          text: content, // Utiliza el contenido pasado como texto para generar preguntas
          quantity: 3,
          temperature: 0.8
        });
        const { preguntas_y_respuestas } = response.data;
        setPreguntas(preguntas_y_respuestas);
        setCargando(false); // Cambiar el estado de carga a falso una vez que las preguntas se carguen
      } catch (error) {
        console.error('Error al obtener las preguntas:', error);
        setCargando(false); // En caso de error, cambiar el estado de carga a falso
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
    console.log('Repaso finalizado');
    console.log('Respuestas seleccionadas por el usuario:', respuestasUsuario);

    const respuestasCorrectas = preguntas.map(pregunta => pregunta['Respuesta correcta']);
    console.log('Respuestas correctas:', respuestasCorrectas);

    let respuestasCorrectasUsuario = 0;
    for (let i = 0; i < respuestasUsuario.length; i++) {
      if (respuestasUsuario[i] === respuestasCorrectas[i]) {
        respuestasCorrectasUsuario++;
      }
    }
    console.log('Respuestas correctas del usuario:', respuestasCorrectasUsuario);
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
