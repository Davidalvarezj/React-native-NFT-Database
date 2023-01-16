import Main from "./navigation/Main";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
