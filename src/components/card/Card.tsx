import React from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color } from "../../constant/color";
import { IMAGES } from "../../constant/imagePath";
import { CardProp } from "../../constant/type";
import CardButton from "../button/CardButton";
import { FONT_FAMILIES } from "../../constant/font";

const Card: React.FC<CardProp> = ({
  year,
  image,
  name,
  dateOfBirth,
  gender,
  lastSeen,
  lastSeenLocation,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <Text style={styles.missing}>Missing</Text>
      </View>
      <View style={styles.gradientContainer}>
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.71)"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.gradient}
        ></LinearGradient>
        {image ? (
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={{ uri: image }} />
          </View>
        ) : (
          <Image style={styles.img} source={IMAGES.default} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.imgText}>Name: {name}</Text>
        <Text style={styles.imgText}>
          Age: {year(dateOfBirth)} ({gender})
        </Text>
        <Text style={styles.imgText}>LastSeen: {lastSeen}</Text>
        <Text style={styles.imgText}>Location: {lastSeenLocation}</Text>
        <View style={styles.btnContainer}>
          <CardButton title="View Detail" />
        </View>
      </View>
    </View>
  );
};

export default Card;
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
    width: 213,
    height: 315,
    position: "absolute",
    zIndex: 7,
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
    fontFamily: "fg-reg",
    color: "white",
    fontSize: 11,
  },
  floatIconContainer: {
    position: "absolute",
    bottom: 79,
    right: 30,
  },
  imgContainer: {
    height: 343,
    width: 213,
  },
  gradientContainer: {
    borderBottomLeftRadius: 8,
  },
});
