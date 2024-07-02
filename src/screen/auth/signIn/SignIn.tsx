import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import InputField from "../../../components/inputField/InputField";
import { ScrollView } from "react-native-gesture-handler";
import { useSignIn } from "./useSignIn";
import { IMAGES, SVG } from "../../../constant/imagePath";
import { Color } from "../../../constant/color";
import Button from "../../../components/button/Button";
import { FONT_FAMILIES } from "../../../constant/font";

function SignIn() {
  const {
    email,
    name,
    password,
    checked,
    error,
    loading,
    handleName,
    handleEmail,
    handlePassword,
    handleSignIn,
    toggleCheckbox,
  } = useSignIn();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logo}>
          <SVG.signInIcon />
        </View>
        <View style={styles.logoContainer}>
          <Image source={IMAGES.logoSec} />
          <Text style={styles.joinText}>Join the Search for Hope</Text>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <View style={styles.justify}>
          <Text style={styles.primaryText}>Name</Text>
          <InputField
            value={name}
            onChangeText={handleName}
            placeholder="Jane Cooper"
            editable={true}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.justify}>
          <Text style={styles.primaryText}>Email</Text>
          <View style={styles.mailCon}>
            <View>
              <SVG.mailIcon />
            </View>
            <View>
              <InputField
                style={styles.inputEmail}
                value={email}
                onChangeText={handleEmail}
                placeholder="John@gmail.com"
                editable={true}
                secureTextEntry={false}
              />
            </View>
          </View>
          <Text style={styles.secText}>
            Your email address is your username
          </Text>
        </View>
        <View style={styles.justify}>
          <Text style={styles.primaryText}>Password</Text>
          <InputField
            style={styles.inputPassword}
            placeholder="**************"
            value={password}
            onChangeText={handlePassword}
            editable={true}
            secureTextEntry={true}
          />
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={checked}
          onPress={toggleCheckbox}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="#5b59fe"
        />
        <View>
          <Text style={styles.primaryText}>Rememeber me</Text>
          <Text style={styles.secText}>Save my login detail for next time</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="Next"
          onPress={handleSignIn}
          style={{}}
          isLoading={loading}
        />
        <Text style={styles.buttonSecText}>Need Help or Have Questions?</Text>
      </View>
    </ScrollView>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
    marginTop: 115,
  },
  logo: {
    position: "absolute",
    right: 5,
    top: -10,
  },
  joinText: {
    marginTop: 10,
    fontSize: 23,
    color: "black",
    fontFamily: FONT_FAMILIES.FG_REG,
  },
  mailCon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: Color.partial,
    borderWidth: 1,
    height: 44,
    borderRadius: 8,
    paddingLeft: 10,
  },
  input: {
    height: 44,
    padding: 10,
  },
  fieldContainer: {
    paddingHorizontal: 33,

    paddingTop: 14,
    gap: 24,
  },
  inputEmail: {
    borderWidth: 0,
    height: 20,
    marginBottom: 0,
  },
  inputPassword: {
    marginBottom: 0,
  },
  justify: {
    justifyContent: "center",
    gap: 6,
  },
  primaryText: {
    fontFamily: FONT_FAMILIES.INTER_REG,
    fontSize: 14,
    color: "black",
  },
  error: { color: "red" },
  secText: {
    fontFamily: FONT_FAMILIES.INTER_REG,
    fontSize: 14,
    color: Color.information,
  },
  button: {
    alignItems: "center",
    backgroundColor: Color.primary,
    borderRadius: 8,
  },
  buttonPrimaryText: {
    color: "white",
    paddingVertical: 12,
    fontFamily: FONT_FAMILIES.FG_SBOLD,

    paddingHorizontal: 130,
    fontSize: 23,
  },
  buttonSecText: {
    marginVertical: 20,
    textAlign: "center",
    textDecorationLine: "underline",
    color: Color.primary,
    fontSize: 16,
    fontFamily: FONT_FAMILIES.FG_REG,
  },
  checkboxContainer: {
    padding: 20,

    alignItems: "baseline",
    flexDirection: "row",
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  btnContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
