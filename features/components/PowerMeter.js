import { useState } from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export const PowerMeter = ({ controller, maxValue, minValue }) => {
  const [isExpanded, setExpand] = useState(true);

  return (
    <TouchableNativeFeedback onLongPress={() => setExpand(!isExpanded)}>
      <View
        style={{
          padding: isExpanded ? 20 : 0,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          backgroundColor: "#135B67",
          borderRadius: 30,
        }}
      >
        <View
          style={{
            position: "relative",
            borderRadius: isExpanded ? 15 : 30,
            overflow: "hidden",
            backgroundColor: isExpanded ? "#0E3B43" : "#135B67",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: `${Math.round(
                ((controller.data.currentPower - minValue) /
                  (maxValue - minValue)) *
                  100
              )}%`,
              backgroundColor: "#1DD3B0",
            }}
          ></View>

          <View
            style={{
              padding: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 15,
            }}
          >
            <TouchableNativeFeedback>
              <View
                style={{
                  width: 28,
                  aspectRatio: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome5 name="bolt" size={22} color="#ffffff" />
              </View>
            </TouchableNativeFeedback>

            <View style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                Produkcja energii
              </Text>

              {controller.status == "online" && (
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#ffffff",
                  }}
                >
                  {controller.data.currentPower} W
                </Text>
              )}

              {controller.status == "idle" && (
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#ffffff",
                  }}
                >
                  Łączenie
                </Text>
              )}

              {controller.status == "offline" && (
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#ffffff",
                  }}
                >
                  Offline
                </Text>
              )}

              {controller.status == "error" && (
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#ff0000",
                  }}
                >
                  Wystąpił błąd
                </Text>
              )}
            </View>
          </View>
        </View>

        {isExpanded && (
          <>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: 600 }}>
                Produkcja dzisiaj
              </Text>

              <Text style={{ color: "#ffffff", fontSize: 18, fontWeight: 600 }}>
                {(controller.data.currentDayPowerGeneration / 1000).toFixed(1)}{" "}
                kWh
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: 600 }}>
                Produkcja w tym miesiącu
              </Text>

              <Text style={{ color: "#ffffff", fontSize: 18, fontWeight: 600 }}>
                {(controller.data.currentMonthPowerGeneration / 1000).toFixed(
                  1
                )}{" "}
                kWh
              </Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <TouchableNativeFeedback onPress={() => controller.sync()}>
                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    backgroundColor: "#0E3B43",
                    borderRadius: 100,
                  }}
                >
                  <FontAwesome5 name="sync-alt" color="#ebebeb" size={16} />
                  <Text style={{ color: "#ebebeb", fontWeight: 600 }}>
                    Sync
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </>
        )}
      </View>
    </TouchableNativeFeedback>
  );
};
