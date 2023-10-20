import { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.logo}>
        <Image style={styles.img} source={require("../assets/Vector.png")} />
      </View>
      <View style={styles.menu}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Image
            source={require("../assets/Hamburger-Button.png")}
            style={styles.logoo}
          />
        </Pressable>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <LinearGradient
                colors={["rgb(67, 61, 96)", "rgb(33, 30, 46)"]}
                style={styles.modall}
              >
                <Text style={styles.modalText}>Գլխավոր</Text>
                <Text style={styles.modalText}>Մեր մասին</Text>
                <Text style={styles.modalText}>Դասընթացներ</Text>
                <Text style={styles.modalText}>Կապ Մեզ հետ</Text>
                <LinearGradient
                  colors={["#8176AF", "#C0B7E8"]}
                  style={styles.buttonClose}
                >
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </LinearGradient>
              </LinearGradient>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    zIndex: 2,
  },

  logo: {
    width: "45%",
    height: "100%",
    flex: 1,
    flexDirection: "row",
    columnGap: 10,
    alignItems: "center",
    marginLeft: 30,
  },

  menu: {
    width: "55%",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  logoo: {
    width: 40,
    height: 40,
  },

  centeredView: {
    alignItems: "center",
    marginTop: 52,
    borderWidth: 2,
  },
  modalView: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modall: {
    width: "80%",
    height: "90%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "80%",
    alignItems: "center",
  },
  textStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
