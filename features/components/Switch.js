import { View, Text, TouchableNativeFeedback } from "react-native";

export const Switch = ({
  name,
  controller,
  leftIcon,
  rightIcon,
  leftIconPress,
  rightIconPress,
}) => {
  return (
    <TouchableNativeFeedback onPress={controller.toggle}>
      <View
        style={{
          position: "relative",
          padding: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 15,
          backgroundColor: controller.data.state ? "#1DD3B0" : "#135B67",
          borderRadius: 30,
        }}
      >
        {leftIcon && (
          <TouchableNativeFeedback onPress={leftIconPress}>
            <View
              style={{
                width: 28,
                aspectRatio: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {leftIcon(controller.data.state)}
            </View>
          </TouchableNativeFeedback>
        )}

        <View style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            {name}
          </Text>

          {controller.status == "online" && (
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: controller.data.state ? "#ebebeb" : "#bcbcbc",
              }}
            >
              {controller.data.state ? "Włączone" : "Wyłączone"}
            </Text>
          )}

          {controller.status == "offline" && (
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: controller.data.state ? "#ebebeb" : "#bcbcbc",
              }}
            >
              Offline
            </Text>
          )}

          {controller.status == "idle" && (
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: controller.data.state ? "#ebebeb" : "#bcbcbc",
              }}
            >
              Łączenie...
            </Text>
          )}
        </View>

        {rightIcon && (
          <TouchableNativeFeedback onPress={rightIconPress}>
            <View
              style={{
                width: 28,
                aspectRatio: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {rightIcon(controller.data.state)}
            </View>
          </TouchableNativeFeedback>
        )}
      </View>
    </TouchableNativeFeedback>
  );
};
