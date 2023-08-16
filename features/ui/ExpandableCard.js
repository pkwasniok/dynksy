import { useState } from "react";

import { View } from "react-native";
import { Card } from "./Card";
import { Icon } from "./Icon";

export const ExpandableCard = ({ children, title, subtitle, icon }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <View style={{ position: "relative" }}>
      <Card
        title={title}
        subtitle={subtitle}
        icon={icon}
        onPress={() => setOpen(!isOpen)}
      >
        {isOpen && <>{children}</>}
      </Card>

      <View
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          transform: [{ translateY: 10 }],
        }}
      >
        {isOpen == false && (
          <Icon name="chevron-down" onPress={() => setOpen(!isOpen)} />
        )}
        {isOpen == true && (
          <Icon name="chevron-up" onPress={() => setOpen(!isOpen)} />
        )}
      </View>
    </View>
  );
};
