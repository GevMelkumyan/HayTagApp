import { StyleSheet, View, Image, Text, Button } from "react-native";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Information() {
  return (
    <View style={styles.information}>
      <View style={styles.vectors}>
        <Image
          style={styles.vector1}
          source={require("../assets/Vector19.png")}
        />
        <Image
          style={styles.vector1}
          source={require("../assets/Vector18.png")}
        />
        <Image style={styles.logo} source={require("../assets/Vector.png")} />
      </View>
      <Text style={styles.text}>SOCIALIZE WITH HYDRA</Text>

      <View style={styles.soc}>
        <FontAwesome5
          name="facebook"
          size={32}
          color="rgba(192, 183, 232, 1)"
        />
        <Entypo
          name="twitter-with-circle"
          size={32}
          color="rgba(192, 183, 232, 1)"
        />
        <Entypo
          name="linkedin-with-circle"
          size={32}
          color="rgba(192, 183, 232, 1)"
        />
        <Entypo
          name="youtube-with-circle"
          size={32}
          color="rgba(192, 183, 232, 1)"
        />
        <Entypo
          name="instagram-with-circle"
          size={32}
          color="rgba(192, 183, 232, 1)"
        />
        <Entypo
          name="pinterest-with-circle"
          size={32}
          color="rgba(192, 183, 232, 1)"
        />
      </View>
      <LinearGradient colors={["#8176AF", "#C0B7E8"]} style={styles.but_div}>
        <Button style={styles.btn} title={"BUILD YOUR WORLD"} color="#111" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  information: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  vectors: {
    width: "100%",
    height: 400,
    alignItems: "center",
  },

  logo: {
    width: 185,
    height: 187,
    zIndex: 4,
    marginTop: -250,
  },

  text: {
    fontSize: 16,
    lineHeight: 20,
    color: "rgba(255,255,255,1)",
  },

  soc: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },

  but_div: {
    width: 300,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    marginTop: 10,
  },
});
