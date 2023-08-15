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
        onLongPress={() => setExpand(!isExpanded)}
      />
    );
  }

  return (
    <Card onLongPress={() => setExpand(!isExpanded)}>
      <PowerMeterCard
        controller={controller}
        onLongPress={() => setExpand(!isExpanded)}
        nested
      />

      <View style={styles.informationRow}>
        <Text style={styles.labelText}>Dzisiaj</Text>
        <Text style={styles.valueText}>
          {(controller.data.currentDayPowerGeneration / 1000).toFixed(1)} kWh
        </Text>
      </View>

      <View style={styles.informationRow}>
        <Text style={styles.labelText}>W tym miesiącu</Text>
        <Text style={styles.valueText}>
          {(controller.data.currentMonthPowerGeneration / 1000).toFixed(1)} kWh
        </Text>
      </View>

      <View style={styles.chipsRow}>
        <Chip icon={<Icon name="chart-pie" small />}>Więcej informacji</Chip>
        <Chip icon={<Icon name="cog" small />}>Ustawienia</Chip>
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
    gap: 10,
  },
});
