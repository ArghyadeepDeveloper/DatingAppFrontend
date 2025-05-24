import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { mildPink } from "../../constants/colors";
import { fonts } from "../../constants/fonts";

export default function MatchCard({ user, onViewProfile, onOpenChat }) {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={user.image}
        style={styles.image}
        imageStyle={{ borderRadius: 16 }}
      >
        <View style={styles.overlay}>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>
              {user.name}, {user.age}
            </Text>
            <Text style={styles.city}>{user.city}</Text>
          </View>
          {/* <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => onViewProfile(user)}
              style={[styles.button, styles.viewProfileButton]}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onOpenChat(user)}
              style={[styles.button, styles.openChatButton]}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Open Chat</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: "hidden",
    aspectRatio: 3 / 4, // taller card, width controls size in parent flexbox
    backgroundColor: "#eee",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end", // align overlay content to bottom
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.35)", // subtle dark overlay for readability
    padding: 12,
  },
  infoContainer: {
    marginBottom: 0,
  },
  name: {
    fontSize: 18,
    color: "#fff",
    fontFamily: fonts.bold,
  },
  city: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: mildPink,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  viewProfileButton: {
    backgroundColor: "#ff4da6", // bright pink
  },
  openChatButton: {
    backgroundColor: "#ff1a75", // deeper pink
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
