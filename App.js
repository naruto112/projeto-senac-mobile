import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/pages/Auth";
import Products from "./src/pages/Products";
import Home from "./src/pages/Home";

import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Bold": require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-Italic": require("./assets/fonts/RobotoCondensed-Italic.ttf"),
    "RobotoCondensed-Regular": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Products />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F5",
    alignItems: "center",
    justifyContent: "center",
  },
});
