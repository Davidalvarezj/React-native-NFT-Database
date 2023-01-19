import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import Spotlights from "../components/Spotlights";
import { SPOTLIGTH } from "../assets/data/spotligth";

export default function HomeScreen() {
  return (
    <View>
      <Text style={{ fontSize: 18, margin: 14, fontWeight: "bold" }}>
        Spotlights
      </Text>

      <Spotlights spotlightArray={SPOTLIGTH} />
    </View>
  );
}
