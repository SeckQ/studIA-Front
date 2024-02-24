import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Apuntes = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.apuntes}>
      <Pressable
        style={styles.iconButton6}
        onPress={() => navigation.navigate("Nota")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon-button-6.png")}
        />
      </Pressable>
      <Image
        style={styles.iconButton61}
        contentFit="cover"
        source={require("../assets/icon-button-61.png")}
      />
      <View style={styles.tusApuntesParent}>
        <Text style={[styles.tusApuntes, styles.atrsFlexBox]}>Tus Apuntes</Text>
        <View style={[styles.table1, styles.table1Border]}>
          <View style={styles.row}>
            <View style={[styles.frame, styles.framePosition6]} />
            <View style={[styles.frame1, styles.framePosition5]} />
            <View style={[styles.frame2, styles.framePosition4]} />
            <View style={[styles.frame3, styles.framePosition3]} />
          </View>
          <View style={[styles.header, styles.headerPosition]}>
            <View style={[styles.frame4, styles.framePosition1]}>
              <Text style={[styles.tipo, styles.tipoPosition]}>Tipo</Text>
            </View>
            <View style={[styles.frame5, styles.framePosition1]} />
            <View style={[styles.frame6, styles.framePosition1]} />
            <View style={[styles.frame7, styles.framePosition1]}>
              <Text style={[styles.ttulo, styles.tipoPosition]}>Título</Text>
            </View>
          </View>
          <View style={[styles.row1, styles.rowLayout]}>
            <View style={[styles.frame8, styles.framePosition2]}>
              <View style={[styles.tag, styles.tagLayout]}>
                <View style={[styles.frame9, styles.frame9Position]}>
                  <Text style={[styles.dilogo, styles.dilogoTypo]}>
                    Diálogo
                  </Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.frameIcon, styles.headerPosition]}
              contentFit="cover"
              source={require("../assets/frame4.png")}
            />
            <View style={[styles.frame10, styles.framePosition2]}>
              <View style={[styles.avatar, styles.avatarLayout1]}>
                <Text style={[styles.a, styles.aPosition]}>A</Text>
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
          </View>
          <View style={[styles.row2, styles.rowLayout]}>
            <Image
              style={[styles.frameIcon, styles.headerPosition]}
              contentFit="cover"
              source={require("../assets/frame4.png")}
            />
            <View style={[styles.frame8, styles.framePosition2]}>
              <View style={[styles.tag1, styles.tagPosition]}>
                <View style={[styles.frame13, styles.framePosition]}>
                  <Text style={[styles.notas, styles.notasPosition]}>
                    Notas
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.frame10, styles.framePosition2]}>
              <View style={[styles.avatar1, styles.avatarLayout1]}>
                <Text style={[styles.a, styles.aPosition]}>A</Text>
              </View>
            </View>
            <View style={[styles.frame11, styles.framePosition2]}>
              <Text style={[styles.lun8Mar, styles.lun8MarPosition]}>
                Mar 9 Mar. 2022
              </Text>
              <Text style={[styles.exposicin1, styles.lun8MarPosition]}>
                Correción prueba
              </Text>
            </View>
          </View>
          <View style={[styles.row3, styles.rowLayout]}>
            <View style={[styles.frame10, styles.framePosition2]}>
              <View style={[styles.avatar2, styles.avatarLayout]}>
                <Text style={[styles.a, styles.aPosition]}>A</Text>
              </View>
            </View>
            <View style={[styles.frame11, styles.framePosition2]}>
              <Text style={[styles.lun8Mar, styles.lun8MarPosition]}>
                Mar 9 Mar. 2022
              </Text>
              <Text style={[styles.exposicin1, styles.lun8MarPosition]}>
                Clase 1
              </Text>
            </View>
            <View style={[styles.frame8, styles.framePosition2]}>
              <View style={[styles.tag2, styles.tag2Layout]}>
                <View style={[styles.frame19, styles.tag2Layout]}>
                  <Text style={[styles.exposicin, styles.dilogoTypo]}>
                    Exposición
                  </Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.frameIcon, styles.headerPosition]}
              contentFit="cover"
              source={require("../assets/frame4.png")}
            />
          </View>
          <View style={[styles.row4, styles.rowLayout]}>
            <View style={[styles.frame11, styles.framePosition2]}>
              <Text style={[styles.lun8Mar, styles.lun8MarPosition]}>
                Mar 9 Mar. 2022
              </Text>
              <Text style={[styles.exposicin1, styles.lun8MarPosition]}>
                Deber 1
              </Text>
            </View>
            <View style={[styles.frame10, styles.framePosition2]}>
              <View style={[styles.avatar3, styles.avatarLayout1]}>
                <Text style={[styles.a, styles.aPosition]}>A</Text>
              </View>
            </View>
            <View style={[styles.frame8, styles.framePosition2]}>
              <View style={[styles.tag3, styles.tag3Layout]}>
                <View style={[styles.frame23, styles.tag3Layout]}>
                  <Text style={[styles.tarea, styles.notasPosition]}>
                    Tarea
                  </Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.frameIcon, styles.headerPosition]}
              contentFit="cover"
              source={require("../assets/frame4.png")}
            />
          </View>
          <View style={[styles.container98, styles.frame9Position]}>
            <Text style={[styles.clase3, styles.clase3Layout]}>Clase 3</Text>
            <Text style={[styles.mar9Mar3, styles.mar9Mar3Typo]}>
              Mar 9 Mar. 2022
            </Text>
            <View style={[styles.tag28, styles.tag28Position]}>
              <View style={[styles.frame24, styles.frameLayout]}>
                <Text style={[styles.notas1, styles.dilogoTypo]}>Notas</Text>
              </View>
            </View>
            <View style={[styles.avatar65, styles.avatarLayout]}>
              <Text style={[styles.j, styles.aPosition]}>J</Text>
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
            <View style={[styles.button60, styles.buttonLayout]}>
              <Text style={[styles.editar, styles.editarPosition]}>Editar</Text>
              <Image
                style={[styles.penIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/pen.png")}
              />
            </View>
            <Text style={[styles.descripcin, styles.clase3Layout]}>
              Descripción
            </Text>
            <Text
              style={[styles.espaciosVectorialesTransfor, styles.mar9Mar3Typo]}
            >
              Espacios vectoriales, transformaciones lineales
            </Text>
            <View style={[styles.button61, styles.buttonLayout]}>
              <Text style={[styles.eliminar, styles.editarPosition]}>
                Eliminar
              </Text>
              <Image
                style={[styles.trashIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/trash.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.avatar44, styles.tag28Position]}>
        <Text style={[styles.a, styles.aPosition]}>A</Text>
      </View>
      <Pressable
        style={styles.buttonPerfilMateria}
        onPress={() => navigation.navigate("PerfilDeMateria")}
      >
        <Text style={styles.text}>{`<-`}</Text>
      </Pressable>
      <Text style={[styles.atrs, styles.atrsFlexBox]}>Atrás</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    overflow: "hidden",
  },
  atrsFlexBox: {
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
  },
  table1Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  framePosition6: {
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
  framePosition5: {
    left: "87%",
    right: "0%",
    width: "13%",
  },
  framePosition4: {
    left: "19.64%",
    right: "40.06%",
    width: "40.31%",
  },
  framePosition3: {
    left: "59.94%",
    right: "13%",
    width: "27.06%",
  },
  headerPosition: {
    top: "0%",
    position: "absolute",
  },
  framePosition1: {
    backgroundColor: Color.colorWhitesmoke,
    bottom: "-0.71%",
    top: "-0.71%",
    height: "101.43%",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  tipoPosition: {
    textAlign: "center",
    fontFamily: FontFamily.epilogueRegular,
    marginTop: -11.5,
    color: Color.colorDimgray,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rowLayout: {
    height: "12.11%",
    left: "0%",
    right: "0.28%",
    width: "99.72%",
    backgroundColor: Color.colorGray_300,
  },
  framePosition2: {
    bottom: "-0.71%",
    top: "-0.71%",
    height: "101.43%",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  tagLayout: {
    width: 59,
    height: 28,
  },
  frame9Position: {
    backgroundColor: Color.colorGhostwhite,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  dilogoTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  avatarLayout1: {
    height: 36,
    width: 36,
    borderRadius: Border.br_lg,
    overflow: "hidden",
  },
  aPosition: {
    fontSize: FontSize.size_lg,
    marginTop: -9,
    color: Color.colorWhite,
    lineHeight: 18,
    fontFamily: FontFamily.interRegular,
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  lun8MarPosition: {
    width: 126,
    top: "50%",
    textAlign: "left",
    left: 12,
    position: "absolute",
  },
  tagPosition: {
    marginTop: -14.5,
    left: "50%",
    top: "50%",
    backgroundColor: Color.colorGray_300,
  },
  framePosition: {
    backgroundColor: Color.colorAliceblue_100,
    borderRadius: Border.br_sm,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  notasPosition: {
    color: Color.colorDeepskyblue,
    fontFamily: FontFamily.interRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    marginTop: -10,
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  avatarLayout: {
    backgroundColor: Color.colorMediumslateblue,
    height: 36,
    width: 36,
    borderRadius: Border.br_lg,
    position: "absolute",
    overflow: "hidden",
  },
  tag2Layout: {
    width: 77,
    height: 28,
    position: "absolute",
  },
  tag3Layout: {
    width: 49,
    height: 28,
    position: "absolute",
  },
  clase3Layout: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  mar9Mar3Typo: {
    color: Color.colorSlategray,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  tag28Position: {
    top: 22,
    position: "absolute",
  },
  frameLayout: {
    borderRadius: Border.br_sm,
    top: 0,
  },
  buttonLayout: {
    width: 164,
    bottom: 17,
    borderRadius: Border.br_xs,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  editarPosition: {
    marginTop: -11,
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    height: 16,
    width: 16,
    marginTop: -8,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    borderRadius: Border.br_8xl,
    width: "100%",
  },
  iconButton6: {
    left: 40,
    top: 710,
    width: 54,
    height: 54,
    position: "absolute",
  },
  iconButton61: {
    top: 706,
    left: 267,
    borderRadius: 31,
    width: 61,
    height: 61,
    position: "absolute",
    overflow: "hidden",
  },
  tusApuntes: {
    width: 168,
    height: 44,
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    left: 12,
    top: 0,
  },
  frame: {
    right: "80.36%",
    width: "19.64%",
    left: "0%",
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
    height: "39.27%",
    top: "24.22%",
    bottom: "36.51%",
    left: "0%",
    right: "0.28%",
    width: "99.72%",
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  tipo: {
    marginLeft: -38.7,
    width: 78,
  },
  frame4: {
    left: "59.94%",
    right: "13%",
    width: "27.06%",
  },
  frame5: {
    left: "19.64%",
    right: "40.06%",
    width: "40.31%",
  },
  frame6: {
    left: "87%",
    right: "0%",
    width: "13%",
  },
  ttulo: {
    marginLeft: -25.35,
    width: 50,
  },
  frame7: {
    right: "80.36%",
    width: "19.64%",
    left: "0%",
  },
  header: {
    bottom: "87.89%",
    height: "12.11%",
    left: "0%",
    right: "0.28%",
    width: "99.72%",
    backgroundColor: Color.colorGray_300,
  },
  dilogo: {
    marginLeft: -21.5,
    color: Color.colorBlueviolet,
    fontFamily: FontFamily.interRegular,
    marginTop: -10,
    fontSize: FontSize.size_xs,
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  frame9: {
    borderRadius: Border.br_sm,
    top: 0,
    height: 28,
    width: 59,
  },
  tag: {
    marginLeft: -29.2,
    height: 28,
    marginTop: -14.5,
    left: "50%",
    top: "50%",
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  frame8: {
    left: "59.94%",
    right: "13%",
    width: "27.06%",
  },
  frameIcon: {
    bottom: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "87%",
    right: "0%",
    width: "13%",
    height: "100%",
    overflow: "hidden",
  },
  a: {
    marginLeft: -6,
    color: Color.colorWhite,
    lineHeight: 18,
  },
  avatar: {
    backgroundColor: Color.colorDeepskyblue,
    marginLeft: -18.35,
    marginTop: -18.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frame10: {
    right: "80.36%",
    width: "19.64%",
    left: "0%",
  },
  exposicin1: {
    marginTop: -22.5,
    fontFamily: FontFamily.interBold,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    width: 126,
    color: Color.colorGray_200,
    fontWeight: "700",
  },
  lun8Mar: {
    marginTop: 1.5,
    fontFamily: FontFamily.interRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray,
    width: 126,
  },
  frame11: {
    left: "19.64%",
    right: "40.06%",
    width: "40.31%",
  },
  row1: {
    top: "12.11%",
    bottom: "75.78%",
    position: "absolute",
  },
  notas: {
    marginLeft: -17,
  },
  frame13: {
    height: 28,
    width: 50,
    position: "absolute",
  },
  tag1: {
    marginLeft: -24.7,
    height: 28,
    width: 50,
    position: "absolute",
  },
  avatar1: {
    backgroundColor: Color.colorDarkorange,
    marginLeft: -18.35,
    marginTop: -18.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  row2: {
    top: "63.49%",
    bottom: "24.39%",
    position: "absolute",
  },
  avatar2: {
    marginLeft: -18.35,
    marginTop: -18.5,
    left: "50%",
    top: "50%",
  },
  exposicin: {
    color: Color.colorMediumvioletred,
    marginLeft: -30.5,
    fontFamily: FontFamily.interRegular,
    marginTop: -10,
    fontSize: FontSize.size_xs,
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  frame19: {
    backgroundColor: Color.colorLavenderblush_100,
    borderRadius: Border.br_sm,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  tag2: {
    marginLeft: -38.2,
    marginTop: -14.5,
    left: "50%",
    top: "50%",
    backgroundColor: Color.colorGray_300,
  },
  row3: {
    top: "75.61%",
    bottom: "12.28%",
    position: "absolute",
  },
  avatar3: {
    backgroundColor: Color.colorLightslategray,
    marginLeft: -18.35,
    marginTop: -18.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tarea: {
    marginLeft: -16.5,
  },
  frame23: {
    backgroundColor: Color.colorAliceblue_100,
    borderRadius: Border.br_sm,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  tag3: {
    marginLeft: -24.2,
    marginTop: -14.5,
    left: "50%",
    top: "50%",
    backgroundColor: Color.colorGray_300,
  },
  row4: {
    top: "87.72%",
    bottom: "0.17%",
    position: "absolute",
  },
  clase3: {
    top: 16,
    left: 68,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
  },
  mar9Mar3: {
    top: 38,
    fontSize: FontSize.size_2xs,
    left: 68,
    lineHeight: 18,
  },
  notas1: {
    marginLeft: -17,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    marginTop: -10,
    fontSize: FontSize.size_xs,
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  frame24: {
    backgroundColor: Color.colorBlueviolet,
    height: 28,
    width: 50,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  tag28: {
    right: 66,
    height: 28,
    width: 50,
    backgroundColor: Color.colorGray_300,
  },
  j: {
    marginLeft: -5,
    color: Color.colorWhite,
    lineHeight: 18,
  },
  avatar65: {
    top: 18,
    left: 16,
  },
  chevronUpLarge1: {
    top: 24,
    right: 17,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  container98Child: {
    top: 298,
    left: 10,
    width: 375,
    height: 0,
    position: "absolute",
  },
  editar: {
    marginLeft: -8.5,
    color: Color.colorWhite,
  },
  penIcon: {
    marginLeft: -30.5,
  },
  button60: {
    right: 16,
    backgroundColor: Color.colorBlueviolet,
  },
  descripcin: {
    top: 80,
    textTransform: "uppercase",
    left: 16,
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
  },
  espaciosVectorialesTransfor: {
    top: 106,
    width: 229,
    left: 16,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  eliminar: {
    marginLeft: -15,
    color: Color.colorCrimson,
  },
  trashIcon: {
    marginLeft: -37,
  },
  button61: {
    borderColor: Color.colorCrimson,
    left: 16,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  container98: {
    top: 145,
    width: 377,
    height: 217,
  },
  table1: {
    top: 55,
    borderColor: Color.colorWhite,
    width: 361,
    height: 578,
    backgroundColor: Color.colorGray_300,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  tusApuntesParent: {
    top: 33,
    width: 360,
    height: 632,
    left: 0,
    position: "absolute",
  },
  avatar44: {
    left: 306,
    backgroundColor: Color.colorBlueviolet,
    height: 36,
    width: 36,
    borderRadius: Border.br_lg,
    overflow: "hidden",
  },
  text: {
    marginTop: -18,
    marginLeft: -13.5,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    left: "50%",
    top: "50%",
    textAlign: "left",
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  buttonPerfilMateria: {
    top: 718,
    left: 149,
    width: 60,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorBlueviolet,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  atrs: {
    top: 756,
    left: 160,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  apuntes: {
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
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Apuntes;
