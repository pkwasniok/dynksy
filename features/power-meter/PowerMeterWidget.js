import { useState } from "react";

import { View, Text, StyleSheet } from "react-native";
import { Card, Chip, Icon } from "../ui";
import { PowerMeterCard } from "./PowerMeterCard";

export const PowerMeterWidget = ({ controller }) => {
  const [isExpanded, setExpand] = useState(false);

  if (isExpanded == false) {
    return (
      <PowerMeterCard
        controller={controller}
        onPress={() => setExpand(!isExpanded)}
      />
    );
  }

  return (
    <Card>
      <PowerMeterCard
        controller={controller}
        onPress={() => setExpand(!isExpanded)}
        nested
      />

      <Card
        title={`${(controller.data.currentDayPowerGeneration / 1000).toFixed(
          1
        )} kWh`}
        subtitle="Produkcja dzisiaj"
        nested
      ></Card>

      <Card
        title={`${(controller.data.currentMonthPowerGeneration / 1000).toFixed(
          1
        )} kWh`}
        subtitle="Produkcja w tym miesciącu"
        nested
      ></Card>

      <View style={styles.chipsRow}>
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

const styles = StyleSheet.create({
  informationRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  labelText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  valueText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  chipsRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
});
