import { View } from "react-native";

export const NavigationBar = ({ children }) => {
  return (
    <View
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#135B67",
          borderRadius: 100,
        }}
      >
        {children}
      </View>
    </View>
  );
};
