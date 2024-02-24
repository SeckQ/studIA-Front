import * as React from "react";
import {Text, StyleSheet, View, Pressable, ScrollView} from "react-native";
import {Image} from "expo-image";
import {useNavigation} from "@react-navigation/native";
import {Color, FontFamily, FontSize, Border} from "../../GlobalStyles";
import {SafeAreaView} from "react-native-safe-area-context";

const Inicio = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "#ffffff" }}>
            <ScrollView contentContainerStyle={{ padding: 20, gap: 10 }}>

                <Text>INI!</Text>

            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({

});

export default Inicio;
