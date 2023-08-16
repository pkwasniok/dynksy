import { View, Text } from "react-native";
import { Card, Heading, Icon } from "../ui";

export const PowerMeterCard = ({
  controller,
  nested,
  onPress,
  onLongPress,
}) => {
  return (
    <View
      style={{
        overflow: "hidden",
        position: "relative",
        backgroundColor: !nested ? "#135B67" : "#0E3B43",
        borderRadius: !nested ? 30 : 15,
      }}
    >
      <View
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: `${Math.round((controller.data.currentPower / 8000) * 100)}%`,
          height: "100%",
          backgroundColor: "#1DD3B0",
        }}
      />

      <Card
        onPress={onPress}
        onLongPress={onLongPress}
        nested={nested}
        style={{ backgroundColor: "transparent" }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          }}
        >
          <Icon name="solar-panel" />

          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Heading>Elektrownia słoneczna</Heading>

            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#ffffff",
              }}
            >
              Aktualna moc: {controller.data.currentPower} W
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};
