import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Header from "../../../components/header/Header";
import InputField from "../../../components/inputField/InputField";
import { ScrollView } from "react-native-gesture-handler";
import { useForgotPasspword } from "./useForgotPassword";
import { IMAGES, SVG } from "../../../constant/imagePath";
import { Color } from "../../../constant/color";
import Button from "../../../components/button/Button";
import { FONT_FAMILIES } from "../../../constant/font";

function Forgotpasspword() {
  const { email, handleEmail, handleResetPassword, error, loading } =
    useForgotPasspword();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.flex}>
          <View>
            <Header title="Forgot Password" />
          </View>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={IMAGES.forgotPassword} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Please enter the email address associated with your account. We'll
              send you a verification code to reset your password.
            </Text>
          </View>
          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>Email</Text>
            <View style={styles.emailFieldContainer}>
              <View>
                <SVG.mailIcon />
              </View>
              <View>
                <InputField
                  style={styles.input_email}
                  value={email}
                  onChangeText={handleEmail}
                  editable={true}
                  placeholder="debra.holt@example.com"
                  secureTextEntry={false}
                />
              </View>
            </View>
          </View>
          {error && <Text style={styles.error}>{error}</Text>}
          <View style={styles.btnContainer}>
            <Button
              title="Send Reset Code"
              style={{}}
              onPress={() => {
                handleResetPassword(email);
              }}
              isLoading={loading}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Forgotpasspword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 47,
    marginVertical: 47,
  },
  emailContainer: {
    justifyContent: "center",
    gap: 6,
    marginTop: 24,
  },
  emailText: {
    fontFamily: FONT_FAMILIES.INTER_MED,
    fontSize: 14,
  },
  input_email: {
    borderWidth: 0,
    height: 20,
    marginBottom: 0,
  },
  flex: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: Color.primary,
    borderRadius: 8,
  },
  imgContainer: {
    marginTop: 56,
    paddingLeft: 9,
  },
  img: {
    width: 269,
    height: 185,
  },
  textContainer: {
    marginTop: 34,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: FONT_FAMILIES.FG_REG,
    width: 308,
  },
  emailFieldContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: Color.partial,
    borderWidth: 1,
    height: 44,
    borderRadius: 8,
    paddingLeft: 10,
  },
  resetText: {
    color: "white",
    paddingVertical: 12,
    paddingHorizontal: 42,
    fontFamily: FONT_FAMILIES.FG_BOLD,
    textAlign: "center",
    fontSize: 23,
  },
  btnContainer: { marginTop: 34 },
  error: { color: "red" },
});
