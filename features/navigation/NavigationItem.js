import { TouchableNativeFeedback, View, Text } from "react-native";

export const NavigationItem = ({ name, icon, isActive, onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 15,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          backgroundColor: isActive ? "#1DD3B0" : "transparent",
          borderRadius: 100,
        }}
      >
        <View>{icon(isActive)}</View>

        <Text
          style={{
            color: isActive ? "#ffffff" : "#bcbcbc",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};
