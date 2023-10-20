import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ScrollView, Modal } from "react-native";
import Header from "./Components/Header";
import Page1 from "./Components/Page1";
import Location from "./Components/Location";
import News from "./Components/News";
import Carusel from "./Components/Carusel";
import Carusel2 from "./Components/Carusel2";
import Register from "./Components/Register";
import Information from "./Components/Information";
import Footer from "./Components/Footer";
import Avel from "./Components/Avel";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Page1 />
        <Location />
        <News />
        <Carusel />
        <Carusel2 />
        <Register />
        <Information />
        <Footer />
        <Avel />
        <StatusBar />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(52, 48, 69, 1)",
    height: "100%",
  },
});
