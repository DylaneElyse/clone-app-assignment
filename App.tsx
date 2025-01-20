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

/* Playlist: Liked Songs */
      <View style={{marginTop: 10, marginLeft: -180}}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 7 }}>
          <Image
            source={require("./assets/images/playlist_cover_liked.png")}
            style={{ width: 55, height: 55, borderRadius: 5 }}
          />
          <View>
          <Text style={{ color: "white", fontSize: 15, marginLeft: 10 }}>Liked Songs</Text>
          <Text style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>Playlist - 1289 songs </Text>
          </View>
        </View>
      </View>

/* Playlist: New Episodes */
      <View style={{marginTop: 10, marginLeft: -180}}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 7 }}>
          <Image
            source={require("./assets/images/playlist_cover_new_episodes.png")}
            style={{ width: 55, height: 55, borderRadius: 5 }}
          />
          <View>
          <Text style={{ color: "white", fontSize: 15, marginLeft: 10 }}>New Episodes</Text>
          <Text style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>Updated today</Text>
          </View>
        </View>
      </View>

/* Playlist: Your Episodes */
      <View style={{marginTop: 10, marginLeft: -180}}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 7 }}>
          <Image
            source={require("./assets/images/playlist_cover_your_episodes.png")}
            style={{ width: 55, height: 55, borderRadius: 5 }}
          />
          <View>
          <Text style={{ color: "white", fontSize: 15, marginLeft: 10 }}>Your Episodes</Text>
          <Text style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>Saved & downloaded episodes</Text>
          </View>
        </View>
      </View>

/* Playlist: Deep Focus */
 <View style={{marginTop: 10, marginLeft: -180}}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 7 }}>
          <Image
            source={require("./assets/images/playlist_cover_4.jpg")}
            style={{ width: 55, height: 55, borderRadius: 5 }}
          />
          <View>
          <Text style={{ color: "white", fontSize: 15, marginLeft: 10 }}>Deep Focus</Text>
          <Text style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>Playlist - Spotify</Text>
          </View>
        </View>
      </View>

/* Playlist: Discover Weekly*/
 <View style={{marginTop: 10, marginLeft: -180}}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 7 }}>
          <Image
            source={require("./assets/images/playlist_cover_5.png")}
            style={{ width: 55, height: 55, borderRadius: 5 }}
          />
          <View>
          <Text style={{ color: "white", fontSize: 15, marginLeft: 10 }}>Discover Weekly</Text>
          <Text style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>Playlist - Made for Louise Dinsmore</Text>
          </View>
        </View>
      </View>

/* Playlist: Nothing much happens: bedtime stories t... */
 <View style={{marginTop: 10, marginLeft: -180}}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 7 }}>
          <Image
            source={require("./assets/images/playlist_cover_6.jpeg")}
            style={{ width: 55, height: 55, borderRadius: 5 }}
          />
          <View>
          <Text style={{ color: "white", fontSize: 15, marginLeft: 10 }}>Nothing much happens: bedtime stories t...</Text>
          <Text style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>Podcast - iBedtimePodcast </Text>
          </View>
        </View>
      </View>

/* Playlist: EPIC: The Musical */
 <View style={{marginTop: 10, marginLeft: -180}}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 7 }}>
          <Image
            source={require("./assets/images/playlist_cover_7.png")}
            style={{ width: 55, height: 55, borderRadius: 5 }}
          />
          <View>
          <Text style={{ color: "white", fontSize: 15, marginLeft: 10 }}>EPIC: The Musical</Text>
          <Text style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>Playlist - Random </Text>
          </View>
        </View>
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
    marginTop: -70,
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
