import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import "expo-dev-client";
import InputField from "../../../components/inputField/InputField";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useSignUp } from "./useSignUp";
import { IMAGES, SVG } from "../../../constant/imagePath";
import { Color } from "../../../constant/color";
import Button from "../../../components/button/Button";
import { FONT_FAMILIES } from "../../../constant/font";

function SignUp() {
  const {
    onGoogleButtonPress,
    password,
    email,
    navigation,
    error,
    loading,
    handlePassword,
    handleSignUp,
    IsLoading,
    handleEmail,
  } = useSignUp();
  GoogleSignin.configure({
    webClientId:
      "523145364965-mobrt5cioolnauqs7aitd87l51d87eqk.apps.googleusercontent.com",
  });

  return (
    <View style={styles.container}>
      <View style={styles.primaryContainer}>
        {IsLoading && <ActivityIndicator size="large" color="red" />}
      </View>
      <View style={styles.secContainer}>
        <Image style={styles.logo} source={IMAGES.logo} />
        <View style={styles.welcomeView}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
      </View>

      <View style={styles.field_container}>
        <View style={styles.emailWrapper}>
          <Text style={styles.primaryText}>Email</Text>
          <View style={styles.emailContainer}>
            <View>
              <SVG.mailIcon />
            </View>
            <View>
              <InputField
                style={styles.inputEmail}
                value={email}
                onChangeText={handleEmail}
                placeholder="debra.holt@example.com"
                editable={true}
                secureTextEntry={false}
              />
            </View>
          </View>
          <Text style={styles.secText}>
            Your email address is your username
          </Text>
        </View>
        <View style={styles.passwordContainer}>
          <Text style={styles.primaryText}>Password</Text>
          <InputField
            style={styles.inputPassword}
            placeholder="**************"
            value={password}
            onChangeText={handlePassword}
            editable={true}
            secureTextEntry={true}
          />
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
        <View style={styles.btnContainer}>
          <Button
            title="Login"
            style={{}}
            onPress={handleSignUp}
            isLoading={loading}
          />
        </View>
        <View style={styles.navigateItem}>
          <Text
            style={styles.registerText}
            onPress={() => {
              navigation.navigate("forgotPassword");
            }}
          >
            Forget your Password
          </Text>
          <Text>|</Text>
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate("signIn")}
          >
            Register for an account
          </Text>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
          <View style={styles.orContainer}>
            <Text style={styles.orText}>or</Text>
          </View>
          <View style={styles.line}></View>
        </View>
        <View style={styles.alignment}>
          <TouchableOpacity
            style={styles.googleWrapper}
            onPress={onGoogleButtonPress}
          >
            <View style={styles.googleContainer}>
              <SVG.google />
            </View>
          </TouchableOpacity>
          <View style={styles.svgContainer}>
            <View>
              <SVG.signInSvg />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 26,
    paddingHorizontal: 34,
  },
  primaryContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  secContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 26,
  },
  welcomeView: {
    marginTop: 24,
  },

  welcomeText: {
    fontSize: 45,
    fontFamily: FONT_FAMILIES.FG_BOLD,
    textAlign: "center",
  },
  field_container: { marginTop: 24 },
  primaryText: {
    fontFamily: FONT_FAMILIES.INTER_MED,
    fontSize: 14,
    color: "black",
  },
  emailWrapper: {
    justifyContent: "center",
    gap: 6,
  },
  passwordContainer: {
    justifyContent: "center",
    gap: 6,
    marginTop: 24,
  },
  secText: {
    fontFamily: FONT_FAMILIES.INTER_REG,
    fontSize: 14,
    color: Color.information,
  },
  logo: {
    width: 167,
  },
  svg: {
    position: "absolute",
    alignSelf: "center",
    bottom: -90,
  },
  inputEmail: {
    borderWidth: 0,
    height: 20,
    marginBottom: 0,
  },
  alignment: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  inputPassword: {
    marginBottom: 0,
  },
  error: { color: "red" },
  emailContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: Color.partial,
    borderWidth: 1,
    height: 44,
    borderRadius: 8,
    paddingLeft: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: Color.primary,
    borderRadius: 8,
  },
  btnLoginText: {
    color: "white",
    paddingVertical: 12,

    paddingHorizontal: 117,
    fontFamily: FONT_FAMILIES.FG_SBOLD,
    fontSize: 23,
  },
  btnContainer: { marginTop: 34 },
  registerText: {
    fontSize: 11,
    textDecorationLine: "underline",
    fontFamily: FONT_FAMILIES.FG_REG,
    color: Color.secondry,
  },
  orContainer: {
    width: 33,
    height: 33,
    backgroundColor: Color.gray,
    borderRadius: 230,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  orText: {
    textAlign: "center",
    fontFamily: FONT_FAMILIES.FG_REG,
    color: Color.secondry,
  },

  googleContainer: {
    marginTop: 27,
    borderColor: Color.gray,
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 12,
    width: 60,
    height: 57,
    borderWidth: 2,
    position: "relative",
    zIndex: 2,
    backgroundColor: "white",
  },
  googleWrapper: { zIndex: 3 },
  svgContainer: {
    position: "relative",
    zIndex: 0,
    marginTop: 10,
  },
  navigateItem: {
    marginTop: 22,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 3,
    alignItems: "center",
    paddingHorizontal: 74,
  },
  lineContainer: {
    marginTop: 21,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  line: {
    borderBottomWidth: 2,
    width: 152,
    borderColor: Color.gray,
  },
});
