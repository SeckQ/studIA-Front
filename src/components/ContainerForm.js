import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerForm = ({ productCode, propTop, propBackgroundColor }) => {
  const container4Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const button4Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View style={[styles.container4, container4Style]}>
      <View style={[styles.button4, button4Style]}>
        <Text style={[styles.text, styles.textPosition]} />
        <Image
          style={[styles.document2Icon, styles.textPosition]}
          contentFit="cover"
          source={productCode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text: {
    marginTop: -13,
    marginLeft: 10,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  document2Icon: {
    marginTop: -10,
    marginLeft: -10,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  button4: {
    top: 8,
    left: 8,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorBlueviolet,
    width: 44,
    height: 44,
    overflow: "hidden",
    position: "absolute",
  },
  container4: {
    top: 358,
    left: 20,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke,
    borderWidth: 1,
    width: 162,
    height: 60,
    position: "absolute",
  },
});

export default ContainerForm;
