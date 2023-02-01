import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Icon } from "react-native-elements";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import CollectionScreen from "../screens/CollectionScreen";
import DetailScreen from "../screens/DetailScreen";
import LearningScreen from "../screens/LearningScreen";

const Stack = createStackNavigator();

function LogoTitle() {
  // console.log(Platform.OS);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 100,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          NFT-Market{" "}
        </Text>

        <MaterialCommunityIcons name="sail-boat" color={"#164773"} size={30} />
      </View>
    </View>
  );
}

export default function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <LogoTitle />,
        }}
      />
      <Stack.Screen name="Collection" component={CollectionScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />

      <Stack.Screen
        name="Learning"
        component={LearningScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>NFT 101</Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 30,
    color: "#2452FA",
    fontSize: 24,
  },
});
