import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const RegistroNotas = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.registroNotas, styles.iconLayout1]}>
      <View style={styles.avatar44}>
        <Text style={[styles.a, styles.aTypo]}>A</Text>
      </View>
      <Text style={[styles.tusNotas, styles.notasTypo1]}>Tus Notas</Text>
      <View style={styles.container80}>
        <Text style={[styles.notas, styles.notasTypo]}>Notas</Text>
        <View style={styles.dropdownButton1}>
          <Text style={[styles.ultimos7Das, styles.eneLayout]}>
            Ultimos 7 días
          </Text>
          <Image
            style={styles.caretDownExtra}
            contentFit="cover"
            source={require("../assets/caret-down-extra.png")}
          />
        </View>
        <Text style={[styles.wed, styles.wedTypo]}>Wed</Text>
        <Text style={[styles.thu, styles.wedTypo]}>Thu</Text>
        <Text style={[styles.fri, styles.wedTypo]}>Fri</Text>
        <Text style={[styles.sat, styles.wedTypo]}>Sat</Text>
        <View style={[styles.lineChart1, styles.iconPosition]}>
          <Image
            style={[styles.groupIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
          <Image
            style={[styles.frameIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/frame5.png")}
          />
          <View style={[styles.frame, styles.groupPosition]}>
            <View style={[styles.group, styles.groupPosition]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseIconPosition]}
                contentFit="cover"
                source={require("../assets/ellipse1.png")}
              />
              <Text style={[styles.pruebas, styles.tareaLayout]}>Pruebas</Text>
            </View>
            <View style={[styles.group1, styles.groupPosition]}>
              <Image
                style={[styles.ellipseIcon1, styles.ellipseIconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse2.png")}
              />
              <Text style={[styles.tareas, styles.tareaLayout]}>Tareas</Text>
            </View>
            <View style={[styles.group2, styles.groupPosition]}>
              <Image
                style={[styles.ellipseIcon2, styles.ellipseIconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse3.png")}
              />
              <Text style={[styles.exposiciones, styles.tareaLayout]}>
                Exposiciones
              </Text>
            </View>
          </View>
        </View>
        <Text style={[styles.sun, styles.wedTypo]}>Sun</Text>
        <Text style={[styles.mon, styles.wedTypo]}>Mon</Text>
        <Text style={[styles.tue, styles.wedTypo]}>Tue</Text>
      </View>
      <Text style={[styles.registro, styles.textTypo1]}>Registro</Text>
      <View style={[styles.button51, styles.buttonLayout]}>
        <Text style={[styles.text, styles.textTypo1]} />
        <Image
          style={[styles.awardIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/award.png")}
        />
      </View>
      <Text style={styles.text1}>8/10</Text>
      <View style={[styles.button52, styles.buttonLayout]}>
        <Text style={[styles.text, styles.textTypo1]} />
        <Image
          style={[styles.awardIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/shopping-cart.png")}
        />
      </View>
      <Text style={[styles.text3, styles.textTypo]}>3/10</Text>
      <View style={[styles.button53, styles.buttonLayout]}>
        <Text style={[styles.text, styles.textTypo1]} />
        <Image
          style={[styles.awardIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/device-mobile.png")}
        />
      </View>
      <Text style={[styles.text5, styles.notasTypo]}>7/10</Text>
      <View style={[styles.button54, styles.buttonLayout]}>
        <Text style={[styles.text, styles.textTypo1]} />
        <Image
          style={[styles.awardIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/house-line.png")}
        />
      </View>
      <Text style={[styles.text7, styles.textTypo]}>6/7</Text>
      <Text style={[styles.tarea, styles.enePosition]}>Tarea</Text>
      <Text style={[styles.hoy, styles.enePosition]}>Hoy</Text>
      <Text style={[styles.exposicin, styles.enePosition]}>Exposición</Text>
      <Text style={[styles.ayer, styles.enePosition]}>Ayer</Text>
      <Text style={[styles.leccin1, styles.enePosition]}>Lección 1</Text>
      <Text style={[styles.ene2022, styles.enePosition]}>15 Ene, 2022</Text>
      <Text style={[styles.exmen, styles.enePosition]}>Exámen</Text>
      <Text style={[styles.ene20221, styles.enePosition]}>30 Ene, 2022</Text>
      <Text style={[styles.verTodas, styles.tareaLayout]}>Ver todas</Text>
      <Pressable
        style={[styles.buttonPerfilMateria, styles.buttonPosition]}
        onPress={() => navigation.navigate("PerfilDeMateria")}
      >
        <Text style={[styles.text8, styles.text8Typo]}>{`<-`}</Text>
      </Pressable>
      <Pressable
        style={[styles.iconButton8, styles.buttonPosition]}
        onPress={() => navigation.navigate("Inicio")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
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
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  aTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  notasTypo1: {
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
  },
  notasTypo: {
    lineHeight: 28,
    color: Color.colorGray_200,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  eneLayout: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  wedTypo: {
    width: 91,
    textAlign: "center",
    bottom: 24,
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  groupPosition: {
    height: 22,
    left: "50%",
    position: "absolute",
  },
  ellipseIconPosition: {
    marginLeft: -35.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tareaLayout: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  ellipseIconLayout: {
    marginTop: -6,
    height: 12,
    width: 12,
  },
  textTypo1: {
    lineHeight: 26,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  buttonLayout: {
    height: 44,
    width: 44,
    borderRadius: Border.br_xs,
    left: 25,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    left: 300,
    textAlign: "right",
    lineHeight: 28,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  enePosition: {
    left: 81,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  buttonPosition: {
    height: 67,
    top: 680,
    position: "absolute",
  },
  text8Typo: {
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  atrsTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 26,
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  a: {
    marginTop: -9,
    marginLeft: -6,
    lineHeight: 18,
    color: Color.colorWhite,
    left: "50%",
    top: "50%",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  avatar44: {
    width: 36,
    height: 36,
    backgroundColor: Color.colorBlueviolet,
    left: 299,
    borderRadius: Border.br_lg,
    top: 24,
    position: "absolute",
    overflow: "hidden",
  },
  tusNotas: {
    left: 27,
    width: 176,
    height: 72,
    color: Color.colorGray_200,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
    top: 24,
  },
  notas: {
    top: 26,
    left: 24,
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
  },
  ultimos7Das: {
    marginTop: -9.5,
    left: 8,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    top: "50%",
    position: "absolute",
  },
  caretDownExtra: {
    marginTop: -5.5,
    right: 7,
    height: 12,
    width: 12,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  dropdownButton1: {
    right: 10,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 111,
    height: 31,
    top: 24,
    position: "absolute",
  },
  wed: {
    marginLeft: -319,
  },
  thu: {
    marginLeft: -228,
  },
  fri: {
    marginLeft: -136,
  },
  sat: {
    marginLeft: -45,
  },
  groupIcon: {
    height: "56.52%",
    top: "43.48%",
    bottom: "0%",
  },
  frameIcon: {
    height: "50.87%",
    top: "46.35%",
    bottom: "2.78%",
  },
  ellipseIcon: {
    marginTop: -6,
    height: 12,
    width: 12,
  },
  pruebas: {
    marginLeft: -19.5,
    marginTop: -11,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  group: {
    width: 71,
    marginTop: -11,
    marginLeft: -137,
    height: 22,
    top: "50%",
  },
  ellipseIcon1: {
    marginLeft: -30.5,
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  tareas: {
    marginLeft: -14.5,
    marginTop: -11,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  group1: {
    marginLeft: -47,
    width: 61,
    marginTop: -11,
    top: "50%",
  },
  ellipseIcon2: {
    marginLeft: -51.5,
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  exposiciones: {
    marginLeft: -35.5,
    left: "50%",
    top: "50%",
    position: "absolute",
    marginTop: -11,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  group2: {
    marginLeft: 34,
    width: 103,
    marginTop: -11,
    top: "50%",
  },
  frame: {
    top: 0,
    width: 274,
    marginLeft: -137,
    height: 22,
    backgroundColor: Color.colorGray_300,
  },
  lineChart1: {
    marginLeft: -160,
    top: 84,
    bottom: 60,
    width: 318,
    backgroundColor: Color.colorGray_300,
  },
  sun: {
    marginLeft: 47,
  },
  mon: {
    marginLeft: 138,
  },
  tue: {
    marginLeft: 230,
  },
  container80: {
    top: 96,
    left: 22,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    width: 320,
    height: 259,
    borderRadius: Border.br_lg,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  registro: {
    top: 383,
    left: 25,
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
  },
  text: {
    marginTop: -13,
    marginLeft: 10,
    color: Color.colorWhite,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.interRegular,
  },
  awardIcon: {
    marginTop: -10,
    marginLeft: -10,
    width: 20,
    height: 20,
    top: "50%",
    overflow: "hidden",
  },
  button51: {
    backgroundColor: Color.colorDeepskyblue,
    top: 421,
  },
  text1: {
    textAlign: "right",
    top: 421,
    lineHeight: 28,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    left: 299,
    position: "absolute",
  },
  button52: {
    backgroundColor: Color.colorDarkorange,
    top: 533,
  },
  text3: {
    top: 537,
  },
  button53: {
    backgroundColor: Color.colorMediumvioletred,
    top: 477,
  },
  text5: {
    left: 305,
    top: 477,
    fontFamily: FontFamily.interRegular,
  },
  button54: {
    backgroundColor: Color.colorMediumslateblue,
    top: 589,
  },
  text7: {
    top: 597,
  },
  tarea: {
    top: 421,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
  },
  hoy: {
    top: 444,
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  exposicin: {
    top: 477,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
  },
  ayer: {
    top: 500,
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  leccin1: {
    top: 533,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
  },
  ene2022: {
    top: 556,
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  exmen: {
    top: 589,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
  },
  ene20221: {
    top: 612,
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  verTodas: {
    top: 380,
    left: 281,
    color: Color.colorLightslategray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text8: {
    marginTop: -18,
    marginLeft: -13.5,
    color: Color.colorWhite,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.interRegular,
  },
  buttonPerfilMateria: {
    left: 77,
    width: 82,
    borderRadius: Border.br_xs,
    top: 680,
    backgroundColor: Color.colorBlueviolet,
    overflow: "hidden",
  },
  icon: {
    borderRadius: Border.br_15xl,
    height: "100%",
    overflow: "hidden",
  },
  iconButton8: {
    left: 226,
    width: 67,
  },
  inicio: {
    top: 753,
    left: 240,
  },
  atrs: {
    top: 759,
    left: 100,
  },
  registroNotas: {
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

export default RegistroNotas;
