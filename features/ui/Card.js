import { View, TouchableNativeFeedback } from "react-native";

export const Card = ({
  children,
  nested = false,
  style = {},
  onPress,
  onLongPress,
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress} onLongPress={onLongPress}>
      <View
        style={{
          position: "relative",
          backgroundColor: !nested ? "#135B67" : "#0E3B43",
          borderRadius: !nested ? 30 : 15,
          ...style,
        }}
      >
        <View
          style={{
            width: "100%",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {children}
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
