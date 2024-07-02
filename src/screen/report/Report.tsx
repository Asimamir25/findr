import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Platform,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Header from "../../components/header/Header";
import InputField from "../../components/inputField/InputField";
import { ScrollView } from "react-native-gesture-handler";
import PriModal from "../../components/modal/PrimaryModal";
import { SVG } from "../../constant/imagePath";
import { UseReport } from "./useReport";
import { Color } from "../../constant/color";
import ReportCard from "../../components/reportCard/ReportCard";
import { FONT_FAMILIES } from "../../constant/font";

function Report() {
  const {
    selectedItem,
    refreshing,
    modalVisible,
    data,
    loading,
    openModal,
    closeModal,
    onRefresh,
    year,
  } = UseReport();
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.primaryContainer}>
        <View style={styles.padding}>
          <Header title="All Missing Person" />
          <View style={styles.searchField}>
            <View>
              <InputField
                style={styles.input}
                placeholder="Search"
                editable={true}
                secureTextEntry={false}
              />
            </View>
            <View style={styles.searchContainer}>
              <SVG.searchIcon />
            </View>
          </View>
          <View style={styles.filterView}>
            <Text style={styles.filterText}>Filter By:</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Pressable style={styles.filterBtn}>
                <Text style={styles.filterItem}>Male</Text>
              </Pressable>

              <Pressable style={styles.filterBtn}>
                <Text style={styles.filterItem}>Female</Text>
              </Pressable>
              <Pressable style={styles.filterBtn}>
                <Text style={styles.filterItem}>Trans</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={styles.padding}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable onPress={() => openModal(item)}>
              <ReportCard
                image={item.image}
                name={item.name}
                dateOfBirth={item.dateOfBirth}
                lastSeen={item.lastSeen}
                year={year}
                lastSeenLocation={item.lastSeenLocation}
                gender={item.gender}
              />
            </Pressable>
          )}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
        <PriModal
          modalVisible={modalVisible}
          closeModal={closeModal}
          selectedItem={selectedItem}
        />
      </View>
    </View>
  );
}

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  padding: {
    paddingLeft: 20,
    paddingRight: 30,
  },
  primaryContainer: {
    marginTop: 6,
    ...Platform.select({
      ios: {
        shadowColor: Color.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  searchContainer: {
    paddingRight: 9,
  },
  searchField: {
    marginTop: 6,
    width: 335,
    height: 36,
    borderWidth: 0.5,
    borderColor: Color.secondry,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderWidth: 0,
    marginBottom: 0,
    height: 36,
  },
  filterView: {
    marginTop: 26,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 12,
    alignItems: "center",
    marginLeft: 16,
  },
  filterItem: {
    fontFamily: FONT_FAMILIES.INTER_MED,
    color: Color.light_gray,
  },

  filterBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Color.filter,
    marginLeft: 16,
    ...Platform.select({
      ios: {
        shadowColor: Color.lightBlack,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  filterText: {
    fontFamily: FONT_FAMILIES.FG_MED,
    fontSize: 16,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
});
