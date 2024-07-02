import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Header from "../../components/header/Header";
import { IMAGES } from "../../constant/imagePath";
import { Color } from "../../constant/color";
import { useNews } from "./useNews";
import { FONT_FAMILIES } from "../../constant/font";

function News() {
  const { data, loading, openEmailClient } = useNews();
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header title="News" />
      </View>
      <View style={styles.padding}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <View>
                  {item.image ? (
                    <Image style={styles.img} source={{ uri: item.image }} />
                  ) : (
                    <Image style={styles.img} source={IMAGES.default} />
                  )}
                </View>
                <View style={styles.text_container}>
                  <Text style={styles.img_text}>Name:{item.name}</Text>
                  <Text style={styles.img_text}>
                    Reported By:{item.displayName}
                  </Text>
                  <Text style={styles.img_text}>Location:{item.location}</Text>

                  <View style={styles.btn_container}>
                    <Pressable
                      style={styles.btn}
                      onPress={() => {
                        openEmailClient(item.foundEmail);
                      }}
                    >
                      <Text style={styles.btn_text}>Contact Person</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    paddingLeft: 26,
    paddingTop: 8,
  },
  padding: {
    paddingLeft: 20,
    paddingRight: 30,
  },
  cardContainer: {
    paddingBottom: 16,
  },
  card: {
    paddingTop: 16,
    width: 336,
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  img_text: {
    fontSize: 16,
    fontFamily: FONT_FAMILIES.FG_REG,
    width: 212,
    flexWrap: "wrap",
  },
  text_container: {
    paddingLeft: 8,
  },
  btn_container: {
    paddingTop: 12,
  },
  btn: {
    backgroundColor: Color.primary,
    display: "flex",
    borderRadius: 12,
    width: 101,
  },
  btn_text: {
    fontFamily: FONT_FAMILIES.FG_MED,
    color: "white",
    fontSize: 11,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  img: {
    height: 154,
    width: 115,
    borderRadius: 4,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
});
