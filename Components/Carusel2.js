import { StyleSheet, View, Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Carusel2() {
  return (
    <View style={styles.carusel2}>
      <View style={styles.div1}>
        <Image style={styles.cir1} source={require("../assets/icon8.png")} />
        <AntDesign name="left" size={24} color="black" style={styles.left} />
        <Image source={require("../assets/vive.png")} style={styles.vive} />
        <Image style={styles.cir2} source={require("../assets/icon8.png")} />
        <AntDesign name="right" size={24} color="black" style={styles.right} />
      </View>

      <View style={styles.text}>
        <Text style={styles.text1}>Ինչպես ենք մենք սովորում</Text>
        {/* <Text style={styles.text2}>WITH HYDRA VR?</Text> */}
      </View>

      <View style={styles.cir}>
        <Image style={styles.cir_img} source={require("../assets/icon8.png")} />
        <Text style={styles.text_cir}>01</Text>
      </View>

      <View style={styles.div3}>
        <Image style={styles.cir3} source={require("../assets/icon8.png")} />
        <AntDesign name="left" size={24} color="black" style={styles.left1} />
        <Text style={styles.text3}>Programming {"\n"} & Design</Text>
        <Image style={styles.cir4} source={require("../assets/icon8.png")} />
        <AntDesign name="right" size={24} color="black" style={styles.right1} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carusel2: {
    width: "100%",
    alignItems: "center",
    marginTop: -180,
  },

  div1: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  vive: {
    height: 80,
  },

  cir1: {
    left: 15,
  },

  left: {
    right: 20,
    top: 1,
  },

  right: {
    right: 25,
    top: 1,
  },

  cir2: {
    left: 7,
  },

  text1: {
    fontSize: 26,
    lineHeight: 31.69,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    marginTop: 30,
  },

  text2: {
    fontSize: 26,
    lineHeight: 31.69,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    marginTop: 30,
  },

  cir: {
    width: 198,
    height: 198,
    borderRadius: 100,
    backgroundColor: "rgba(13, 13, 13, 0.32)",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 60,
  },

  cir_img: {
    width: 159,
    height: 159,
    zIndex: 1,
    marginTop: -40,
  },

  text_cir: {
    zIndex: 2,
    marginTop: -120,
    fontSize: 64,
    lineHeight: 78,
  },

  text3: {
    width: 187,
    fontSize: 24,
    lineHeight: 30,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
  },

  div3: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "auto",
    marginTop: 40,
  },

  cir3: {
    right: 20,
  },

  cir4: {
    left: 42,
  },

  left1: {
    right: 55,
  },

  right1: {
    left: 10,
  },
});
