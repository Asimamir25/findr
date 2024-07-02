import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { Color } from "../../constant/color";
import { Prop } from "../../constant/type";
import { FONT_FAMILIES } from "../../constant/font";

const CardButton: React.FC<Prop> = ({ title }) => {
  return (
    <Pressable style={styles.btn}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
};

export default CardButton;
const styles = StyleSheet.create({
  btn: {
    width: 78,
    height: 24,
    backgroundColor: Color.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  btnText: {
    fontFamily: FONT_FAMILIES.FG_REG,
    color: "white",
    fontSize: 11,
  },
});
