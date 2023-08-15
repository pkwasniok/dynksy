import { View, Text } from "react-native";
import { Heading, Card } from "../ui";

export const PowerSwitchCard = ({ name, controller, leftIcon, rightIcon }) => {
  return (
    <Card
      onPress={controller.toggle}
      style={{
        backgroundColor: controller.data.state ? "#1DD3B0" : "#135B67",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 15,
        }}
      >
        {leftIcon && <View>{leftIcon(controller.data.state)}</View>}

        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Heading>{name}</Heading>

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

        {rightIcon && <View>{rightIcon(controller.data.state)}</View>}
      </View>
    </Card>
  );
};
