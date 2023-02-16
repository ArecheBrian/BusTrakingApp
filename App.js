import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { DrawerNavigation, Navigation } from "./src/navigation/Navigation";

export default function App() {
  return (
  <NavigationContainer>
    <DrawerNavigation/>
  </NavigationContainer>
  )
}
