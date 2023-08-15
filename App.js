import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

import { NavigationBar, NavigationItem } from "./features/navigation";
import { HomeView } from "./HomeView";
import { DevicesView } from "./DevicesView";

import { FontAwesome5 } from "@expo/vector-icons";

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

        {/* <NavigationBar>
          <NavigationItem
            name="Strona główna"
            icon={(active) => (
              <FontAwesome5
                name="home"
                size={22}
                color={active ? "#ffffff" : "#bcbcbc"}
              />
            )}
            isActive={currentView == "home"}
            onPress={() => setView("home")}
          />

          <NavigationItem
            name="Urządzenia"
            icon={(active) => (
              <FontAwesome5
                name="th-large"
                size={22}
                color={active ? "#ffffff" : "#bcbcbc"}
              />
            )}
            isActive={currentView == "devices"}
            onPress={() => setView("devices")}
          />
        </NavigationBar> */}
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
