import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserScreen from "../screens/UserScreen";

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
    </Stack.Navigator>
  );
}
