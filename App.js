<<<<<<< HEAD
import { SafeAreaView, StyleSheet } from "react-native";
import Navegacion from "./src/Navigation";
import MyTabs from "./src/MyTabs";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}
=======
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Carga from "./screens/Carga";
import RichTextExample from "./screens/RichTextExample";
import InicioSesion from "./screens/InicioSesion";
import Inicio from "./screens/Inicio";
import Materias from "./screens/Materias";
import Tareas from "./screens/Tareas";
import PerfilDeMateria from "./screens/PerfilDeMateria";
import Repasos from "./screens/Repasos";
import Repaso from "./screens/Repaso";
import Apuntes from "./screens/Apuntes";
import Nota from "./screens/Nota";
import RegistroNotas from "./screens/RegistroNotas";
import ListaNotas from "./screens/ListaNotas";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, setLoaded] = React.useState(false);

  let [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Epilogue-Bold': require('./assets/fonts/Epilogue-Bold.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Epilogue-SemiBold': require('./assets/fonts/Epilogue-SemiBold.ttf'),
    'Epilogue-Regular': require('./assets/fonts/Epilogue-Regular.ttf'),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!loaded ? (
          <Stack.Screen
            name="Carga"
            component={Carga}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="InicioSesion"
              component={ListaNotas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inicio"
              component={Inicio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Materias"
              component={Materias}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Tareas"
              component={Tareas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilDeMateria"
              component={PerfilDeMateria}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Repasos"
              component={Repasos}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Repaso"
              component={Repaso}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Apuntes"
              component={Apuntes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Nota"
              component={Nota}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="RegistroNotas"
              component={RegistroNotas}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="RichTextExample"
              component={RichTextExample}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};


>>>>>>> d058c5f51bd701361167af80004ea66d88710489

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// export default function App() {
//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <Navegacion />
//         </SafeAreaView>
//     );
// }
