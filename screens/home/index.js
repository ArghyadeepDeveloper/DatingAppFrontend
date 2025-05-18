import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button"; // Adjust path if needed

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Dating App!</Text>
      <Text style={styles.subtitle}>
        Start browsing profiles or chat with someone
      </Text>

      {/* Primary Button to navigate to the Profile screen */}
      <Button
        type="primary"
        onPress={() => navigation.navigate("Profile")} // Navigate to Profile screen
      >
        Go to Profile
      </Button>

      {/* Secondary Button to log out or take another action */}
      <Button
        type="secondary"
        onPress={() => alert("Logging out...")} // Replace with your logout functionality
      >
        Log Out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FF5864",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#555",
    marginBottom: 30,
  },
});

export default HomeScreen;
