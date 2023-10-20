import { StyleSheet, View, Image, Text, TextInput, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import Information from "./Information";
import Footer from "./Footer";
export default function Register() {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.register}>
      <View style={styles.reg_div}>
        <LinearGradient
          colors={["rgba(64, 58, 95, 1), rgba(33, 30, 46, 1)", "transparent"]}
          style={styles.reg_div}
        >
          <View style={styles.div_text}>
            <Text style={styles.h1}>Գրանցվել</Text>
            <Image
              style={styles.strelka}
              source={require("../assets/Vector10.png")}
            />
            <Text style={styles.text}>Դասընթացին</Text>
          </View>

          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="First Name"
              color="white"
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Last Name"
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Email"
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Phone NUmber"
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Subject"
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input1}
              onChangeText={onChangeText}
              value={text}
              placeholder="Tell Us Something..."
              placeholderTextColor="white"
            />
          </View>
          <LinearGradient
            colors={["#8176AF", "#C0B7E8"]}
            style={styles.but_div}
          >
            <Button
              style={styles.btn}
              title={"BUILD YOUR WORLD"}
              color="#111"
            />
          </LinearGradient>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  register: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },

  reg_div: {
    width: "90%",
    alignItems: "center",
    borderRadius: 40,
  },

  div_text: {
    width: "100%",
    alignItems: "center",
    gap: 20,
  },

  h1: {
    fontSize: 28,
    lineHeight: 29.26,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    marginTop: 20,
  },

  strelka: {
    alignItems: "center",
  },

  text: {
    fontSize: 28,
    lineHeight: 29.26,
    color: "rgba(255,255,255,1)",
    textAlign: "center",
  },

  inputs: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 40,
  },

  input: {
    width: 300,
    height: 53,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: "rgba(255, 255, 255, 1)",
    color: "rgba(255, 255, 255, 1)",
    padding: 20,
  },
  input1: {
    width: 300,
    height: 219,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: "rgba(255, 255, 255, 1)",
    color: "rgba(255, 255, 255, 1)",
    padding: 20,
  },
  but_div: {
    width: 300,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 100,
    marginTop: 50,
  },
});
