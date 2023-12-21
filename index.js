import React from "react";
import { View, Text } from "react-native";

const applyCustomCode = (externalCodeSetup) => {
  externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", () => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello from custom Login Screen</Text>
    </View>
  ));
};
