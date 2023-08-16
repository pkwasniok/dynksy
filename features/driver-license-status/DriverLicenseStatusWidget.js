import { useState } from "react";

import { Text, View } from "react-native";
import { DriverLicenseStatusCard } from "./DriverLicenseStatusCard";
import { Card, Chip, Heading, Icon } from "../ui";

export const DriverLicenseStatusWidget = ({ controller }) => {
  const [isExpanded, setExpand] = useState(false);

  if (isExpanded == false) {
    return (
      <DriverLicenseStatusCard
        controller={controller}
        onPress={() => setExpand(!isExpanded)}
      />
    );
  }

  return (
    <Card>
      <DriverLicenseStatusCard
        controller={controller}
        onPress={() => setExpand(!isExpanded)}
        nested
      />

      <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Heading>Opis</Heading>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "justify",
          }}
        >
          {controller.data.description}
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Chip icon={<Icon name="sync-alt" small />} onPress={controller.sync}>
          Odśwież dane
        </Chip>

        <Text style={{ color: "#ffffff" }}>
          {new Date(controller.data.lastSync).toLocaleDateString("pl")}{" "}
          {new Date(controller.data.lastSync).toLocaleTimeString("pl")}
        </Text>
      </View>
    </Card>
  );
};
