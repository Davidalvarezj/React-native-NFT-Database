import { SafeAreaView, Text } from "react-native";
import React from "react";
import Spotlights from "../components/Spotlights";
import { SPOTLIGTH } from "../assets/data/spotlights";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 18, margin: 14, fontWeight: "bold" }}>
        Spotlights
      </Text>

      <Spotlights spotlightArray={SPOTLIGTH} />
    </SafeAreaView>
  );
}
