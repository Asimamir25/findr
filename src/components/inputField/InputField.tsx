import React from "react";
import { StyleSheet, View, TextInput, SafeAreaView, Text } from "react-native";
import { InputProps } from "../../constant/type";
import { Color } from "../../constant/color";

const InputField: React.FC<InputProps> = ({
  style,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  editable,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={Color.lightBlack}
      keyboardType={keyboardType}
      editable={editable}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 44,
    borderColor: Color.partial,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

export default InputField;
