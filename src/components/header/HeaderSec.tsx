import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamlist } from "../../constant/type";
import { SVG } from "../../constant/imagePath";
import { signOut } from "../../store/slices/authSlice/AuthSlice";
import { Prop } from "../../constant/type";
import { useAppDispatch } from "../../store/hooks/hooks";
import { FONT_FAMILIES } from "../../constant/font";

const HeaderSec: React.FC<Prop> = ({ title }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamlist>>();
  const logout = () => {
    dispatch(signOut());
  };
  return (
    <View style={styles.container}>
      <SVG.back width={34} height={34} onPress={navigation.goBack} />
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={logout}>
        <SVG.logoutIcon />
      </Pressable>
    </View>
  );
};

export default HeaderSec;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 26,
  },
  title: {
    fontFamily: FONT_FAMILIES.FG_SBOLD,
    fontSize: 23,
  },
});
