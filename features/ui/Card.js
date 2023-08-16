import { View, Text, TouchableNativeFeedback } from "react-native";
import { Heading } from "./Heading";

export const Card = ({
  children,
  nested = false,
  style = {},
  onPress,
  onLongPress,
  title,
  subtitle,
  icon,
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress} onLongPress={onLongPress}>
      <View
        style={{
          width: "100%",
          minHeight: 85,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 20,
          backgroundColor: !nested ? "#135B67" : "#0E3B43",
          borderRadius: !nested ? 30 : 15,
          ...style,
        }}
      >
        {(title || icon) && (
          <View
            style={{
              height: 45,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            {icon}

            <View>
              <Heading>{title}</Heading>

              {subtitle && (
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#bcbcbc",
                  }}
                >
                  {subtitle}
                </Text>
              )}
            </View>
          </View>
        )}

        {children}
      </View>
    </TouchableNativeFeedback>
  );
};
