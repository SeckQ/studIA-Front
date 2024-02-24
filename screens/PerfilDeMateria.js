import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PerfilDeMateria = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.perfilDeMateria, styles.iconLayout]}>
      <View style={styles.avatar38Parent}>
        <View style={styles.avatar38}>
          <Text style={[styles.a, styles.aTypo]}>A</Text>
        </View>
        <View style={styles.button33}>
          <Text style={styles.editarMateria}>Editar Materia</Text>
        </View>
        <Text style={styles.lgebraLineal}>Álgebra Lineal</Text>
        <Text style={[styles.docenteCarlosLpez, styles.docenteCarlosLpezTypo]}>
          Docente: Carlos López
        </Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/line-6.png")}
        />
        <Text
          style={[
            styles.contactoClopezestudioedu,
            styles.docenteCarlosLpezTypo,
          ]}
        >
          Contacto: clopez@estudio.edu
        </Text>
        <Text style={styles.semestre6to}>Semestre: 6to</Text>
        <Text
          style={[styles.periodoAcdemico2023, styles.docenteCarlosLpezTypo]}
        >
          Periodo Acádemico: 2023 - 2024
        </Text>
      </View>
      <Pressable
        style={[styles.container54, styles.containerLayout]}
        onPress={() => navigation.navigate("RegistroNotas")}
      >
        <Text style={styles.registroDeNotas}>Registro de notas</Text>
        <Image
          style={[styles.iconButton2, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/icon-button-2.png")}
        />
        <Image
          style={[styles.chevronRightLarge1, styles.aPosition]}
          contentFit="cover"
          source={require("../assets/chevron-right-large-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container55, styles.containerLayout]}
        onPress={() => navigation.navigate("Apuntes")}
      >
        <Text style={styles.registroDeNotas}>Apuntes</Text>
        <Image
          style={[styles.iconButton2, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/icon-button-3.png")}
        />
        <Image
          style={[styles.chevronRightLarge1, styles.aPosition]}
          contentFit="cover"
          source={require("../assets/chevron-right-large-1.png")}
        />
      </Pressable>
      <View style={[styles.container56, styles.containerLayout]}>
        <Text style={styles.registroDeNotas}> Archivos</Text>
        <Image
          style={[styles.iconButton2, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/icon-button-4.png")}
        />
        <Image
          style={[styles.chevronRightLarge1, styles.aPosition]}
          contentFit="cover"
          source={require("../assets/chevron-right-large-1.png")}
        />
      </View>
      <Pressable
        style={[styles.container57, styles.containerLayout]}
        onPress={() => navigation.navigate("Repasos")}
      >
        <Text style={styles.registroDeNotas}>Repasos</Text>
        <Image
          style={[styles.iconButton2, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/icon-button-5.png")}
        />
        <Image
          style={[styles.chevronRightLarge1, styles.aPosition]}
          contentFit="cover"
          source={require("../assets/chevron-right-large-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.buttonMaterias, styles.buttonPosition]}
        onPress={() => navigation.navigate("Materias")}
      >
        <Text style={[styles.text, styles.textPosition]}>{`<-`}</Text>
      </Pressable>
      <Pressable
        style={[styles.iconButton8, styles.buttonPosition]}
        onPress={() => navigation.navigate("Inicio")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon-button-81.png")}
        />
      </Pressable>
      <Text style={[styles.inicio, styles.atrsTypo]}>Inicio</Text>
      <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  aTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    left: "50%",
  },
  docenteCarlosLpezTypo: {
    height: 21,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 5,
    position: "absolute",
  },
  containerLayout: {
    height: 68,
    width: 350,
    borderColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_base,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  textPosition: {
    marginTop: -18,
    top: "50%",
    position: "absolute",
  },
  aPosition: {
    top: "50%",
    position: "absolute",
  },
  buttonPosition: {
    height: 67,
    top: 686,
    position: "absolute",
  },
  atrsTypo: {
    top: 761,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  a: {
    marginTop: -29.7,
    marginLeft: -20.9,
    fontSize: 60,
    lineHeight: 60,
    top: "50%",
    position: "absolute",
  },
  avatar38: {
    top: 0,
    borderRadius: 60,
    width: 111,
    height: 113,
    backgroundColor: Color.colorBlueviolet,
    left: 5,
    position: "absolute",
    overflow: "hidden",
  },
  editarMateria: {
    marginTop: -11,
    marginLeft: -47.05,
    color: Color.colorGray_200,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  button33: {
    left: 231,
    borderColor: Color.colorGray_200,
    width: 108,
    height: 34,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    top: 125,
    borderRadius: Border.br_xs,
    position: "absolute",
    overflow: "hidden",
  },
  lgebraLineal: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    width: 218,
    height: 28,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorGray_200,
    top: 125,
    textAlign: "left",
    left: 5,
    position: "absolute",
  },
  docenteCarlosLpez: {
    top: 165,
    width: 296,
    height: 21,
  },
  groupChild: {
    top: 257,
    maxHeight: "100%",
    width: 323,
    left: 0,
    position: "absolute",
  },
  contactoClopezestudioedu: {
    top: 188,
    width: 296,
    height: 21,
  },
  semestre6to: {
    top: 213,
    left: 4,
    width: 234,
    height: 20,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  periodoAcdemico2023: {
    top: 236,
    width: 289,
  },
  avatar38Parent: {
    top: 45,
    width: 339,
    height: 257,
    left: 16,
    position: "absolute",
  },
  registroDeNotas: {
    marginTop: -13,
    left: 68,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorGray_200,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  iconButton2: {
    borderRadius: Border.br_lg,
    width: 36,
    height: 36,
    left: 16,
    overflow: "hidden",
  },
  chevronRightLarge1: {
    marginTop: -12,
    right: 16,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  container54: {
    top: 346,
  },
  container55: {
    top: 422,
  },
  container56: {
    top: 498,
  },
  container57: {
    top: 574,
  },
  text: {
    marginLeft: -13.5,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    left: "50%",
  },
  buttonMaterias: {
    left: 76,
    width: 82,
    borderRadius: Border.br_xs,
    top: 686,
    backgroundColor: Color.colorBlueviolet,
    overflow: "hidden",
  },
  icon: {
    borderRadius: Border.br_15xl,
    height: "100%",
    overflow: "hidden",
  },
  iconButton8: {
    left: 229,
    width: 67,
  },
  inicio: {
    left: 242,
  },
  atrs: {
    left: 94,
  },
  perfilDeMateria: {
    backgroundColor: "#f8f9fa",
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default PerfilDeMateria;
