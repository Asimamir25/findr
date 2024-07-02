import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import InputField from "../../components/inputField/InputField";
import { ScrollView } from "react-native-gesture-handler";
import { SVG } from "../../constant/imagePath";
import { UseCreateMissingPerson } from "./useCreateMissingPerson";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Color } from "../../constant/color";
import Button from "../../components/button/Button";
import { FONT_FAMILIES } from "../../constant/font";

function Upload() {
  const {
    image,
    name,
    gender,
    date,
    nickName,
    height,
    weight,
    eye,
    hair,
    hairLength,
    lastSeen,
    lastSeenLocation,
    show,
    error,
    dateOfBirth,
    birthdate,
    load,
    second,
    handleName,
    showDateCalender,
    handleGender,
    handleDateChange,
    handleNick,
    handleHeight,
    handleWeight,
    handleEye,
    handleHair,
    handleHairLength,
    handleLastSeen,
    handleLastSeenLocation,
    pickImage,
    addTodo,
    handleBirthDay,
    lastCalender,
  } = UseCreateMissingPerson();

  return (
    <View style={styles.container}>
      <Header title="Missing Person Detail" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.primaryContainer}>
          <Text style={styles.secText}>Basic Details of Missing Person</Text>
          <View style={styles.secondryContainer}>
            <View style={styles.fieldContainer}>
              <Text style={styles.primaryText}>Name</Text>
              <InputField
                value={name}
                onChangeText={handleName}
                editable={true}
                secureTextEntry={false}
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.primaryText}>Gender</Text>
              <InputField
                style={{}}
                value={gender}
                onChangeText={handleGender}
                editable={true}
                secureTextEntry={false}
              />
              <View style={styles.fieldContainer}>
                <Text style={styles.primaryText}>Date Of Birth</Text>
                <View style={styles.mailCon}>
                  <View>
                    <InputField
                      style={styles.inputEmail}
                      value={dateOfBirth}
                      editable={true}
                      secureTextEntry={false}
                    />
                  </View>
                  <View style={styles.calenderContainer}>
                    <TouchableOpacity>
                      <SVG.calenderIcon onPress={showDateCalender} />
                    </TouchableOpacity>
                    {!show && (
                      <DateTimePicker
                        mode="date"
                        display="spinner"
                        value={date}
                        onChange={handleDateChange}
                      />
                    )}
                  </View>
                </View>
              </View>
              <View style={styles.fieldContainer}>
                <Text style={styles.primaryText}>
                  Nickname or Known aliases
                </Text>
                <InputField
                  style={{}}
                  value={nickName}
                  onChangeText={handleNick}
                  editable={true}
                  secureTextEntry={false}
                />
              </View>
              <View style={styles.fieldContainer}>
                <Text style={styles.primaryText}>Last Seen</Text>
                <View style={styles.mailCon}>
                  <View>
                    <InputField
                      style={styles.inputEmail}
                      value={lastSeen}
                      editable={true}
                      secureTextEntry={false}
                    />
                  </View>
                  <View style={styles.calenderContainer}>
                    <TouchableOpacity>
                      <SVG.calenderIcon onPress={lastCalender} />
                    </TouchableOpacity>
                    {!second && (
                      <DateTimePicker
                        mode="date"
                        display="spinner"
                        value={birthdate}
                        onChange={handleBirthDay}
                      />
                    )}
                  </View>
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <Text style={styles.primaryText}>Last Seen Location</Text>
                <InputField
                  value={lastSeenLocation}
                  onChangeText={handleLastSeenLocation}
                  editable={true}
                  secureTextEntry={false}
                />
              </View>
            </View>
          </View>
          <View style={styles.primaryContainer}>
            <Text style={styles.partialText}>Physical Description</Text>
            <View style={styles.secondryContainer}>
              <View style={styles.fieldContainer}>
                <Text style={styles.primaryText}>Height</Text>
                <InputField
                  value={height}
                  onChangeText={handleHeight}
                  keyboardType={"numeric"}
                  editable={true}
                  secureTextEntry={false}
                />
                <View style={styles.fieldContainer}>
                  <Text style={styles.primaryText}>Weight</Text>
                  <InputField
                    value={weight}
                    onChangeText={handleWeight}
                    keyboardType={"numeric"}
                    editable={true}
                    secureTextEntry={false}
                  />
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.primaryText}>Eye Color</Text>
                  <InputField
                    style={{}}
                    value={eye}
                    onChangeText={handleEye}
                    editable={true}
                    secureTextEntry={false}
                  />
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.primaryText}>Hair Color</Text>
                  <InputField
                    value={hair}
                    onChangeText={handleHair}
                    editable={true}
                    secureTextEntry={false}
                  />
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.primaryText}>Length of Hair</Text>
                  <InputField
                    value={hairLength}
                    onChangeText={handleHairLength}
                    keyboardType={"numeric"}
                    editable={true}
                    secureTextEntry={false}
                  />
                </View>
                {error && <Text style={styles.error}>{error}</Text>}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.primaryContainer}>
          <Text style={styles.partialText}>Upload Photographs</Text>
          <TouchableOpacity onPress={pickImage}>
            <View style={styles.uploadContainer}>
              {load && (
                <View style={styles.loadContainer}>
                  <ActivityIndicator size="large" color={Color.primary} />
                </View>
              )}
              {image ? (
                <Image source={{ uri: image }} style={styles.image} />
              ) : (
                <View style={styles.uploadContinerItem}>
                  <View>
                    <SVG.uploadIconImage />
                  </View>
                  <View style={styles.dragCon}>
                    <Text style={styles.dragText}>Drag & drop files or</Text>
                    <Text style={styles.textBrowse}>Browse</Text>
                  </View>
                  <Text style={styles.primaryText}>
                    Supported formates: JPEG, PNG, JPG
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.btnContainer}>
          <Button
            title="Submit Report"
            onPress={addTodo}
            style={styles.text}
            isLoading={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Upload;

const styles = StyleSheet.create({
  text: {
    fontSize: 23,
    fontWeight: "normal",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 30,
  },
  primaryContainer: {
    marginTop: 22,
  },
  secondryContainer: {
    marginTop: 16,
  },
  secText: {
    fontFamily: FONT_FAMILIES.FG_REG,
    fontSize: 23,
  },
  primaryText: {
    fontFamily: FONT_FAMILIES.INTER_MED,
    fontSize: 14,
  },
  error: { color: "red" },
  fieldContainer: {
    justifyContent: "center",
    gap: 6,
  },
  mailCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: Color.partial,
    borderWidth: 1,
    height: 44,
    borderRadius: 8,
    paddingLeft: 10,
  },
  inputEmail: {
    borderWidth: 0,
    height: 20,
    marginBottom: 0,
  },
  calenderContainer: {
    paddingRight: 23,
  },
  partialText: {
    fontFamily: FONT_FAMILIES.FG_REG,
    fontSize: 23,
    color: Color.secondry,
  },
  loadContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 23,
  },
  uploadContainer: {
    width: 335,
    height: 173,
    borderWidth: 1,
    borderStyle: "dashed",
    marginTop: 16,
    borderColor: Color.primary,
    paddingHorizontal: 46,
    paddingVertical: 34,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 335,
    height: 173,
  },
  uploadContinerItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hr: {
    borderTopWidth: 1,
    marginTop: 25,
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 90,
  },
  btn: {
    backgroundColor: Color.primary,
    borderRadius: 8,
  },

  btnText: {
    textAlign: "center",
    fontFamily: FONT_FAMILIES.FG_BOLD,
    color: "white",
  },
  textBrowse: {
    fontSize: 16,
    color: Color.primary,
    fontFamily: FONT_FAMILIES.FG_REG,
  },
  dragText: {
    fontSize: 16,
    fontFamily: FONT_FAMILIES.FG_REG,
    color: Color.black,
  },
  dragCon: {
    display: "flex",
    flexDirection: "row",
    marginTop: 16,
  },
});
