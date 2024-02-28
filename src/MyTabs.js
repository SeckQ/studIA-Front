import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioSesion from "./screens/InicioSesion";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NoteCard from "./components/NoteCard";
import Notificaciones from "./screens/Notificaiones";
import Perfil from "./screens/Perfil";
import TusMaterias from "./screens/TusMaterias";
import Inicio from "./screens/Inicio";
import {useFonts} from "expo-font";
import {NavigationContainer} from "@react-navigation/native";
import Carga from "./screens/Carga";
import PerfilMateria from "./screens/PerfilMateria";
import Nota from "./screens/Nota";

const Tab = createBottomTabNavigator();

const MyTabs =() => {
    return (
        <Tab.Navigator initialRouteName="Inicio">
            <Tab.Screen name={'Inicio'} component={Inicio} options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'home'} color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'Notificaciones'} component={Notificaciones} options={{
                tabBarLabel: 'Notificaiones',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'bell-ring'} color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'Perfil'} component={Perfil} options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'account'} color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'Tus Materias'} component={TusMaterias} options={{
                tabBarLabel: 'Pruebas',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'dev-to'} color={color} size={size}/>
                )
            }}/>
        </Tab.Navigator>
    );
}

export default MyTabs