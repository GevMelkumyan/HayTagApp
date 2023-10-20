import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function Location() {
  return (
    <View style={styles.Location}>
      <View style={styles.loc}>
        <LinearGradient
          colors={["rgba(58, 52, 86, 0.95)", "rgba(33, 30, 46, 1)"]}
          style={styles.background}
        />
        <AntDesign name="leftcircleo" size={30} color="white" />
        <Entypo name="location-pin" size={74} color="rgba(192, 183, 232, 1)" />
        <Text style={styles.text} color="white">
          Union St, Seattle, WA 98101, {"\n"} United States
        </Text>
        <AntDesign name="rightcircleo" size={30} color="white" />
      </View>

      <View style={styles.div_text}>
        <Text style={styles.text1}>Մեր մասին</Text>
        <Text style={styles.text2}>Hay Tag</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Location: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: -300,
  },

  loc: {
    width: 347,
    height: 109,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    borderRadius: 90,
  },

  text: {
    color: "white",
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  div_text: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  text1: {
    height: 32,
    fontSize: 26,
    color: "rgba(255, 255, 255, 1)",
    marginTop: 50,
  },

  text2: {
    height: 32,
    fontSize: 26,
    color: "rgba(255, 255, 255, 1)",
    marginTop: 20,
  },
});
