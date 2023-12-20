import { View, Text } from "react-native";

export const applyCustomCode = (externalCodeSetup) => {
  externalCodeSetup.navigationApi.replaceScreenComponent("LoginScreen", () => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello from custom Login Screen</Text>
    </View>
  ));
};
