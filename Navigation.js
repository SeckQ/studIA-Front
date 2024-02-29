import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Carga from "./screens/Carga";
import InicioSesion from "./screens/InicioSesion";
import Inicio from "./screens/Inicio";
import Nota from "./screens/Nota";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Perfil from "./screens/Perfil";
import TusMaterias from "./screens/TusMaterias";
import PerfilMateria from "./screens/PerfilMateria";
import ListaNotas from "./screens/ListaNotas";
import Repaso from "./screens/Repaso";
import DetallesNota from "./screens/DetallesNota"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Calificacion from "./screens/Calificacion";
import Correccion from "./screens/Correccion";
import {useFonts} from "expo-font";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === 'Inicio') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'TusMaterias') {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if (route.name === 'Perfil') {
                        iconName = focused ? 'account' : 'account-outline';
                    }

                    // Cambiar el color de los iconos
                    const iconColor = focused ? '#8A2BE2' : 'black';

                    return <MaterialCommunityIcons name={iconName} color={iconColor} size={size} />;
                },
                tabBarLabelStyle: {
                    color: '#8A2BE2', // Cambiar el color del texto a morado cuando esté seleccionado
                },
            })}
        >
            <Tab.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Inicio',
                }}
            />
            <Tab.Screen
                name="TusMaterias"
                component={TusMaterias}
                options={{
                    headerShown: true,
                    tabBarLabel: 'Tus Materias',
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Perfil',
                }}
            />
        </Tab.Navigator>
    );
}

const Navigation = () => {
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
            <Stack.Navigator screenOptions={{headerShown: false}} headerMode="none">
                {!loaded ? (
                    <Stack.Screen
                        name="Carga"
                        component={Carga}
                        options={{headerShown: false}}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name="InicioSesion"
                            component={InicioSesion}
                            options={{headerShown: false}}
                        />

                        <Stack.Screen
                            name="MainTabs"
                            component={MainTabs}
                            options={{headerShown: false}}
                        />

                        <Stack.Screen
                            name="PerfilMateria"
                            component={PerfilMateria}
                            options={{headerShown: true}}
                        />

                        <Stack.Screen
                            name="DetallesNotas"
                            component={DetallesNota}
                            options={{headerShown: false}}
                        />

                        <Stack.Screen
                            name="ListaNotas"
                            component={ListaNotas}
                            options={{headerShown: false}}
                        />

                        <Stack.Screen
                            name="Repaso"
                            component={Repaso}
                            options={{headerShown: true}}
                        />

                        <Stack.Screen
                            name="Nota"
                            component={Nota}
                            options={{headerShown: false}}
                        />

                        <Stack.Screen
                            name="TusMaterias"
                            component={TusMaterias}
                            options={{headerShown: true}}
                        />

                        <Stack.Screen
                            name="Calificacion"
                            component={Calificacion}
                            options={{headerShown: false}}
                        />

                        <Stack.Screen
                            name="Correccion"
                            component={Correccion}
                            options={{headerShown: true}}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
