import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NoteCard = ({ noteIconText, iconImageUrl, propTop }) => {
  const container54Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.container54, container54Style]}>
      <Text style={styles.registroDeNotas}>{noteIconText}</Text>
      <Image
        style={[styles.iconButton2, styles.iconButton2Position]}
        contentFit="cover"
        source={iconImageUrl}
      />
      <Image
        style={[styles.chevronRightLarge1, styles.iconButton2Position]}
        contentFit="cover"
        source={require("../../assets/chevron-right-large-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconButton2Position: {
    overflow: "hidden",
    top: "50%",
    position: "absolute",
  },
  registroDeNotas: {
    marginTop: -13,
    left: 68,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_100,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  iconButton2: {
    marginTop: -18,
    left: 16,
    borderRadius: Border.br_lg,
    width: 36,
    height: 36,
  },
  chevronRightLarge1: {
    marginTop: -12,
    right: 16,
    width: 24,
    height: 24,
  },
  container54: {
    top: 410,
    left: 20,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke,
    borderWidth: 1,
    width: 350,
    height: 68,
    position: "absolute",
  },
});

export default NoteCard;
