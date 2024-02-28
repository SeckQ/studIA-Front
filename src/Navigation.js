import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Carga from "./screens/Carga";
import InicioSesion from "./screens/InicioSesion";
import Inicio from "./screens/Inicio";
import Nota from "./screens/Nota";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notificaciones from "./screens/Notificaiones";
import Perfil from "./screens/Perfil";
import TusMaterias from "./screens/TusMaterias";
import PerfilMateria from "./screens/PerfilMateria";
import ListaNotas from "./screens/ListaNotas";
import Repaso from "./screens/Repaso";
import DetallesNota from "./screens/DetallesNota";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Inicio">
            <Tab.Screen
                name={'Inicio'}
                component={Inicio}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name={'home'} color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name={'Notificaciones'}
                component={Notificaciones}
                options={{
                    tabBarLabel: 'Notificaciones',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name={'bell-ring'} color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name={'Perfil'}
                component={Perfil}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name={'account'} color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const Navigation = () => {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 1000);
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} headerMode="none">
                {!loaded ? (
                    <Stack.Screen
                        name="Carga"
                        component={Carga}
                        options={{ headerShown: false }}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name="MainTabs"
                            component={MainTabs}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name="DetallesNotas"
                            component={DetallesNota}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name="ListaNotas"
                            component={ListaNotas}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name="Repaso"
                            component={Repaso}
                            options={{ headerShown: true }}
                        />

                        <Stack.Screen
                            name="PerfilMateria"
                            component={PerfilMateria}
                            options={{ headerShown: true }}
                        />

                        <Stack.Screen
                            name="Nota"
                            component={Nota}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name="InicioSesion"
                            component={InicioSesion}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name="TusMaterias"
                            component={TusMaterias}
                            options={{ headerShown: true }}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

