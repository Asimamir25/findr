import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamlist } from "../../constant/type";
import { Prop } from "../../constant/type";
import { SVG } from "../../constant/imagePath";
import { FONT_FAMILIES } from "../../constant/font";

const Header: React.FC<Prop> = ({ title }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamlist>>();
  return (
    <View style={styles.container}>
      <SVG.back width={34} height={34} onPress={navigation.goBack} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    marginTop: 26,
  },
  title: {
    fontFamily: FONT_FAMILIES.FG_SBOLD,
    fontSize: 23,
  },
});
