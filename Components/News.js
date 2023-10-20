import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function News() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.News}>
      <View style={styles.view_img}>
        <Image source={require("../assets/pauk.png")} />

        <Text style={styles.img_text}>
          HayTag ծրագրավորման ուսուցման ընկերությունը արդեն 3 տարի է
          կազմակերպում և իրականացնում է ծրագրավորման դասընթացներ, նպատակ
          ունենալով աշխատաշուկային հանձնել որակյալ մասնագետներ...
        </Text>
      </View>

      <View style={styles.but_view}>
        <LinearGradient colors={["#8176AF", "#C0B7E8"]} style={styles.grad}>
          <Pressable
            style={[styles.btn, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.btn_text} onPress={() => setModalVisible(true)}>
              Իմանալ ավելին
            </Text>
          </Pressable>
        </LinearGradient>
        <Text style={styles.text1}>! Ինչու Սովորել !</Text>
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
                <ScrollView>
                  <Text style={styles.modalText}>
                    HayTag ծրագրավորման ուսուցման ընկերությունը արդեն 3 տարի է
                    կազմակերպում և իրականացնում է ծրագրավորման դասընթացներ,
                    նպատակ ունենալով աշխատաշուկային հանձնել որակյալ մասնագետներ:
                    Հետևելով համաշխարհային IT թրենդներին՝ թարմացվում և
                    կատարելագործվում են դասավանդման ծրագրերը: Հատուկ մշակված
                    ծրագրի, տնային առաջադրանքների և անվճար փորձաշրջանի
                    արդյունքում մեր ուսանողները գրանցում են մեծ հաջողություններ:
                    Հմուտ մասնագետների աշխատանքի արդյունքում մենք վայելում ենք
                    մեր ուսանողների սերն ու վստահությունը: Համագործակցելով IT
                    ընկերությունների հետ՝ մենք Երաշխավորում ենք լավագույն
                    ուսանողների փորձաշրջանն ու աշխատանքը: Դու էլ միացի՛ր մեզ,
                    դարձի՛ր մրցունակ ծրագրավորման ոլորտում և երաշխավորի՛ր
                    աշխատանքդ HayTag-ի օգնությամբ:
                  </Text>
                </ScrollView>
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
    </View>
  );
}

const styles = StyleSheet.create({
  News: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  view_img: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },

  img_text: {
    width: 352,
    fontWeight: 400,
    fontSize: 16,
    marginTop: 40,
    color: "rgba(255, 255, 255, 1)",
    letterSpacing: 1,
    lineHeight: 28,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  but_view: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  grad: {
    width: 276,
    height: 56,
    borderRadius: 40,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    fontSize: 14,
    width: 276,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },

  text1: {
    fontSize: 26,
    lineHeight: 31,
    color: "rgba(255, 255, 255, 1)",
    marginTop: 50,
  },

  text2: {
    fontSize: 26,
    lineHeight: 31,
    color: "rgba(255, 255, 255, 1)",
    marginTop: 50,
  },

  centeredView: {
    alignItems: "center",
    marginTop: 52,
  },
  modalView: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    alignItems: "center",
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
    height: "95%",
    borderRadius: 20,
    alignItems: "center",
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
    height: 50,
    elevation: 2,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    paddingTop: 20,
  },

  btn_text: {
    fontSize: 18,
  },
});
