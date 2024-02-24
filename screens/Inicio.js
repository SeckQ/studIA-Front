import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Inicio = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inicio}>
      <Text style={[styles.tareas, styles.tareasTypo]}>{`Tareas `}</Text>
      <View style={[styles.container32, styles.containerShadowBox]}>
        <Image
          style={[styles.leccionIcon, styles.iconPosition]}
          contentFit="cover"
        />
        <Text style={[styles.leccin1, styles.deber1Layout]}>Lección 1</Text>
        <Image
          style={[styles.oval4Icon, styles.iconLayout]}
          contentFit="cover"
        />
        <Text style={[styles.liderazgo, styles.liderazgoClr]}>Liderazgo</Text>
        <Text style={[styles.mier10Marzo, styles.marzoTypo]}>
          Mier. 10. Marzo 2023 7:00pm
        </Text>
      </View>
      <View style={styles.container1}>
        <Text
          style={[styles.bienvenidoA, styles.logo1IconPosition]}
        >{`Bienvenido a `}</Text>
        <Image style={styles.avatar1Icon} contentFit="cover" />
        <Image
          style={[styles.logo1Icon, styles.logo1IconPosition]}
          contentFit="cover"
        />
      </View>
      <View style={[styles.container3, styles.container3Layout]}>
        <Text style={[styles.horario, styles.leccin1Typo]}>Horario</Text>
        <Text style={[styles.revisaTuHorario, styles.deber1Position]}>
          Revisa tu horario
        </Text>
        <View style={[styles.button3, styles.buttonLayout1]}>
          <Text style={[styles.empieza, styles.textPosition]}>Empieza!</Text>
        </View>
        <Image
          style={[styles.bienvenidaIcon, styles.container3Layout]}
          contentFit="cover"
        />
      </View>
      <Text style={[styles.materias, styles.tareasTypo]}>Materias</Text>
      <View style={[styles.container4, styles.containerLayout2]}>
        <Text style={[styles.lgebraLineal, styles.liderazgo1Position]}>
          Álgebra Lineal
        </Text>
        <View style={[styles.button4, styles.buttonLayout]}>
          <Text style={[styles.text, styles.textPosition]} />
          <Image style={styles.document2Icon} contentFit="cover" />
        </View>
      </View>
      <View style={[styles.container5, styles.containerLayout2]}>
        <Text style={[styles.anlisisDeDatos, styles.datosTypo]}>
          Análisis de Datos
        </Text>
        <View style={[styles.button5, styles.buttonLayout]}>
          <Text style={[styles.text, styles.textPosition]} />
          <Image style={styles.document2Icon} contentFit="cover" />
        </View>
      </View>
      <View style={[styles.container6, styles.containerLayout1]}>
        <Text style={[styles.liderazgo1, styles.liderazgo1Typo]}>
          Liderazgo
        </Text>
        <View style={[styles.button6, styles.buttonBg1]}>
          <Text style={[styles.text, styles.textPosition]} />
          <Image style={styles.document2Icon} contentFit="cover" />
        </View>
      </View>
      <View style={[styles.container7, styles.containerLayout1]}>
        <Text style={[styles.mineraDeDatos, styles.datosTypo]}>
          Minería de Datos
        </Text>
        <View style={[styles.button7, styles.buttonLayout]}>
          <Text style={[styles.text, styles.textPosition]} />
          <Image style={styles.document2Icon} contentFit="cover" />
        </View>
      </View>
      <View style={[styles.container61, styles.containerLayout]}>
        <Text style={[styles.gestinDeProyectos, styles.liderazgo1Typo]}>
          Gestión de Proyectos
        </Text>
        <View style={[styles.button61, styles.buttonLayout]}>
          <Text style={[styles.text, styles.textPosition]} />
          <Image style={styles.document2Icon} contentFit="cover" />
        </View>
      </View>
      <View style={[styles.container62, styles.containerLayout]}>
        <Text style={[styles.basesDeDatos, styles.basesDeDatosTypo]}>
          Bases de Datos
        </Text>
        <View style={[styles.button62, styles.buttonBg]}>
          <Text style={[styles.text, styles.textPosition]} />
          <Image style={styles.document2Icon} contentFit="cover" />
        </View>
      </View>
      <View style={[styles.container31, styles.containerShadowBox]}>
        <Image
          style={[styles.deberIcon, styles.iconPosition]}
          contentFit="cover"
        />
        <Text style={[styles.deber1, styles.deber1Position]}>Deber 1</Text>
        <Text style={[styles.lgebraLineal1, styles.basesDeDatosTypo]}>
          Álgebra Lineal
        </Text>
        <Image
          style={[styles.oval3Icon, styles.iconLayout]}
          contentFit="cover"
        />
        <Image style={styles.bookmark3Icon} contentFit="cover" />
        <Text style={[styles.lun8Marzo, styles.marzoTypo]}>
          Lun. 8. Marzo 2023 7:00pm
        </Text>
      </View>
      <Pressable
        style={[styles.buttonVertareas, styles.buttonBg1]}
        onPress={() => navigation.navigate("Tareas")}
      >
        <Text style={[styles.verMas, styles.textPosition]}>Ver Mas</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonVermaterias, styles.buttonBg]}
        onPress={() => navigation.navigate("Materias")}
      >
        <Text style={[styles.verMas, styles.textPosition]}>Ver Mas</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tareasTypo: {
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.size_lg,
  },
  containerShadowBox: {
    height: 231,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    top: 571,
    borderRadius: Border.br_xs,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
  iconPosition: {
    maxWidth: "100%",
    left: 12,
    top: 12,
    borderRadius: Border.br_xs,
    position: "absolute",
    overflow: "hidden",
  },
  deber1Layout: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
  },
  iconLayout: {
    height: 4,
    width: 4,
    position: "absolute",
  },
  liderazgoClr: {
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  marzoTypo: {
    top: 180,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  logo1IconPosition: {
    top: 11,
    position: "absolute",
  },
  container3Layout: {
    height: 180,
    position: "absolute",
  },
  leccin1Typo: {
    left: 5,
    textAlign: "left",
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    position: "absolute",
  },
  deber1Position: {
    left: 3,
    textAlign: "left",
    position: "absolute",
  },
  buttonLayout1: {
    width: 96,
    height: 36,
  },
  textPosition: {
    color: Color.colorWhite,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  containerLayout2: {
    height: 60,
    width: 162,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    top: 317,
    borderRadius: Border.br_lg,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  liderazgo1Position: {
    top: 19,
    left: 60,
  },
  buttonLayout: {
    height: 44,
    width: 44,
    top: 8,
    left: 8,
  },
  datosTypo: {
    width: 94,
    top: 8,
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
  },
  containerLayout1: {
    top: 389,
    height: 60,
    width: 162,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  liderazgo1Typo: {
    width: 102,
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
  },
  buttonBg1: {
    backgroundColor: Color.colorMediumslateblue,
    borderRadius: Border.br_xs,
    position: "absolute",
    overflow: "hidden",
  },
  containerLayout: {
    top: 461,
    height: 60,
    width: 162,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  basesDeDatosTypo: {
    height: 26,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  buttonBg: {
    backgroundColor: Color.colorCrimson,
    borderRadius: Border.br_xs,
    position: "absolute",
    overflow: "hidden",
  },
  tareas: {
    top: 543,
    left: 26,
    textAlign: "left",
    position: "absolute",
  },
  leccionIcon: {
    right: 16,
    height: 104,
  },
  leccin1: {
    width: 107,
    height: 49,
    left: 5,
    textAlign: "left",
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    position: "absolute",
    top: 126,
    fontSize: FontSize.size_sm,
  },
  oval4Icon: {
    top: 207,
    left: 91,
  },
  liderazgo: {
    top: 151,
    fontFamily: FontFamily.interRegular,
    left: 8,
    textAlign: "left",
    position: "absolute",
  },
  mier10Marzo: {
    width: 137,
    left: 8,
  },
  container32: {
    left: 184,
    width: 179,
  },
  bienvenidoA: {
    left: 24,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.size_lg,
  },
  avatar1Icon: {
    top: 7,
    left: 315,
    width: 36,
    height: 36,
    borderRadius: Border.br_lg,
    position: "absolute",
    overflow: "hidden",
  },
  logo1Icon: {
    left: 145,
    width: 138,
    height: 32,
  },
  container1: {
    top: 17,
    left: -5,
    width: 375,
    height: 50,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  horario: {
    top: 34,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.colorBlueviolet,
    width: 168,
  },
  revisaTuHorario: {
    top: 71,
    color: Color.colorBlack,
    width: 156,
    opacity: 0.7,
    fontFamily: FontFamily.interRegular,
    left: 3,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
  },
  empieza: {
    marginLeft: -30,
    marginTop: -11,
    color: Color.colorWhite,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  button3: {
    top: 107,
    left: 0,
    backgroundColor: Color.colorBlueviolet,
    borderRadius: Border.br_xs,
    position: "absolute",
    overflow: "hidden",
  },
  bienvenidaIcon: {
    top: 0,
    left: 176,
    width: 159,
    borderRadius: Border.br_lg,
    height: 180,
  },
  container3: {
    top: 82,
    left: 20,
    borderTopLeftRadius: Border.br_lg,
    borderTopRightRadius: Border.br_lg,
    backgroundColor: Color.colorAliceblue_100,
    width: 335,
  },
  materias: {
    top: 279,
    left: 25,
    textAlign: "left",
    position: "absolute",
  },
  lgebraLineal: {
    left: 60,
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    marginTop: -13,
    marginLeft: 10,
    fontSize: FontSize.size_base,
    lineHeight: 26,
  },
  document2Icon: {
    marginTop: -10,
    marginLeft: -10,
    width: 20,
    height: 20,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  button4: {
    backgroundColor: Color.colorBlueviolet,
    borderRadius: Border.br_xs,
    position: "absolute",
    overflow: "hidden",
  },
  container4: {
    left: 19,
  },
  anlisisDeDatos: {
    left: 66,
  },
  button5: {
    backgroundColor: Color.colorDeepskyblue,
    borderRadius: Border.br_xs,
    height: 44,
    width: 44,
    position: "absolute",
    overflow: "hidden",
  },
  container5: {
    left: 193,
  },
  liderazgo1: {
    left: 60,
    top: 19,
  },
  button6: {
    height: 44,
    width: 44,
    top: 8,
    left: 8,
  },
  container6: {
    left: 19,
  },
  mineraDeDatos: {
    left: 60,
  },
  button7: {
    backgroundColor: Color.colorMediumvioletred,
    borderRadius: Border.br_xs,
    height: 44,
    width: 44,
    position: "absolute",
    overflow: "hidden",
  },
  container7: {
    left: 193,
  },
  gestinDeProyectos: {
    left: 59,
    top: 8,
    width: 102,
  },
  button61: {
    backgroundColor: Color.colorDarkorange,
    borderRadius: Border.br_xs,
    height: 44,
    width: 44,
    position: "absolute",
    overflow: "hidden",
  },
  container61: {
    left: 19,
  },
  basesDeDatos: {
    top: 24,
    left: 61,
    width: 110,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
  },
  button62: {
    height: 44,
    width: 44,
    top: 8,
    left: 8,
  },
  container62: {
    left: 192,
  },
  deberIcon: {
    right: 9,
    height: 101,
  },
  deber1: {
    width: 93,
    height: 50,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    top: 126,
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    left: 3,
  },
  lgebraLineal1: {
    top: 154,
    left: 6,
    width: 81,
    color: Color.colorLightslategray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  oval3Icon: {
    top: 212,
    left: 92,
  },
  bookmark3Icon: {
    top: 127,
    left: 122,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  lun8Marzo: {
    left: 4,
    width: 126,
    height: 21,
  },
  container31: {
    left: 1,
    width: 174,
  },
  verMas: {
    marginLeft: -27,
    marginTop: -11,
    color: Color.colorWhite,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  buttonVertareas: {
    top: 539,
    left: 260,
    width: 96,
    height: 36,
  },
  buttonVermaterias: {
    top: 276,
    left: 253,
    width: 96,
    height: 36,
  },
  inicio: {
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowRadius: 6,
    elevation: 6,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
});

export default Inicio;
