import { View } from "react-native";
import { Switch, PowerMeter } from "./features/components";

import { FontAwesome5 } from "@expo/vector-icons";

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
        <PowerMeter controller={foxessCloud} minValue={0} maxValue={8000} />

        <Switch
          name="Przekaźnik 1"
          controller={relay1}
          leftIcon={(state) => (
            <FontAwesome5 name="power-off" size={22} color="#ffffff" />
          )}
        />

        <Switch
          name="Przekaźnik 2"
          controller={relay2}
          leftIcon={() => (
            <FontAwesome5 name="power-off" size={22} color="#ffffff" />
          )}
        />

        <Switch
          name="Dioda LED"
          controller={relay3}
          leftIcon={() => (
            <FontAwesome5 name="lightbulb" size={22} color="#ffffff" />
          )}
        />
      </View>
    </View>
  );
};
