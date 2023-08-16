import { View } from "react-native";
import { Icon, Card, ExpandableCard } from "./features/ui";
import { PowerMeterWidget } from "./features/power-meter/PowerMeterWidget";
import { PowerSwitchCard } from "./features/power-switch/PowerSwitchCard";
import { DriverLicenseStatusWidget } from "./features/driver-license-status";

import { useRelay } from "./tasmota";
import { useFoxessCloud } from "./foxess";
import { useInfocar } from "./infocar";

export const HomeView = () => {
  const relay1 = useRelay("192.168.1.132", "POWER1");
  const foxessCloud = useFoxessCloud("kwasniok", "Annabelle14!");
  const infocar = useInfocar("Patryk", "Kwaśniok", "12330 46060 91783 25122");

  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <View style={{ padding: 20, display: "grid", gap: 20 }}>
        <PowerMeterWidget controller={foxessCloud} />

        <ExpandableCard title="Łazienka" icon={<Icon name="bath" />}>
          <PowerSwitchCard
            name="Bojler"
            controller={relay1}
            leftIcon={() => <Icon name="thermometer-half" />}
            nested
          />
        </ExpandableCard>

        <DriverLicenseStatusWidget controller={infocar} />
      </View>
    </View>
  );
};
