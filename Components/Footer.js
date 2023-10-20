import { StyleSheet, View, Image, Text } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Image style={styles.img} source={require("../assets/Vector10.png")} />
      <Text style={styles.text}>
        2023 © HYDRA LANDING PAGE {"\n"} BY ZINE. E. FALOUTI{"\n"} ALL RIGHTS
        RESERVED
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: 120,
  },
  text: {
    textAlign: "center",
    color: "rgba(255,255,255,1)",
  },

  img: {
    marginTop: 40,
    width: "70%",
  },
});
