import { StyleSheet, View, Image, Text, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

export default function Carusel() {
  return (
    <View style={styles.carusel}>
      <View style={styles.backgroundd}>
        <LinearGradient
          colors={["rgba(67, 61, 96, 1), rgba(33, 30, 46, 1)", "transparent"]}
          style={styles.background}
        />

        <View style={styles.circle}>
          <Image source={require("../assets/cricle.png")} />
        </View>

        <View style={styles.circle1}>
          <Image style={styles.img} source={require("../assets/icon8.png")} />
          <AntDesign
            style={styles.iconn}
            name="right"
            size={24}
            color="black"
          />
        </View>
        <View style={styles.circle2}>
          <Image style={styles.img} source={require("../assets/icon8.png")} />
          <AntDesign style={styles.iconn} name="left" size={24} color="black" />
        </View>

        <View style={styles.texts}>
          <Text style={styles.h1}>SIMULATION</Text>
          <Image
            style={styles.vector}
            source={require("../assets/Vector10.png")}
          />
          <Text style={styles.text}>
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </Text>
          <LinearGradient colors={["#8176AF", "#C0B7E8"]} style={styles.grad}>
            <Button
              style={styles.btn}
              title={"BUILD YOUR WORLD"}
              color="#111"
            />
          </LinearGradient>
        </View>
      </View>
      <View style={styles.opacit}>
        <Text style={styles.back_text1}>TECHNOLOGIES & HARDWARE</Text>
        <Text style={styles.back_text2}>USED BY HYDRA VR.</Text>
        <Image
          style={styles.background1}
          source={require("../assets/background.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carusel: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -250,
  },

  backgroundd: {
    alignItems: "center",
    zIndex: 10,
  },

  background: {
    position: "absolute",
    width: 320,
    height: 511,
    borderRadius: 40,
  },

  circle: {
    width: 219,
    height: 219,
    backgroundColor: "rgba(14, 14, 14, 0.32)",
    borderRadius: 1000,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  texts: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  h1: {
    fontSize: 24,
    lineHeight: 29.26,
    color: "rgba(255, 255, 255, 1)",
    marginTop: -70,
  },

  vector: {
    marginTop: 15,
  },

  text: {
    width: 250,
    fontSize: 12,
    lineHeight: 14.63,
    color: "rgba(255, 255, 255, 1)",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  grad: {
    width: 250,
    height: 48,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  btn: {
    fontSize: 14,
    lineHeight: 17,
  },

  circle1: {
    width: 62,
    height: 62,
    borderRadius: 1000,
    backgroundColor: "rgba(14, 14, 14, 0.32)",
    zIndex: 1,
    left: 160,
    top: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  circle2: {
    width: 62,
    height: 62,
    borderRadius: 1000,
    backgroundColor: "rgba(14, 14, 14, 0.32)",
    zIndex: 3,
    right: 160,
    marginTop: -45,
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 44,
    height: 44,
    marginTop: -8,
  },

  iconn: {
    zIndex: 1,
    marginTop: -33,
    alignItems: "center",
    justifyContent: "center",
  },

  opacit: {
    width: 348,
    marginTop: 90,
  },

  background1: {
    flex: 1,
    borderRadius: 60,
  },

  back_text1: {
    fontSize: 16,
    lineHeight: 19,
    color: "white",
    alignItems: "center",
    textAlign: "center",
    top: 90,
    zIndex: 2,
  },
  back_text2: {
    fontSize: 24,
    lineHeight: 29,
    color: "white",
    alignItems: "center",
    textAlign: "center",
    top: 130,
    zIndex: 2,
  },
});
