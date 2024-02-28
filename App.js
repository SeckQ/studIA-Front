import { SafeAreaView, StyleSheet } from "react-native";
import Navegacion from "./src/Navigation";

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Navegacion />
        </SafeAreaView>
    );
}

// import { SafeAreaView, StyleSheet } from "react-native";
// import Navegacion from "./src/Navigation";
// import MyTabs from "./src/MyTabs";
// import {NavigationContainer} from "@react-navigation/native";
//
// export default function App() {
//     return (
//         <NavigationContainer>
//             <MyTabs/>
//         </NavigationContainer>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'red',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });