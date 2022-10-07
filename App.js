import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/pages/Auth";
import Products from "./src/pages/Products";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
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
