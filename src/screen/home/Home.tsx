import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Platform,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React from "react";
import InputField from "../../components/inputField/InputField";
import { ScrollView } from "react-native-gesture-handler";
import { IMAGES, SVG } from "../../constant/imagePath";
import PriModal from "../../components/modal/PrimaryModal";
import { UseHome } from "./useHome";
import { Color } from "../../constant/color";
import Card from "../../components/card/Card";
import { FONT_FAMILIES } from "../../constant/font";

function Home() {
  const {
    selectedItem,
    modalVisible,
    Data,
    navigation,
    year,
    openModal,
    loading,
    closeModal,
  } = UseHome();
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.primaryCon}>
        <Image style={styles.logo} source={IMAGES.logo} />
        <View style={styles.searchContainer}>
          <View style={styles.searchFieldContainer}>
            <View>
              <InputField
                style={styles.searchField}
                placeholder="Search"
                editable={true}
                secureTextEntry={false}
              />
            </View>
            <View style={styles.searchWrapper}>
              <SVG.searchIcon />
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={styles.primaryContainer}>
        <View style={styles.addContainer}>
          <Image source={IMAGES.addMain} />
        </View>
        <View style={styles.secAdd}>
          <View>
            <Text style={styles.featureProfile}>Featured Profiles</Text>
          </View>
          <View>
            <Text
              style={styles.moreText}
              onPress={() => {
                navigation.navigate("report");
              }}
            >
              See More
            </Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.overFlow}>
            <FlatList
              horizontal
              keyExtractor={(item, index) =>
                item.id ? item.id.toString() : index.toString()
              }
              data={Data}
              renderItem={({ item }) => (
                <Pressable onPress={() => openModal(item)}>
                  <Card
                    year={year}
                    image={item.image}
                    name={item.name}
                    dateOfBirth={item.dateOfBirth}
                    gender={item.gender}
                    lastSeen={item.lastSeen}
                    lastSeenLocation={item.lastSeenLocation}
                  />
                </Pressable>
              )}
            />
          </View>
          <PriModal
            modalVisible={modalVisible}
            closeModal={closeModal}
            selectedItem={selectedItem}
          />
        </View>
      </ScrollView>
      <View style={styles.floatIconContainer}>
        <SVG.floatIcon />
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  primaryContainer: {
    paddingLeft: 15,
    paddingRight: 30,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  logo: {
    width: 167,
    marginTop: 6,
  },
  searchWrapper: {
    paddingRight: 9,
  },
  searchContainer: {
    paddingTop: 34,
    paddingBottom: 23,
    marginHorizontal: 62,
  },

  addContainer: {
    paddingVertical: 27,
    paddingLeft: 15,
    paddingRight: 25,
  },
  featureProfile: {
    fontSize: 23,
    fontFamily: FONT_FAMILIES.FG_REG,
    color: Color.secondry,
  },
  secAdd: {
    marginTop: 27,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchFieldContainer: {
    width: 285,
    height: 36,
    borderWidth: 0.5,
    borderColor: Color.secondry,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchField: {
    borderWidth: 0,
    marginBottom: 0,
    height: 36,
  },
  moreText: {
    fontSize: 16,
    fontFamily: FONT_FAMILIES.FG_REG,
    color: Color.primary,
    textDecorationLine: "underline",
  },
  primaryCon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  cardContainer: {
    marginBottom: 92,
    marginTop: 12,
  },
  overFlow: {
    overflow: "hidden",
  },
  card: {
    width: 213,
    height: 304,
    marginRight: 16,
    ...Platform.select({
      ios: {
        shadowColor: Color.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  imgText: {
    fontSize: 12,
    color: "white",
    width: 175,
  },
  textContainer: {
    bottom: 30,
    position: "absolute",
    zIndex: 90,
    left: 23,
  },
  cardTop: {
    height: 42,
    backgroundColor: Color.red,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  missing: {
    fontSize: 32,
    fontFamily: FONT_FAMILIES.FG_REG,
    color: "white",
  },
  img: {
    height: 260,
    width: 213,
  },
  btnContainer: {
    paddingTop: 12,
  },
  btn: {
    width: 78,
    height: 24,
    backgroundColor: Color.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  btnText: {
    fontFamily: FONT_FAMILIES.FG_REG,
    color: "white",
    fontSize: 11,
  },
  floatIconContainer: {
    position: "absolute",
    bottom: 79,
    right: 30,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
});
