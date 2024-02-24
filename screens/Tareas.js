import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Tareas = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tareas}>
      <View style={[styles.container30, styles.containerBg]}>
        <View style={[styles.container31, styles.containerShadowBox1]}>
          <Text style={[styles.text, styles.textTypo2]}>3</Text>
          <Text style={[styles.ametExercitationLabori, styles.tareaUnoTypo]}>
            Amet exercitation labori
          </Text>
          <Image
            style={[styles.fChat3, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/f-chat-3.png")}
          />
          <Image
            style={[styles.attachment5Icon, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/attachment-5.png")}
          />
          <Text style={[styles.text1, styles.textTypo2]}>1</Text>
          <View style={[styles.tag8, styles.tagLayout]}>
            <View style={[styles.frame, styles.frameLayout6]}>
              <Text style={[styles.label1, styles.label1Position]}>
                Label 1
              </Text>
            </View>
            <View style={[styles.frame1, styles.frameLayout4]}>
              <Text style={[styles.label3, styles.label3Position]}>
                Label 3
              </Text>
            </View>
            <View style={[styles.frame2, styles.frameLayout2]}>
              <Text style={[styles.label2, styles.label2Position]}>
                Label 2
              </Text>
            </View>
          </View>
          <Image
            style={[styles.avatar24Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar-24.png")}
          />
          <Image
            style={[styles.arrowUp5, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-up-14.png")}
          />
          <Image
            style={[styles.mail1Icon, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/mail.png")}
          />
          <Text style={[styles.text2, styles.textTypo2]}>0/3</Text>
        </View>
        <Text style={styles.done}>Done</Text>
        <Text style={[styles.text3, styles.textTypo1]}>10</Text>
        <Image
          style={[styles.moreVert2, styles.moreLayout]}
          contentFit="cover"
          source={require("../assets/more-vert-4.png")}
        />
        <View style={[styles.container32, styles.containerShadowBox1]}>
          <Text style={[styles.ametExercitationLabori, styles.tareaUnoTypo]}>
            Sint consectetur est ali
          </Text>
          <Image
            style={[styles.attachment5Icon, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/attachment-5.png")}
          />
          <Text style={[styles.text, styles.textTypo2]}>3</Text>
          <View style={[styles.tag9, styles.tagLayout]}>
            <View style={[styles.frame3, styles.frameLayout1]}>
              <Text style={[styles.label21, styles.labelPosition]}>
                Label 2
              </Text>
            </View>
            <View style={[styles.frame4, styles.frameLayout6]}>
              <Text style={styles.label11}>Label 1</Text>
            </View>
          </View>
          <Image
            style={[styles.avatar24Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar-25.png")}
          />
          <Image
            style={[styles.arrowUp5, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-up-15.png")}
          />
        </View>
        <View style={[styles.container33, styles.containerShadowBox1]}>
          <Text style={[styles.text, styles.textTypo2]}>3</Text>
          <Image
            style={[styles.attachment5Icon, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/attachment-5.png")}
          />
          <Text style={[styles.ametExercitationLabori, styles.tareaUnoTypo]}>
            Laboris exercitation magn
          </Text>
          <View style={[styles.tag8, styles.tagLayout]}>
            <View style={[styles.frame, styles.frameLayout6]}>
              <Text style={[styles.label1, styles.label1Position]}>
                Label 1
              </Text>
            </View>
            <View style={[styles.frame6, styles.frameLayout2]}>
              <Text style={styles.label22}>Label 2</Text>
            </View>
            <View style={[styles.frame7, styles.frameLayout1]}>
              <Text style={[styles.label31, styles.labelPosition]}>
                Label 3
              </Text>
            </View>
          </View>
          <Image
            style={[styles.avatar24Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar-26.png")}
          />
          <Image
            style={[styles.arrowUp7, styles.arrowIconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-up-16.png")}
          />
        </View>
        <View style={[styles.container34, styles.containerShadowBox1]}>
          <Image
            style={[styles.attachment5Icon, styles.arrowIconLayout]}
            contentFit="cover"
          />
          <Image
            style={[styles.fChat3, styles.arrowIconLayout]}
            contentFit="cover"
          />
          <Text style={[styles.ametExercitationLabori, styles.tareaUnoTypo]}>
            Non id excepteur cons
          </Text>
          <Text style={[styles.text, styles.textTypo2]}>3</Text>
          <Text style={[styles.text1, styles.textTypo2]}>1</Text>
          <View style={[styles.tag8, styles.tagLayout]}>
            <View style={[styles.frame1, styles.frameLayout4]}>
              <Text style={[styles.label3, styles.label3Position]}>
                Label 3
              </Text>
            </View>
            <View style={[styles.frame2, styles.frameLayout2]}>
              <Text style={[styles.label2, styles.label2Position]}>
                Label 2
              </Text>
            </View>
            <View style={[styles.frame, styles.frameLayout6]}>
              <Text style={[styles.label1, styles.label1Position]}>
                Label 1
              </Text>
            </View>
          </View>
          <Image
            style={[styles.avatar27Icon, styles.atrsPosition]}
            contentFit="cover"
          />
          <Image
            style={[styles.arrowUp5, styles.arrowIconLayout]}
            contentFit="cover"
          />
          <Image
            style={[styles.mail1Icon, styles.arrowIconLayout]}
            contentFit="cover"
          />
          <Text style={[styles.text2, styles.textTypo2]}>0/3</Text>
          <Image
            style={[styles.avatar24Icon, styles.iconLayout]}
            contentFit="cover"
          />
        </View>
        <View style={[styles.button24, styles.buttonLayout]}>
          <Text style={[styles.addACard, styles.addACardPosition]}>
            Add a card
          </Text>
          <Image
            style={[styles.eAddIcon, styles.addIconPosition]}
            contentFit="cover"
          />
        </View>
      </View>
      <View style={styles.container23}>
        <Text style={[styles.materia, styles.materiaTypo]}>Materia</Text>
        <Image
          style={[styles.chevronDownLarge1, styles.pruebaInicialPosition]}
          contentFit="cover"
        />
        <View style={styles.textbox3}>
          <Text style={[styles.buscar, styles.buscarPosition]}>Buscar</Text>
          <Image
            style={[styles.searchIcon, styles.arrowIconLayout]}
            contentFit="cover"
          />
        </View>
        <Image
          style={[styles.avatar1Icon, styles.buttonLayout]}
          contentFit="cover"
        />
      </View>
      <View style={[styles.container25, styles.buscarPosition]}>
        <View style={[styles.container26, styles.containerShadowBox]}>
          <Image
            style={[styles.fChat3, styles.arrowIconLayout]}
            contentFit="cover"
          />
          <Image
            style={[styles.attachment5Icon, styles.arrowIconLayout]}
            contentFit="cover"
          />
          <Text style={[styles.text, styles.textTypo2]}>3</Text>
          <Text style={[styles.tareaUno, styles.tareaUnoTypo]}>Tarea Uno</Text>
          <View style={[styles.tag4, styles.tagLayout]}>
            <View style={[styles.frame11, styles.frameLayout]}>
              <Text style={[styles.exposiciones, styles.label2Position]}>
                Exposiciones
              </Text>
            </View>
            <View style={[styles.frame12, styles.framePosition]}>
              <Text style={[styles.tareas1, styles.label1Position]}>
                Tareas
              </Text>
            </View>
            <View style={[styles.frame13, styles.frameLayout5]}>
              <Text style={[styles.lecciones, styles.label3Position]}>
                Lecciones
              </Text>
            </View>
          </View>
          <Image
            style={[styles.arrowUp5, styles.arrowIconLayout]}
            contentFit="cover"
          />
          <Image
            style={[styles.mail1Icon, styles.arrowIconLayout]}
            contentFit="cover"
          />
          <Text style={[styles.text2, styles.textTypo2]}>0/3</Text>
          <Text style={[styles.fechaDeCreado, styles.fechaTypo]}>
            Fecha de creado: Lun. 5. Octubre 2023 6:00am
          </Text>
          <Text style={[styles.text11, styles.textTypo]}>2</Text>
        </View>
        <Text style={[styles.tareas2, styles.materiaTypo]}>TAREAS</Text>
        <Text style={[styles.text12, styles.textTypo1]}>2</Text>
        <Image
          style={[styles.moreVert1, styles.moreLayout]}
          contentFit="cover"
        />
        <View style={[styles.container27, styles.containerShadowBox]}>
          <Text style={[styles.text, styles.textTypo2]}>2</Text>
          <Image
            style={[styles.attachment5Icon, styles.arrowIconLayout]}
            contentFit="cover"
          />
          <Text style={[styles.pruebaInicial, styles.pruebaInicialPosition]}>
            Prueba Inicial
          </Text>
          <Image
            style={[styles.arrowUp2, styles.arrowIconLayout]}
            contentFit="cover"
          />
          <View style={[styles.tag41, styles.tagLayout]}>
            <View style={[styles.frame14, styles.framePosition]}>
              <Text style={[styles.pruebas, styles.label1Position]}>
                Pruebas
              </Text>
            </View>
            <View style={[styles.frame15, styles.frameLayout]}>
              <Text style={[styles.exposiciones, styles.label2Position]}>
                Exposiciones
              </Text>
            </View>
          </View>
          <Text style={[styles.fechaDeCreado1, styles.fechaTypo]}>
            Fecha de creado: Mier. 7. Octubre 2023 9:00pm
          </Text>
          <Image
            style={[styles.fChat11, styles.fChat11Position]}
            contentFit="cover"
          />
          <Text style={[styles.text14, styles.textTypo2]}>9</Text>
          <Image
            style={[styles.cCheck11, styles.fChat11Position]}
            contentFit="cover"
          />
          <Text style={[styles.text15, styles.textTypo]}>10/10</Text>
        </View>
        <View style={[styles.button23, styles.buttonLayout]}>
          <Text style={[styles.agregarUnaTarea, styles.addACardPosition]}>
            Agregar una Tarea
          </Text>
          <Image
            style={[styles.eAddIcon1, styles.addIconPosition]}
            contentFit="cover"
          />
        </View>
      </View>
      <Pressable
        style={styles.buttonInicio}
        onPress={() => navigation.navigate("Inicio")}
      >
        <Text style={styles.text16}>{`<-`}</Text>
      </Pressable>
      <Text style={[styles.atrs, styles.atrsPosition]}>Atrás</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBg: {
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_lg,
  },
  containerShadowBox1: {
    height: 122,
    width: 241,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    borderRadius: Border.br_5xl,
    left: 20,
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
  textTypo2: {
    color: Color.colorLightslategray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  tareaUnoTypo: {
    width: 209,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  arrowIconLayout: {
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  tagLayout: {
    height: 24,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  frameLayout6: {
    width: 53,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  label1Position: {
    color: Color.colorDeepskyblue,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    left: "50%",
    top: "50%",
    marginTop: -9,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frameLayout4: {
    width: 55,
    left: 119,
  },
  label3Position: {
    color: Color.colorCrimson,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    left: "50%",
    top: "50%",
    marginTop: -9,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frameLayout2: {
    width: 54,
    left: 59,
  },
  label2Position: {
    color: Color.colorSeagreen_100,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    left: "50%",
    top: "50%",
    marginTop: -9,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconLayout: {
    height: 28,
    width: 28,
    borderRadius: Border.br_sm,
    top: 82,
    overflow: "hidden",
  },
  textTypo1: {
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  moreLayout: {
    width: 24,
    top: 16,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout1: {
    backgroundColor: Color.colorAliceblue_200,
    borderRadius: Border.br_xs,
    top: 0,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  labelPosition: {
    color: Color.colorCornflowerblue_100,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    left: "50%",
    top: "50%",
    marginTop: -9,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  atrsPosition: {
    left: 159,
    position: "absolute",
  },
  buttonLayout: {
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  addACardPosition: {
    marginTop: -11,
    color: Color.colorBlueviolet,
    left: "50%",
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  addIconPosition: {
    marginTop: -8,
    left: "50%",
    top: "50%",
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  materiaTypo: {
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  pruebaInicialPosition: {
    top: 9,
    position: "absolute",
  },
  buscarPosition: {
    left: 12,
    position: "absolute",
  },
  containerShadowBox: {
    width: 287,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    borderRadius: Border.br_5xl,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
  frameLayout: {
    width: 85,
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_xs,
    top: 0,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    left: 0,
    backgroundColor: Color.colorAliceblue_100,
    borderRadius: Border.br_xs,
    top: 0,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout5: {
    backgroundColor: Color.colorLavenderblush_200,
    borderRadius: Border.br_xs,
    top: 0,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  fechaTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTypo: {
    top: 84,
    textAlign: "left",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  fChat11Position: {
    top: 87,
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    left: 32,
    textAlign: "left",
    top: 85,
    color: Color.colorLightslategray,
  },
  ametExercitationLabori: {
    top: 12,
    left: 16,
    position: "absolute",
  },
  fChat3: {
    left: 53,
    top: 88,
    width: 16,
  },
  attachment5Icon: {
    top: 88,
    width: 16,
    left: 16,
  },
  text1: {
    left: 69,
    textAlign: "left",
    top: 85,
    color: Color.colorLightslategray,
  },
  label1: {
    marginLeft: -18.5,
    color: Color.colorDeepskyblue,
  },
  frame: {
    backgroundColor: Color.colorAliceblue_100,
  },
  label3: {
    marginLeft: -19.5,
  },
  frame1: {
    backgroundColor: Color.colorLavenderblush_200,
    borderRadius: Border.br_xs,
    top: 0,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  label2: {
    marginLeft: -19,
  },
  frame2: {
    backgroundColor: Color.colorHoneydew,
    width: 54,
    left: 59,
    borderRadius: Border.br_xs,
    top: 0,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  tag8: {
    width: 174,
    top: 46,
    height: 24,
    left: 16,
  },
  avatar24Icon: {
    left: 181,
    position: "absolute",
  },
  arrowUp5: {
    left: 209,
    top: 88,
    width: 16,
  },
  mail1Icon: {
    left: 88,
    top: 88,
    width: 16,
  },
  text2: {
    left: 104,
    textAlign: "left",
    top: 85,
    color: Color.colorLightslategray,
  },
  container31: {
    top: 52,
  },
  done: {
    textTransform: "uppercase",
    fontFamily: FontFamily.interBold,
    color: "#0e642a",
    fontWeight: "700",
    top: 16,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: 20,
    position: "absolute",
  },
  text3: {
    left: 66,
    top: 16,
  },
  moreVert2: {
    left: 237,
  },
  label21: {
    marginLeft: -19,
  },
  frame3: {
    width: 54,
    left: 59,
  },
  label11: {
    color: Color.colorDarkorange,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    marginTop: -9,
    left: "50%",
    top: "50%",
    marginLeft: -18.5,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frame4: {
    backgroundColor: "#fef8f1",
  },
  tag9: {
    width: 113,
    top: 46,
    height: 24,
    left: 16,
  },
  container32: {
    top: 186,
  },
  label22: {
    color: Color.colorBlueviolet,
    marginLeft: -19,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    left: "50%",
    top: "50%",
    marginTop: -9,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frame6: {
    width: 54,
    left: 59,
    borderRadius: Border.br_xs,
    top: 0,
    height: 24,
    backgroundColor: Color.colorGhostwhite,
    position: "absolute",
    overflow: "hidden",
  },
  label31: {
    marginLeft: -19.5,
  },
  frame7: {
    width: 55,
    left: 119,
  },
  arrowUp7: {
    top: 104,
    left: 225,
  },
  container33: {
    top: 320,
  },
  avatar27Icon: {
    height: 28,
    width: 28,
    borderRadius: Border.br_sm,
    top: 82,
    overflow: "hidden",
  },
  container34: {
    top: 454,
  },
  addACard: {
    marginLeft: -25,
  },
  eAddIcon: {
    marginLeft: -47,
  },
  button24: {
    top: 588,
    width: 118,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    height: 36,
    left: 20,
  },
  container30: {
    top: 198,
    left: 630,
    width: 281,
    height: 636,
    position: "absolute",
    overflow: "hidden",
  },
  materia: {
    top: 4,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    left: 7,
    color: Color.colorGray_200,
  },
  chevronDownLarge1: {
    left: 97,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  buscar: {
    marginTop: -10.5,
    color: Color.colorSilver,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 12,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  searchIcon: {
    marginTop: -7.5,
    right: 11,
    top: "50%",
  },
  textbox3: {
    top: 58,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 334,
    height: 44,
    left: 7,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  avatar1Icon: {
    top: 1,
    left: 293,
    width: 36,
    borderRadius: Border.br_lg,
  },
  container23: {
    top: 28,
    width: 363,
    height: 117,
    left: 10,
    borderRadius: Border.br_lg,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  tareaUno: {
    top: 13,
    height: 25,
    left: 10,
    position: "absolute",
  },
  exposiciones: {
    marginLeft: -34.5,
  },
  frame11: {
    left: 58,
  },
  tareas1: {
    marginLeft: -18,
  },
  frame12: {
    width: 52,
    backgroundColor: Color.colorAliceblue_100,
    borderRadius: Border.br_xs,
  },
  lecciones: {
    marginLeft: -26.5,
  },
  frame13: {
    left: 149,
    width: 69,
  },
  tag4: {
    top: 47,
    left: 6,
    width: 218,
  },
  fechaDeCreado: {
    top: 126,
    left: 10,
  },
  text11: {
    left: 71,
  },
  container26: {
    top: 62,
    left: 18,
    height: 162,
  },
  tareas2: {
    color: "#197dca",
    top: 16,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.epilogueBold,
    left: 20,
  },
  text12: {
    top: 15,
    left: 114,
  },
  moreVert1: {
    left: 295,
  },
  pruebaInicial: {
    left: 13,
    width: 209,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  arrowUp2: {
    top: 89,
    left: 217,
  },
  pruebas: {
    marginLeft: -21.5,
  },
  frame14: {
    width: 59,
    backgroundColor: Color.colorAliceblue_100,
    borderRadius: Border.br_xs,
  },
  frame15: {
    left: 65,
  },
  tag41: {
    top: 38,
    left: 4,
    width: 150,
  },
  fechaDeCreado1: {
    top: 122,
    left: 9,
  },
  fChat11: {
    left: 58,
  },
  text14: {
    top: 83,
    left: 74,
    textAlign: "left",
  },
  cCheck11: {
    left: 89,
  },
  text15: {
    left: 111,
  },
  container27: {
    top: 241,
    height: 163,
    left: 20,
  },
  agregarUnaTarea: {
    marginLeft: -50.5,
  },
  eAddIcon1: {
    marginLeft: -72.5,
  },
  button23: {
    top: 435,
    left: 73,
    width: 169,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
    height: 36,
  },
  container25: {
    top: 156,
    width: 331,
    height: 503,
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_lg,
  },
  text16: {
    marginTop: -18.5,
    marginLeft: -12,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.colorWhite,
    left: "50%",
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  buttonInicio: {
    top: 692,
    left: 140,
    backgroundColor: Color.colorBlueviolet,
    width: 82,
    height: 67,
    borderRadius: Border.br_xs,
    position: "absolute",
    overflow: "hidden",
  },
  atrs: {
    top: 770,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  tareas: {
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

export default Tareas;
