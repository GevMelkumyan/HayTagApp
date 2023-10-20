import { Image, StyleSheet, View, Text, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";

export default function Page1() {
  return (
    <View style={styles.Page1}>
      <View style={styles.row_one}>
        <Image source={require("../assets/Vector1.png")} style={styles.vec1} />
        <Image source={require("../assets/Vector2.png")} style={styles.vec2} />
        <Image source={require("../assets/Vector3.png")} style={styles.vec3} />
      </View>

      <View style={styles.zindex}>
        <Image source={require("../assets/vr.png")} style={styles.vr} />
        <Text style={styles.text1}>Սովորե'ք դարի ամենապահանջված</Text>

        <Text style={styles.text2}>
          մասնագիտությունը՝ ծրագրավորում, մեզ հետ
        </Text>

        <LinearGradient colors={["#8176AF", "#C0B7E8"]} style={styles.grad}>
          <Button style={styles.btn} title={"Իմանալ ավելին"} color="#111" />
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Page1: {
    width: "100%",
  },

  row_one: {
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },

  vec2: {
    marginTop: -650,
  },

  vec3: {
    marginTop: -320,
  },

  zindex: {
    width: "100%",
    height: "14%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 260,
  },

  vr: {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 240,
  },

  text1: {
    marginTop: 50,
    fontSize: 28,
    color: "white",
    zIndex: 2,
    textAlign: "center",
  },
  text2: {
    fontSize: 28,
    color: "white",
    textAlign: "center",
  },

  btn: {
    width: 292,
    fontSize: 14,
  },

  grad: {
    width: 292,
    height: 52,
    borderRadius: 40,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
