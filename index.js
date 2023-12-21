import { View, Text } from "react-native";

export const applyCustomCode = (externalCodeSetup) => {
  externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", () => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Testing...</Text>
    </View>
  ));
};
