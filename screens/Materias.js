import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Materias = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.materias}>
      <View style={[styles.container47, styles.container47Layout]}>
        <Text style={[styles.tusMaterias, styles.atrsFlexBox]}>
        Materias
        </Text>
        <Image
          style={[styles.avatar34Icon, styles.menu52Position]}
          contentFit="cover"
          source={require("../assets/avatar-34.png")}
        />
      </View>
      <Pressable
        style={[styles.container48, styles.containerLayout1]}
        onPress={() => navigation.navigate("PerfilDeMateria")}
      >
        <Text style={[styles.lgebraLineal, styles.datosTypo]}>
          Álgebra Lineal
        </Text>
        <Image
          style={[styles.menu52, styles.menu52Position]}
          contentFit="cover"
          source={require("../assets/menu-5-2.png")}
        />
        <View style={[styles.avatar35, styles.avatarLayout]}>
          <Text style={[styles.a, styles.aPosition]}>A</Text>
        </View>
      </Pressable>
      <View style={[styles.container49, styles.containerLayout1]}>
        <Text style={[styles.anlisisDeDatos, styles.datosTypo]}>
          Análisis de Datos
        </Text>
        <Image
          style={[styles.menu52, styles.menu52Position]}
          contentFit="cover"
          source={require("../assets/menu-5-2.png")}
        />
        <View style={[styles.avatar36, styles.avatarLayout]}>
          <Text style={[styles.ad, styles.aPosition]}>AD</Text>
        </View>
      </View>
      <View style={[styles.container50, styles.containerLayout]}>
        <Text style={[styles.liderazgo, styles.datosTypo]}>Liderazgo</Text>
        <Image
          style={[styles.menu52, styles.menu52Position]}
          contentFit="cover"
          source={require("../assets/menu-5-2.png")}
        />
        <View style={[styles.avatar37, styles.avatarLayout]}>
          <Text style={[styles.l, styles.aPosition]}>L</Text>
        </View>
      </View>
      <View style={[styles.container51, styles.containerLayout1]}>
        <Text style={[styles.aadirNueva, styles.datosTypo]}>Añadir Nueva</Text>
        <Image
          style={[styles.menu52, styles.menu52Position]}
          contentFit="cover"
          source={require("../assets/menu-5-2.png")}
        />
        <Image
          style={[styles.iconButton1, styles.avatarLayout]}
          contentFit="cover"
          source={require("../assets/icon-button-1.png")}
        />
      </View>
      <View style={[styles.container501, styles.containerLayout]}>
        <Text style={[styles.mineraDeDatos, styles.datosTypo]}>
          Minería de Datos
        </Text>
        <Image
          style={[styles.menu52, styles.menu52Position]}
          contentFit="cover"
          source={require("../assets/menu-5-2.png")}
        />
        <View style={[styles.avatar371, styles.avatarLayout]}>
          <Text style={[styles.m, styles.aPosition]}>M</Text>
        </View>
      </View>
      <View style={[styles.container502, styles.containerLayout1]}>
        <Text style={[styles.gestinDeProyectos, styles.datosTypo]}>
          Gestión de Proyectos
        </Text>
        <Image
          style={[styles.menu52, styles.menu52Position]}
          contentFit="cover"
          source={require("../assets/menu-5-2.png")}
        />
        <View style={[styles.avatar372, styles.avatarLayout]}>
          <Text style={[styles.g, styles.aPosition]}>G</Text>
        </View>
      </View>
      <Pressable
        style={[styles.buttonInicio, styles.container47Layout]}
        onPress={() => navigation.navigate("Inicio")}
      >
        <Text style={[styles.text, styles.aPosition]}>{`<-`}</Text>
      </Pressable>
      <Text style={[styles.atrs, styles.atrsFlexBox]}>Atrás</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container47Layout: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  atrsFlexBox: {
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
  },
  menu52Position: {
    position: "absolute",
    overflow: "hidden",
  },
  containerLayout1: {
    height: 178,
    width: 166,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  datosTypo: {
    textAlign: "center",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.epilogueSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    top: 118,
    position: "absolute",
  },
  avatarLayout: {
    height: 90,
    width: 90,
    borderRadius: Border.br_26xl,
    top: 20,
    position: "absolute",
    overflow: "hidden",
  },
  aPosition: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    top: "50%",
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  containerLayout: {
    top: 296,
    height: 178,
    width: 166,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  tusMaterias: {
    top: 20,
    left: 20,
    fontWeight: "300",
    fontFamily: FontFamily.epilogueBold,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,

  },
  avatar34Icon: {
    top: 9,
    left: 317,
    borderRadius: Border.br_lg,
    width: 36,
    height: 36,
  },
  container47: {
    top: 22,
    right: 10,
    left: -3,
    height: 54,
    backgroundColor: Color.colorWhite,
  },
  lgebraLineal: {
    left: 35,
  },
  menu52: {
    top: 12,
    right: 12,
    width: 20,
    height: 20,
  },
  a: {
    marginLeft: -15,
    lineHeight: 44,
    fontSize: FontSize.size_25xl,
    marginTop: -22,
    fontFamily: FontFamily.interRegular,
    top: "50%",
  },
  avatar35: {
    backgroundColor: Color.colorBlueviolet,
    left: "50%",
    marginLeft: -45,
    width: 90,
    borderRadius: Border.br_26xl,
    top: 20,
  },
  container48: {
    left: 11,
    top: 97,
    height: 178,
    width: 166,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhite,
  },
  anlisisDeDatos: {
    left: 26,
  },
  ad: {
    marginLeft: -30.5,
    lineHeight: 44,
    fontSize: FontSize.size_25xl,
    marginTop: -22,
    fontFamily: FontFamily.interRegular,
    top: "50%",
  },
  avatar36: {
    backgroundColor: Color.colorDeepskyblue,
    left: "50%",
    marginLeft: -45,
    width: 90,
    borderRadius: Border.br_26xl,
    top: 20,
  },
  container49: {
    left: 186,
    top: 97,
    height: 178,
    width: 166,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhite,
  },
  liderazgo: {
    left: 51,
  },
  l: {
    marginLeft: -12.5,
    lineHeight: 44,
    fontSize: FontSize.size_25xl,
    marginTop: -22,
    fontFamily: FontFamily.interRegular,
    top: "50%",
  },
  avatar37: {
    backgroundColor: Color.colorMediumvioletred,
    left: "50%",
    marginLeft: -45,
    width: 90,
    borderRadius: Border.br_26xl,
    top: 20,
  },
  container50: {
    left: 11,
  },
  aadirNueva: {
    left: 38,
  },
  iconButton1: {
    left: 40,
    width: 90,
    borderRadius: Border.br_26xl,
    top: 20,
  },
  container51: {
    top: 490,
    left: 184,
    backgroundColor: Color.colorGhostwhite,
  },
  mineraDeDatos: {
    left: 25,
  },
  m: {
    marginLeft: -19.5,
    lineHeight: 44,
    fontSize: FontSize.size_25xl,
    marginTop: -22,
    fontFamily: FontFamily.interRegular,
    top: "50%",
  },
  avatar371: {
    backgroundColor: Color.colorDarkorange,
    left: "50%",
    marginLeft: -45,
    width: 90,
    borderRadius: Border.br_26xl,
    top: 20,
  },
  container501: {
    left: 186,
  },
  gestinDeProyectos: {
    left: 8,
  },
  g: {
    marginLeft: -16.5,
    lineHeight: 44,
    fontSize: FontSize.size_25xl,
    marginTop: -22,
    fontFamily: FontFamily.interRegular,
    top: "50%",
  },
  avatar372: {
    backgroundColor: Color.colorMediumslateblue,
    left: "50%",
    marginLeft: -45,
    width: 90,
    borderRadius: Border.br_26xl,
    top: 20,
  },
  container502: {
    top: 495,
    left: 11,
    backgroundColor: Color.colorWhite,
  },
  text: {
    marginTop: -18,
    marginLeft: -13.5,
    fontFamily: FontFamily.interRegular,
    top: "50%",
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
  },
  buttonInicio: {
    top: 689,
    left: 139,
    width: 82,
    height: 67,
    backgroundColor: Color.colorBlueviolet,
    overflow: "hidden",
  },
  atrs: {
    top: 774,
    left: 158,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  materias: {
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Materias;
