import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserScreen from "../screens/UserScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();

export default function UserScreenNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mycollection"
        component={UserScreen}
        options={{
          title: "My Collection",
        }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
