import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { Card } from "react-native-elements";
import { SPOTLIGTH } from "../assets/data/spotligth";
import React from "react";

export default function DetailScreen(route, navigation) {
  const nftobj = route.route.params.detail;
  // const colectionselected = SPOTLIGTH.find((elm) => elm.id === nftname);
  console.log(nftobj);
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Card
        containerStyle={{
          padding: 0,
          borderRadius: 10,
          height: 550,
          width: 350,
          margin: 5,
          overflow: "hidden",
        }}
      >
        <Card.Image source={{ uri: nftobj.image }} style={styles.img}>
          <View style={{ justifyContent: "center", flex: 1 }}></View>
        </Card.Image>
        <Text style={{ marginTop: 10 }}>{nftobj.name}</Text>
        <Text style={{ marginBottom: 10 }}>{nftobj.price}</Text>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  img: {
    height: 400,
  },
  imgback: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 10,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#5637DD",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
});
