import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StatsScreen from "../screens/StatsScreen";
import CollectionScreen from "../screens/CollectionScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();

export default function StatsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          title: "Stats",
        }}
      />
      <Stack.Screen name="Collection" component={CollectionScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
