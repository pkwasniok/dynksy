import { Text } from "react-native";

export const Heading = ({ children }) => {
  return (
    <Text style={{ fontSize: 18, fontWeight: 600, color: "#ffffff" }}>
      {children}
    </Text>
  );
};
