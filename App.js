import { useState } from "react";
import { useFonts } from "expo-font";

import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HomeView } from "./HomeView";
import { DevicesView } from "./DevicesView";

export default function App() {
  const [loaded] = useFonts({
    Rubik: require("./assets/fonts/rubik.ttf"),
  });
  const [currentView, setView] = useState("home");

  if (!loaded) {
    return;
  }

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="light" />

      <View style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <View style={{ flex: 1 }}>
          {currentView == "home" && <HomeView />}
          {currentView == "devices" && <DevicesView />}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: "#0E3B43",
    fontFamily: "Rubik",
    color: "#ffffff",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  cards: {
    padding: 20,
    display: "grid",
    gap: 20,
  },
});
