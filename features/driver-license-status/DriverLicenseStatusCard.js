import { View, Text } from "react-native";
import { Card, Heading, Icon } from "../ui";

export const DriverLicenseStatusCard = ({
  controller,
  nested,
  onPress,
  onLongPress,
}) => {
  return (
    <Card
      title="Status prawa jazdy"
      subtitle={
        controller.status == "idle" ? "Łączenie" : controller.data.status
      }
      icon={<Icon name="id-card" />}
      onPress={onPress}
      onLongPress={onLongPress}
      nested={nested}
    />
  );
};
