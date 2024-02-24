import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Carga = () => {
  return (
    <View style={styles.frameParent}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/frame-10.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    position: "absolute",
    top: 75,
    left: 0,
    width: 370,
    height: 768,
  },
  frameParent: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Carga;
