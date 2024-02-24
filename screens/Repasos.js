import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Repasos = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.repasos}>
      <View style={[styles.avatar44, styles.avatarLayout1]}>
        <Text style={[styles.a, styles.aTypo]}>A</Text>
      </View>
      <Text style={[styles.tusRepasos, styles.tusRepasosTypo]}>
        Tus Repasos
      </Text>
      <View style={styles.table1}>
        <View style={[styles.row, styles.rowPosition1]}>
          <View style={[styles.frame, styles.framePosition7]} />
          <View style={[styles.frame1, styles.framePosition6]} />
          <View style={[styles.frame2, styles.framePosition5]} />
          <View style={[styles.frame3, styles.framePosition4]} />
        </View>
        <View style={[styles.header, styles.headerPosition]}>
          <View style={[styles.frame4, styles.framePosition3]}>
            <Text style={[styles.tipo, styles.tipoLayout]}>Tipo</Text>
          </View>
          <View style={[styles.frame5, styles.framePosition3]} />
          <View style={[styles.frame6, styles.framePosition3]} />
          <View style={[styles.frame7, styles.framePosition3]}>
            <Text style={[styles.ttulo, styles.tipoTypo]}>Título</Text>
          </View>
        </View>
        <View style={[styles.row1, styles.rowPosition]}>
          <View style={[styles.frame8, styles.framePosition2]}>
            <View style={[styles.avatar, styles.avatarPosition]}>
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
          </View>
          <View style={[styles.frame9, styles.framePosition2]}>
            <View style={[styles.tag, styles.tagLayout]}>
              <View style={[styles.frame10, styles.frame10Bg]}>
                <Text style={[styles.dilogo, styles.dilogoTypo]}>Diálogo</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frame11, styles.framePosition2]}>
            <Text style={[styles.exposicin1, styles.lun8MarPosition]}>
              Exposición 1
            </Text>
            <Text style={[styles.lun8Mar, styles.lun8MarPosition]}>
              Lun 8. Mar 2022
            </Text>
          </View>
          <Image
            style={[styles.frameIcon, styles.headerPosition]}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
        </View>
        <View style={[styles.row2, styles.rowPosition]}>
          <View style={[styles.frame11, styles.framePosition2]}>
            <Text style={[styles.exposicin1, styles.lun8MarPosition]}>
              Correción prueba
            </Text>
            <Text style={[styles.lun8Mar, styles.lun8MarPosition]}>
              Mar 9 Mar. 2022
            </Text>
          </View>
          <Image
            style={[styles.frameIcon, styles.headerPosition]}
            contentFit="cover"
            source={require("../assets/frame1.png")}
          />
          <View style={[styles.frame9, styles.framePosition2]}>
            <View style={[styles.tag1, styles.tagFrameLayout]}>
              <View style={[styles.frame14, styles.framePosition]}>
                <Text style={[styles.notas, styles.notasPosition]}>Notas</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frame8, styles.framePosition2]}>
            <View style={[styles.avatar1, styles.avatarPosition]}>
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
          </View>
        </View>
        <View style={[styles.row3, styles.rowPosition]}>
          <View style={[styles.frame11, styles.framePosition2]}>
            <Text style={[styles.exposicin1, styles.lun8MarPosition]}>
              Clase 1
            </Text>
            <Text style={[styles.lun8Mar, styles.lun8MarPosition]}>
              Mar 9 Mar. 2022
            </Text>
          </View>
          <View style={[styles.frame9, styles.framePosition2]}>
            <View style={[styles.tag2, styles.tagPosition]}>
              <View style={[styles.frame18, styles.framePosition1]}>
                <Text style={[styles.exposicin, styles.dilogoTypo]}>
                  Exposición
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frame8, styles.framePosition2]}>
            <View style={[styles.avatar2, styles.avatarLayout]}>
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
          </View>
          <Image
            style={[styles.frameIcon, styles.headerPosition]}
            contentFit="cover"
            source={require("../assets/frame2.png")}
          />
        </View>
        <View style={[styles.row4, styles.rowPosition]}>
          <View style={[styles.frame11, styles.framePosition2]}>
            <Text style={[styles.lun8Mar, styles.lun8MarPosition]}>
              Mar 9 Mar. 2022
            </Text>
            <Text style={[styles.exposicin1, styles.lun8MarPosition]}>
              Deber 1
            </Text>
          </View>
          <View style={[styles.frame8, styles.framePosition2]}>
            <View style={[styles.avatar3, styles.avatarPosition]}>
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
          </View>
          <Image
            style={[styles.frameIcon, styles.headerPosition]}
            contentFit="cover"
            source={require("../assets/frame3.png")}
          />
          <View style={[styles.frame9, styles.framePosition2]}>
            <View style={[styles.tag3, styles.tag3Layout]}>
              <View style={[styles.frame23, styles.tag3Layout]}>
                <Text style={[styles.tarea, styles.notasPosition]}>Tarea</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.container98, styles.frame10Bg]}>
          <Text style={[styles.clase3, styles.clase3Position]}>Clase 3</Text>
          <Text style={[styles.mar9Mar3, styles.mar9Mar3Typo]}>
            Mar 9 Mar. 2022
          </Text>
          <View style={[styles.tag28, styles.tagFrameLayout]}>
            <View style={[styles.frame24, styles.tagFrameLayout]}>
              <Text style={[styles.notas1, styles.dilogoTypo]}>Notas</Text>
            </View>
          </View>
          <View style={[styles.avatar65, styles.avatar65Position]}>
            <Text style={[styles.j, styles.aTypo]}>J</Text>
          </View>
          <Image
            style={styles.chevronUpLarge1}
            contentFit="cover"
            source={require("../assets/chevron-up-large-1.png")}
          />
          <Image
            style={styles.container98Child}
            contentFit="cover"
            source={require("../assets/line-13.png")}
          />
          <Pressable
            style={[styles.button60, styles.buttonLayout]}
            onPress={() => navigation.navigate("Repaso")}
          >
            <Text style={[styles.estudiar, styles.clase3Layout]}>Estudiar</Text>
            <Image
              style={[styles.bookIcon, styles.aPosition]}
              contentFit="cover"
              source={require("../assets/book.png")}
            />
          </Pressable>
          <Text style={[styles.descripcin, styles.avatar65Position]}>
            Descripción
          </Text>
          <Text
            style={[
              styles.espaciosVectorialesTransfor,
              styles.avatar65Position,
            ]}
          >
            Espacios vectoriales, transformaciones lineales
          </Text>
        </View>
      </View>
      <Text style={[styles.eligeSobreQu, styles.aTypo]}>
        Elige sobre qué quieres estudiar
      </Text>
      <Pressable
        style={[styles.buttonPerfilMateria, styles.buttonLayout]}
        onPress={() => navigation.navigate("PerfilDeMateria")}
      >
        <Text style={[styles.text, styles.textLayout]}>{`<-`}</Text>
      </Pressable>
      <Text style={styles.atrs}>Atrás</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarLayout1: {
    width: 36,
    borderRadius: Border.br_lg,
    height: 36,
    overflow: "hidden",
  },
  aTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  tusRepasosTypo: {
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_200,
    fontWeight: "700",
    textAlign: "left",
  },
  rowPosition1: {
    left: "0%",
    right: "0.28%",
    width: "99.72%",
    backgroundColor: Color.colorGray_300,
  },
  framePosition7: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    bottom: "-0.22%",
    top: "-0.22%",
    height: "100.44%",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  framePosition6: {
    right: "79.89%",
    width: "20.11%",
    left: "0%",
  },
  framePosition5: {
    left: "86.94%",
    right: "0%",
    width: "13.06%",
  },
  framePosition4: {
    left: "20.11%",
    right: "39.41%",
    width: "40.48%",
  },
  headerPosition: {
    top: "0%",
    position: "absolute",
  },
  framePosition3: {
    backgroundColor: Color.colorWhitesmoke,
    bottom: "-0.74%",
    top: "-0.74%",
    height: "101.47%",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  tipoLayout: {
    width: 77,
    position: "absolute",
  },
  tipoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.epilogueRegular,
    marginTop: -11.5,
    color: Color.colorDimgray,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
  },
  rowPosition: {
    height: "12.09%",
    left: "0%",
    right: "0.28%",
    width: "99.72%",
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  framePosition2: {
    bottom: "-0.73%",
    top: "-0.73%",
    height: "101.45%",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  avatarPosition: {
    marginLeft: -18.3,
    marginTop: -18.45,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tagLayout: {
    width: 59,
    height: 28,
  },
  frame10Bg: {
    backgroundColor: Color.colorGhostwhite,
    position: "absolute",
    overflow: "hidden",
  },
  dilogoTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  lun8MarPosition: {
    width: 129,
    left: 12,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  tagFrameLayout: {
    width: 50,
    height: 28,
    position: "absolute",
  },
  framePosition: {
    backgroundColor: Color.colorAliceblue_100,
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  notasPosition: {
    color: Color.colorDeepskyblue,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    marginTop: -10,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tagPosition: {
    marginTop: -14.45,
    backgroundColor: Color.colorGray_300,
    left: "50%",
    top: "50%",
  },
  framePosition1: {
    borderRadius: Border.br_sm,
    top: 0,
    left: 0,
  },
  avatarLayout: {
    backgroundColor: Color.colorMediumslateblue,
    height: 36,
    width: 36,
    borderRadius: Border.br_lg,
    overflow: "hidden",
  },
  tag3Layout: {
    width: 49,
    height: 28,
    position: "absolute",
  },
  clase3Position: {
    left: 68,
    position: "absolute",
  },
  mar9Mar3Typo: {
    color: Color.colorSlategray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  avatar65Position: {
    left: 16,
    position: "absolute",
  },
  buttonLayout: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorBlueviolet,
    position: "absolute",
    overflow: "hidden",
  },
  clase3Layout: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  aPosition: {
    left: "50%",
    top: "50%",
  },
  textLayout: {
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  a: {
    marginLeft: -6,
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 18,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "50%",
    top: "50%",
    marginTop: -9,
  },
  avatar44: {
    left: 307,
    height: 36,
    backgroundColor: Color.colorBlueviolet,
    top: 32,
    position: "absolute",
  },
  tusRepasos: {
    width: 176,
    height: 72,
    color: Color.colorGray_200,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    position: "absolute",
    left: 24,
    top: 32,
  },
  frame: {
    left: "60.56%",
    right: "13.06%",
    width: "26.38%",
  },
  frame1: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    bottom: "-0.22%",
    top: "-0.22%",
    height: "100.44%",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frame2: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    bottom: "-0.22%",
    top: "-0.22%",
    height: "100.44%",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frame3: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    bottom: "-0.22%",
    top: "-0.22%",
    height: "100.44%",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  row: {
    height: "39.53%",
    top: "24.02%",
    bottom: "36.46%",
    position: "absolute",
  },
  tipo: {
    textAlign: "center",
    fontFamily: FontFamily.epilogueRegular,
    marginTop: -11.5,
    color: Color.colorDimgray,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    marginLeft: -38.95,
    width: 77,
  },
  frame4: {
    left: "60.56%",
    right: "13.06%",
    width: "26.38%",
  },
  frame5: {
    left: "20.11%",
    right: "39.41%",
    width: "40.48%",
  },
  frame6: {
    left: "86.94%",
    right: "0%",
    width: "13.06%",
  },
  ttulo: {
    marginLeft: -26.8,
    width: 53,
    position: "absolute",
  },
  frame7: {
    right: "79.89%",
    width: "20.11%",
    left: "0%",
  },
  header: {
    height: "11.93%",
    bottom: "88.07%",
    left: "0%",
    right: "0.28%",
    width: "99.72%",
    backgroundColor: Color.colorGray_300,
  },
  avatar: {
    backgroundColor: Color.colorDeepskyblue,
    height: 36,
    width: 36,
    borderRadius: Border.br_lg,
    overflow: "hidden",
  },
  frame8: {
    right: "79.89%",
    width: "20.11%",
    left: "0%",
  },
  dilogo: {
    marginLeft: -21.5,
    color: Color.colorBlueviolet,
    marginTop: -10,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frame10: {
    borderRadius: Border.br_sm,
    top: 0,
    left: 0,
    height: 28,
    width: 59,
  },
  tag: {
    marginLeft: -29.95,
    height: 28,
    marginTop: -14.45,
    backgroundColor: Color.colorGray_300,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frame9: {
    left: "60.56%",
    right: "13.06%",
    width: "26.38%",
  },
  exposicin1: {
    marginTop: -22.45,
    fontFamily: FontFamily.interBold,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    left: 12,
    fontWeight: "700",
  },
  lun8Mar: {
    marginTop: 1.55,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray,
    left: 12,
  },
  frame11: {
    left: "20.11%",
    right: "39.41%",
    width: "40.48%",
  },
  frameIcon: {
    height: "100%",
    bottom: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "86.94%",
    right: "0%",
    width: "13.06%",
    overflow: "hidden",
  },
  row1: {
    top: "11.93%",
    bottom: "75.98%",
  },
  notas: {
    marginLeft: -17,
  },
  frame14: {
    width: 50,
    height: 28,
    position: "absolute",
  },
  tag1: {
    marginLeft: -25.45,
    marginTop: -14.45,
    backgroundColor: Color.colorGray_300,
    left: "50%",
    top: "50%",
  },
  avatar1: {
    backgroundColor: Color.colorDarkorange,
    height: 36,
    width: 36,
    borderRadius: Border.br_lg,
    overflow: "hidden",
  },
  row2: {
    top: "63.54%",
    bottom: "24.37%",
  },
  exposicin: {
    marginLeft: -30.5,
    color: Color.colorMediumvioletred,
    marginTop: -10,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frame18: {
    backgroundColor: Color.colorLavenderblush_100,
    height: 28,
    width: 77,
    position: "absolute",
    overflow: "hidden",
  },
  tag2: {
    height: 28,
    width: 77,
    position: "absolute",
    marginLeft: -38.95,
  },
  avatar2: {
    marginLeft: -18.3,
    marginTop: -18.45,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  row3: {
    top: "75.63%",
    bottom: "12.28%",
  },
  avatar3: {
    backgroundColor: Color.colorLightslategray,
    height: 36,
    width: 36,
    borderRadius: Border.br_lg,
    overflow: "hidden",
  },
  tarea: {
    marginLeft: -16.5,
  },
  frame23: {
    backgroundColor: Color.colorAliceblue_100,
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  tag3: {
    marginLeft: -24.95,
    marginTop: -14.45,
    backgroundColor: Color.colorGray_300,
    left: "50%",
    top: "50%",
  },
  row4: {
    top: "87.74%",
    bottom: "0.18%",
  },
  clase3: {
    top: 16,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  mar9Mar3: {
    top: 38,
    fontSize: FontSize.size_2xs,
    left: 68,
    position: "absolute",
    lineHeight: 18,
  },
  notas1: {
    marginLeft: -17,
    marginTop: -10,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
    color: Color.colorWhite,
  },
  frame24: {
    borderRadius: Border.br_sm,
    top: 0,
    left: 0,
    backgroundColor: Color.colorBlueviolet,
    overflow: "hidden",
  },
  tag28: {
    top: 22,
    right: 65,
    backgroundColor: Color.colorGray_300,
    width: 50,
  },
  j: {
    marginLeft: -5,
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 18,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "50%",
    top: "50%",
    marginTop: -9,
  },
  avatar65: {
    top: 18,
    backgroundColor: Color.colorMediumslateblue,
    height: 36,
    width: 36,
    borderRadius: Border.br_lg,
    overflow: "hidden",
  },
  chevronUpLarge1: {
    top: 24,
    right: 16,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  container98Child: {
    top: 298,
    width: 375,
    height: 0,
    left: 0,
    position: "absolute",
  },
  estudiar: {
    marginTop: -11,
    marginLeft: -16,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  bookIcon: {
    marginTop: -8,
    marginLeft: -38,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  button60: {
    right: 15,
    bottom: 17,
    width: 164,
    height: 36,
  },
  descripcin: {
    top: 80,
    textTransform: "uppercase",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    textAlign: "left",
  },
  espaciosVectorialesTransfor: {
    top: 106,
    width: 229,
    color: Color.colorSlategray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  container98: {
    top: 140,
    right: 11,
    left: 10,
    height: 217,
  },
  table1: {
    top: 128,
    left: 3,
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 357,
    height: 570,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_300,
    position: "absolute",
    overflow: "hidden",
  },
  eligeSobreQu: {
    top: 70,
    lineHeight: 28,
    color: Color.colorBlack,
    width: 284,
    opacity: 0.7,
    left: 24,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text: {
    marginTop: -18,
    marginLeft: -13.5,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    left: "50%",
    top: "50%",
  },
  buttonPerfilMateria: {
    top: 707,
    left: 139,
    width: 82,
    height: 67,
  },
  atrs: {
    top: 774,
    left: 161,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  repasos: {
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

export default Repasos;
