import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Header_Sec from "../../components/header/HeaderSec";
import { SVG, IMAGES } from "../../constant/imagePath";
import InputField from "../../components/inputField/InputField";
import { UseProfile } from "./useProfille";
import { Color } from "../../constant/color";
import Button from "../../components/button/Button";
import { color } from "react-native-elements/dist/helpers";
import { FONT_FAMILIES } from "../../constant/font";

function Profile() {
  const {
    user,
    name,
    error,
    handleEmail,
    handleName,
    updateProfile,
    isLoading,
  } = UseProfile();

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Header_Sec title="Profile " />
      </View>
      <View style={styles.profile_detail_container}>
        <View style={styles.imgContainer}>
          {user?.photoURL ? (
            <Image
              style={styles.profile_pic}
              source={{ uri: user.photoURL || undefined }}
            />
          ) : (
            <Image style={styles.profile_pic} source={IMAGES.default} />
          )}
        </View>
        <View>
          <SVG.pencilIcon style={styles.icon} />
        </View>
        <View style={styles.main_field_container}>
          <View style={styles.name_field_container}>
            <Text style={styles.field_text}>Name</Text>
            <InputField
              value={name}
              onChangeText={handleName}
              placeholder="Jane Cooper"
              editable={true}
              secureTextEntry={false}
            />
            <View style={styles.name_field_container}>
              <Text style={styles.field_text}>Email</Text>
              <InputField
                value={user?.email ?? ""}
                onChangeText={handleEmail}
                placeholder="jam@gmail.com"
                editable={false}
                secureTextEntry={false}
              />
            </View>
            {error && <Text style={styles.red}>{error}</Text>}
          </View>
        </View>
      </View>
      <View style={styles.main_btn_con}>
        <View style={styles.bottom}>
          <Button
            title="Save Changes"
            onPress={() => updateProfile(name)}
            style={styles.btn_text}
            isLoading={isLoading}
          />
        </View>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 26,
    paddingVertical: 10,
    marginTop: 23,
  },
  icon: {
    position: "absolute",
    bottom: 10,
    right: 100,
  },
  imgContainer: {
    display: "flex",
    alignItems: "center",
  },
  header_container: {
    marginTop: 6,
  },
  profile_detail_container: {
    marginTop: 16,
    position: "relative",
  },
  profile_pic: {
    width: 125,
    height: 125,
    borderRadius: 200,
  },
  main_field_container: {
    marginTop: 69,
    paddingHorizontal: 34,
  },
  name_field_container: {
    justifyContent: "center",
    gap: 6,
  },
  field_text: {
    fontFamily: FONT_FAMILIES.INTER_MED,
    fontSize: 14,
  },
  main_btn_con: {
    display: "flex",
    alignItems: "center",
    marginTop: 308,
  },
  btn: {
    backgroundColor: Color.primary,
    borderRadius: 8,
  },
  btn_text: {
    textAlign: "center",
    fontSize: 23,
    fontFamily: FONT_FAMILIES.FG_BOLD,
    paddingHorizontal: 41,
    color: "white",
  },
  bottom: {
    bottom: 140,
  },
  red: { color: "red" },
});
