import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { IMAGES } from "../../constant/imagePath";
import { Color } from "../../constant/color";
import { PrimaryCard } from "../../constant/type";
import CardButton from "../button/CardButton";
import { FONT_FAMILIES } from "../../constant/font";

const ReportCard: React.FC<PrimaryCard> = ({
  image,
  name,
  dateOfBirth,
  lastSeen,
  lastSeenLocation,
  year,
  gender,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          {image ? (
            <Image style={styles.img} source={{ uri: image }} />
          ) : (
            <Image style={styles.img} source={IMAGES.default} />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.imgText}>Name:{name}</Text>
          <Text style={styles.imgText}>
            Age: {year(dateOfBirth)}({gender})
          </Text>
          <Text style={styles.imgText}>Last Seen:{lastSeen}</Text>
          <Text style={styles.imgText}>
            Last Seen Location: {lastSeenLocation}
          </Text>
          <View style={styles.btnContainer}>
            <CardButton title="Detail" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReportCard;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  card: {
    paddingTop: 16,
    width: 336,
    height: 154,
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },

  imgText: {
    fontSize: 16,
    fontFamily: FONT_FAMILIES.FG_REG,
    paddingRight: 5,
  },
  textContainer: {
    paddingLeft: 8,
  },
  btnContainer: {
    paddingTop: 12,
  },
  btn: {
    width: 100,
    height: 24,
    backgroundColor: Color.primary,
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
    textAlign: "center",
  },
  btnText: {
    fontFamily: FONT_FAMILIES.FG_MED,
    padding: 2,
    color: "white",
  },
  img: {
    height: 154,
    width: 115,
  },
});
