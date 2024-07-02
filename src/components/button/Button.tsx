import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import { Color } from "../../constant/color";
import { ButtonProps } from "../../constant/type";
import { FONT_FAMILIES } from "../../constant/font";

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  isLoading,
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color="white"
          style={[styles.button, styles.resetText]}
        />
      ) : (
        <Text style={[styles.resetText, style]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: Color.primary,
    borderRadius: 8,
  },
  resetText: {
    color: "white",
    paddingVertical: 12,
    paddingHorizontal: 42,
    fontFamily: FONT_FAMILIES.FG_SBOLD,
    textAlign: "center",
    fontSize: 23,
  },
});
