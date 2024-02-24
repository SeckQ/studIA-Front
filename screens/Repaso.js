import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Repaso = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.repaso, styles.iconLayout]}>
      <View style={styles.container104}>
        <View style={[styles.button63, styles.buttonLayout]}>
          <Text style={[styles.siguiente, styles.textPosition]}>Siguiente</Text>
        </View>
        <View style={[styles.button64, styles.buttonLayout]}>
          <Text style={[styles.omitir, styles.omitirTypo]}>Omitir</Text>
        </View>
      </View>
      <Pressable
        style={[styles.buttonRepasos, styles.buttonPosition]}
        onPress={() => navigation.navigate("Repasos")}
      >
        <Text style={[styles.text, styles.textLayout]}>{`<-`}</Text>
      </Pressable>
      <Pressable
        style={[styles.iconButton8, styles.buttonPosition]}
        onPress={() => navigation.navigate("Inicio")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon-button-8.png")}
        />
      </Pressable>
      <Image
        style={styles.logo2Icon}
        contentFit="cover"
        source={require("../assets/logo2.png")}
      />
      <View
        style={[styles.quEsUnEspacioVectorialParent, styles.radio1Position]}
      >
        <Text style={[styles.quEsUn, styles.ePosition]}>
          Qué es un espacio vectorial?
        </Text>
        <Text style={[styles.seleccioneUnaOpcin, styles.omitirTypo]}>
          Seleccione una opción
        </Text>
      </View>
      <View style={[styles.radio1, styles.radio1Position]}>
        <View style={[styles.frame, styles.frameLayout]}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse.png")}
          />
          <Text style={[styles.e, styles.ePosition]}>E</Text>
        </View>
        <View style={[styles.frame1, styles.frameLayout]}>
          <Image
            style={[styles.ellipseIcon1, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse.png")}
          />
          <Text style={[styles.e, styles.ePosition]}>A</Text>
        </View>
        <View style={[styles.frame2, styles.frameLayout]}>
          <Image
            style={[styles.ellipseIcon2, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse.png")}
          />
          <Text style={[styles.e, styles.ePosition]}>C</Text>
        </View>
        <View style={[styles.frame3, styles.frameLayout]}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse.png")}
          />
          <Text style={[styles.e, styles.ePosition]}>D</Text>
        </View>
        <View style={[styles.frame4, styles.frameLayout]}>
          <Image
            style={[styles.ellipseIcon4, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse.png")}
          />
          <Text style={[styles.e, styles.ePosition]}>Ninguna</Text>
        </View>
        <View style={[styles.frame5, styles.frameLayout]}>
          <Image
            style={[styles.ellipseIcon1, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse.png")}
          />
          <Text style={[styles.e, styles.ePosition]}>Todas</Text>
        </View>
        <View style={[styles.frame6, styles.frameLayout]}>
          <Image
            style={[styles.ellipseIcon2, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse.png")}
          />
          <Text style={[styles.e, styles.ePosition]}>B</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  buttonLayout: {
    height: 52,
    borderRadius: Border.br_5xl,
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  omitirTypo: {
    color: Color.colorLightslategray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  buttonPosition: {
    top: 733,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
  },
  radio1Position: {
    left: 12,
    position: "absolute",
  },
  ePosition: {
    color: Color.colorGray_200,
    top: 0,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 28,
    width: 350,
    backgroundColor: Color.colorGray_300,
    left: 0,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 20,
    width: 20,
    left: 302,
    position: "absolute",
  },
  siguiente: {
    marginLeft: -39.5,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    marginTop: -14,
  },
  button63: {
    right: 19,
    bottom: 72,
    left: 21,
    backgroundColor: Color.colorBlueviolet,
  },
  omitir: {
    marginLeft: -25.5,
    left: "50%",
    top: "50%",
    marginTop: -14,
    color: Color.colorLightslategray,
  },
  button64: {
    right: 20,
    bottom: 20,
    left: 20,
    backgroundColor: Color.colorGray_300,
  },
  container104: {
    bottom: 50,
    height: 132,
    left: 0,
    right: 10,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    marginTop: -18,
    marginLeft: -13.5,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  buttonRepasos: {
    left: 72,
    borderRadius: Border.br_xs,
    width: 65,
    height: 49,
    backgroundColor: Color.colorBlueviolet,
    overflow: "hidden",
  },
  icon: {
    borderRadius: Border.br_8xl,
    height: "100%",
    overflow: "hidden",
  },
  iconButton8: {
    left: 238,
    width: 53,
    height: 53,
  },
  logo2Icon: {
    top: 14,
    height: 88,
    width: 350,
    left: 0,
    position: "absolute",
  },
  quEsUn: {
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    width: 330,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
  },
  seleccioneUnaOpcin: {
    top: 71,
    left: 0,
  },
  quEsUnEspacioVectorialParent: {
    height: 99,
    width: 330,
    top: 115,
  },
  ellipseIcon: {
    top: 0,
  },
  e: {
    width: 322,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_200,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
  },
  frame: {
    top: 229,
  },
  ellipseIcon1: {
    top: 8,
  },
  frame1: {
    top: 0,
  },
  ellipseIcon2: {
    top: 4,
  },
  frame2: {
    top: 115,
  },
  frame3: {
    top: 172,
  },
  ellipseIcon4: {
    top: -6,
  },
  frame4: {
    top: 287,
  },
  frame5: {
    top: 344,
  },
  frame6: {
    top: 57,
  },
  radio1: {
    top: 227,
    height: 372,
    backgroundColor: Color.colorGray_300,
    right: 10,
  },
  repaso: {
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
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default Repaso;
