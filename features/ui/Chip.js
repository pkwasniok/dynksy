import { TouchableNativeFeedback, View, Text, StyleSheet } from "react-native";

export const Chip = ({ children, icon, onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.root}>
        {icon}

        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#0E3B43",
    borderRadius: 100,
  },
  text: {
    color: "#efefef",
    fontSize: 12,
    fontWeight: "600",
  },
});
