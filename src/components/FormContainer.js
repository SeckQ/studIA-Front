import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={styles.container1}>
      <Text style={styles.holaJuan}>Hola Juan!</Text>
      <Image
        style={styles.avatar1Icon}
        contentFit="cover"
        source={require("../../assets/avatar-1.png")}
      />
      <View style={[styles.button1, styles.buttonLayout]}>
        <Text style={[styles.text, styles.textPosition]} />
        <Image
          style={[styles.searchIcon, styles.textPosition]}
          contentFit="cover"
          source={require("../../assets/search.png")}
        />
      </View>
      <View style={[styles.button2, styles.buttonLayout]}>
        <Text style={[styles.text, styles.textPosition]} />
        <Image
          style={[styles.searchIcon, styles.textPosition]}
          contentFit="cover"
          source={require("../../assets/bell.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 44,
    width: 44,
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_xs,
    top: 46,
    overflow: "hidden",
    position: "absolute",
  },
  textPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  holaJuan: {
    top: 54,
    left: 20,
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  avatar1Icon: {
    top: 50,
    left: 319,
    borderRadius: Border.br_lg,
    width: 36,
    height: 36,
    overflow: "hidden",
    position: "absolute",
  },
  text: {
    marginTop: -13,
    marginLeft: 10,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLightslategray,
    textAlign: "left",
  },
  searchIcon: {
    marginTop: -10,
    marginLeft: -10,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  button1: {
    left: 223,
  },
  button2: {
    left: 263,
  },
  container1: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 96,
    position: "absolute",
  },
});

export default FormContainer;
