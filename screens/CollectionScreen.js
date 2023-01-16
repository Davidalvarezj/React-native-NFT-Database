import { SafeAreaView, Text } from "react-native";
import React from "react";
import { SPOTLIGTH } from "../assets/data/spotlights";

export default function CollectionScreen({ route, navigation }) {
  console.log("collection:", route.params.id);
  const colectionselected = SPOTLIGTH.find((elm) => elm.id === route.params.id);
  console.log(colectionselected);
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>{colectionselected.name}</Text>
      <Text>Seleccionaste collection #1</Text>
    </SafeAreaView>
  );
}
