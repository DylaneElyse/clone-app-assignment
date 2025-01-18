import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ ...styles.flexRow, justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("./assets/images/girl-profile-unsplash.jpg")}
            style={{ width: 40, height: 40, borderRadius: 50 }}
          />
          <Text style={styles.titleText}>Your Library</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("./assets/images/search.png")}
            style={{ width: 30, height: 30 }}
          />
          <Image
            source={require("./assets/images/plus.png")}
            style={{ width: 30, height: 30, marginLeft: 10 }}
          />
        </View>
      </View>
      <View style={{ ...styles.flexRow, marginBottom: 20, marginRight: 20 }}>
        <Text style={styles.bubble}>Playlists</Text>
        <Text style={styles.bubble}>Artists</Text>
        <Text style={styles.bubble}>Albums</Text>
        <Text style={styles.bubble}>Artists</Text>
        <Text style={styles.bubble}>Downloaded</Text>
      </View>
      <View style={{ ...styles.flexRow, justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("./assets/images/sort-arrows.png")}
            style={{ width: 15, height: 15 }}
          />
          <Text style={{ color: "white", fontSize: 13, marginLeft: 5 }}>
            Recents
          </Text>
        </View>
        <Image
          source={require("./assets/images/white-squares.png")}
          style={{ width: 20, height: 20 }}
        />
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

  flexRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
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
