import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StatsScreen from "../screens/StatsScreen";

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
    </Stack.Navigator>
  );
}
