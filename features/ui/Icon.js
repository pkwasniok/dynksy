import { View, TouchableNativeFeedback } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export const Icon = ({ name, onPress, onLongPress, small }) => {
  return (
    <TouchableNativeFeedback onPress={onPress} onLongPress={onLongPress}>
      <View
        style={{
          width: !small ? 28 : 20,
          aspectRatio: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome5
          name={name}
          size={!small ? 22 : 16}
          color={!small ? "#ffffff" : "#efefef"}
        />
      </View>
    </TouchableNativeFeedback>
  );
};
