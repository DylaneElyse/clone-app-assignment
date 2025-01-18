import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%" }}>
        <Image source={require("./assets/images/girl-profile-unsplash.jpg")} style={{ width: 50, height: 50, borderRadius: 50 }} />
        <Text style={styles.titleText}>Your Library</Text>
        <Image source={require("./assets/images/search.png")} style={{ width: 30, height: 30 }} />
        <Image source={require("./assets/images/plus.png")} style={{ width: 30, height: 30 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 20,
    backgroundColor: "black",
    alignItems: "center",
  },

  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    padding: 20,
  },
});
