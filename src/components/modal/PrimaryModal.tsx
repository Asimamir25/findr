import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Color } from "../../constant/color";
import { SVG } from "../../constant/imagePath";
import InputField from "../inputField/InputField";
import { UseModal } from "./useModal";
import { ModalTypes } from "../../constant/type";
import { FONT_FAMILIES } from "../../constant/font";

const PrimaryModal: React.FC<ModalTypes> = ({
  modalVisible,
  closeModal,
  selectedItem,
}) => {
  const {
    location,
    handleLocation,
    handleReport,
    description,
    loading,
    handleDes,
    openEmailClient,
    error,
  } = UseModal({ selectedItem, modalVisible, closeModal });
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.closeContainer}>
              <SVG.closeIcon width={24} height={23} onPress={closeModal} />
            </View>
            {selectedItem && selectedItem.image && (
              <Image
                source={{ uri: selectedItem.image }}
                style={styles.image}
              />
            )}
            <View style={styles.textContainer}>
              <Text style={styles.primaryText}>
                {selectedItem ? selectedItem.name : ""}
              </Text>
              <Text style={styles.primaryText}>
                {selectedItem ? selectedItem.date : ""}
              </Text>
              <Text style={styles.primaryText}>
                Last Seen Time:
                {selectedItem ? selectedItem.lastSeen : ""}
              </Text>
              <Text style={styles.location}>
                Last Seen Location:
                {selectedItem ? selectedItem.lastSeenLocation : ""}
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <InputField
                style={styles.inputLocation}
                placeholder="Location"
                value={location}
                onChangeText={handleLocation}
                editable={true}
                secureTextEntry={false}
              />
            </View>
            <View style={styles.descriptionContainer}>
              <InputField
                style={styles.border}
                placeholder="More Description"
                value={description}
                editable={true}
                onChangeText={handleDes}
                secureTextEntry={false}
              />
            </View>
            <View>{error && <Text style={styles.error}>{error}</Text>}</View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.primaryBtn}
                onPress={openEmailClient}
              >
                <Text style={styles.primaryBtnText}>Contact Via Email</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.primaryBtn, styles.primaryColor]}
                onPress={() => {
                  handleReport(location, description, selectedItem?.id);
                }}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text style={[styles.primaryBtnTextReport, styles.white]}>
                    Report Found
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 8,
    height: 591,
    width: 335,
    paddingTop: 35,
    alignItems: "center",
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  location: {
    paddingHorizontal: 12,
    fontFamily: FONT_FAMILIES.FG_REG,
    fontSize: 16,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 300,
  },
  textContainer: {
    marginTop: 16,
    display: "flex",
    alignItems: "center",
  },
  primaryText: {
    fontFamily: FONT_FAMILIES.FG_REG,
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 16,
  },
  inputLocation: {
    width: 303,
    height: 29,
    borderColor: Color.black,
    borderWidth: 0.5,
  },
  error: {
    color: "red",
  },
  descriptionContainer: {
    marginTop: 16,
    width: 303,
    borderWidth: 0.5,
    height: 100,
    borderRadius: 8,
  },
  btnContainer: {
    position: "absolute",
    bottom: 20,
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  primaryBtn: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Color.primary,
  },
  primaryBtnText: {
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 103,
    fontSize: 11,
    fontFamily: FONT_FAMILIES.FG_MED,
    color: Color.primary,
  },
  closeContainer: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  primaryBtnTextReport: {
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 118,
    fontSize: 11,
    fontFamily: FONT_FAMILIES.FG_MED,
    color: Color.primary,
  },
  white: {
    color: "white",
  },
  primaryColor: {
    backgroundColor: Color.primary,
  },
  border: {
    borderWidth: 0,
  },
});

export default PrimaryModal;
