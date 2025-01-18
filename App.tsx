import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          marginBottom: 10,
        }}
      >
        <Image
          source={require("./assets/images/girl-profile-unsplash.jpg")}
          style={{ width: 40, height: 40, borderRadius: 50 }}
        />
        <Text style={styles.titleText}>Your Library</Text>
        <Image
          source={require("./assets/images/search.png")}
          style={{ width: 30, height: 30 }}
        />
        <Image
          source={require("./assets/images/plus.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={styles.bubble}>Playlists</Text>
        <Text style={styles.bubble}>Artists</Text>
        <Text style={styles.bubble}>Albums</Text>
        <Text style={styles.bubble}>Artists</Text>
        <Text style={styles.bubble}>Downloaded</Text>
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

  bubble: {
    fontSize: 13,
    fontWeight: "light",
    color: "white",
    backgroundColor: "#3A3A3A",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
