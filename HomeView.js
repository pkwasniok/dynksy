import { View } from "react-native";
import { Icon } from "./features/ui";
import { PowerMeterWidget } from "./features/power-meter/PowerMeterWidget";
import { PowerSwitchCard } from "./features/power-switch/PowerSwitchCard";

import { useRelay } from "./tasmota";
import { useFoxessCloud } from "./foxess";

export const HomeView = () => {
  const relay1 = useRelay("192.168.1.132", "POWER1");
  const relay2 = useRelay("192.168.1.132", "POWER2");
  const relay3 = useRelay("192.168.1.132", "POWER3");
  const foxessCloud = useFoxessCloud("kwasniok", "Annabelle14!");

  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <View style={{ padding: 20, display: "grid", gap: 20 }}>
        <PowerMeterWidget controller={foxessCloud} />

        <PowerSwitchCard
          name="Przekaźnik 1"
          controller={relay1}
          leftIcon={() => <Icon name="power-off" />}
        />

        <PowerSwitchCard
          name="Przekaźnik 2"
          controller={relay2}
          leftIcon={() => <Icon name="power-off" />}
        />

        <PowerSwitchCard
          name="Dioda LED"
          controller={relay3}
          leftIcon={() => <Icon name="lightbulb" />}
        />
      </View>
    </View>
  );
};
