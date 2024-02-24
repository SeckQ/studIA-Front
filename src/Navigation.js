import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {useFonts} from "expo-font";
import Carga from "./screens/Carga";
import InicioSesion from "./screens/InicioSesion";
import Inicio from "./screens/Inicio";
import Nota from "./screens/Nota";
import FAIcon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notificaciones from "./screens/Notificaiones";
import Perfil from "./screens/Perfil";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();



const Navigation = () => {
    const [loaded, setLoaded] = React.useState(false);

    let [fontsLoaded] = useFonts({
        'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
        'Epilogue-Bold': require('../assets/fonts/Epilogue-Bold.ttf'),
        'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
        'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
        'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
        'Epilogue-SemiBold': require('../assets/fonts/Epilogue-SemiBold.ttf'),
        'Epilogue-Regular': require('../assets/fonts/Epilogue-Regular.ttf'),
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
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {!loaded ? (
                    <Stack.Screen
                        name="Carga"
                        component={Carga}
                        options={{headerShown: false}}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name="Tabs"
                            component={TabsNav}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="InicioSesion"
                            component={InicioSesion}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="Nota"
                            component={Nota}
                            options={{headerShown: false}}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

function TabsNav() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => {
                return {
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => {
                        let icon = "";
                        switch (route.name) {
                            case "Inicio":
                                icon = "home";
                                break;
                            case "Notificaciones":
                                icon="bell";
                                break;
                            case "Perfil":
                                icon = "user";
                                break;
                        }

                        return <FAIcon name={icon} size={size} color="#000000" />;
                    },
                };
            }}
        >
            <Tabs.Screen name="Inicio" component={Inicio} />
            <Tabs.Screen name="Notificaciones" component={Notificaciones} />
            <Tabs.Screen name="Perfil" component={Perfil} />
        </Tabs.Navigator>
    );
}

export default Navigation;