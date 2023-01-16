import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import CollectionScreen from "../screens/CollectionScreen";

const Stack = createStackNavigator();

function LogoTitle() {
  console.log(Platform.OS);
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          textAlign: "center",
          flex: 1,
        }}
      >
        NFT-Market{" "}
        <MaterialCommunityIcons name="sail-boat" color={"#164773"} size={20} />
      </Text>
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
    </Stack.Navigator>
  );
}
