import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./stackNavigation/StackNavigation";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default Navigation;
