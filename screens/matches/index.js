import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import MatchCard from "./MatchCard";
import personImageOne from "../../assets/images/person-image-one.jpeg";
import personImageTwo from "../../assets/images/person-image-two.jpg";
import personImageThree from "../../assets/images/person-image-three.jpg";
import { mildPink } from "../../constants/colors";

// Add attributes to mock data for filtering
const mockProfiles = [
  {
    id: "1",
    name: "Alice",
    age: 26,
    city: "New York",
    image: personImageOne,
    mutual: true,
    likedByMe: true,
    likedMe: true,
  },
  {
    id: "2",
    name: "Bob",
    age: 30,
    city: "San Francisco",
    image: personImageTwo,
    mutual: false,
    likedByMe: false,
    likedMe: true,
  },
  {
    id: "3",
    name: "Carol",
    age: 24,
    city: "Los Angeles",
    image: personImageThree,
    mutual: false,
    likedByMe: true,
    likedMe: false,
  },
  {
    id: "4",
    name: "David",
    age: 29,
    city: "Chicago",
    image: personImageOne,
    mutual: true,
    likedByMe: false,
    likedMe: true,
  },
  {
    id: "5",
    name: "Eve",
    age: 27,
    city: "Miami",
    image: personImageTwo,
    mutual: false,
    likedByMe: true,
    likedMe: false,
  },
  {
    id: "6",
    name: "Frank",
    age: 31,
    city: "Seattle",
    image: personImageThree,
    mutual: true,
    likedByMe: true,
    likedMe: true,
  },
  {
    id: "7",
    name: "Eve",
    age: 27,
    city: "Miami",
    image: personImageTwo,
    mutual: false,
    likedByMe: true,
    likedMe: false,
  },
  {
    id: "8",
    name: "Eve",
    age: 27,
    city: "Miami",
    image: personImageTwo,
    mutual: false,
    likedByMe: true,
    likedMe: false,
  },
  {
    id: "9",
    name: "Eve",
    age: 27,
    city: "Miami",
    image: personImageTwo,
    mutual: false,
    likedByMe: true,
    likedMe: false,
  },
  {
    id: "10",
    name: "Eve",
    age: 27,
    city: "Miami",
    image: personImageTwo,
    mutual: false,
    likedByMe: true,
    likedMe: true,
  },
  {
    id: "11",
    name: "Eve",
    age: 27,
    city: "Miami",
    image: personImageTwo,
    mutual: false,
    likedByMe: true,
    likedMe: false,
  },
  {
    id: "12",
    name: "Eve",
    age: 27,
    city: "Miami",
    image: personImageTwo,
    mutual: true,
    likedByMe: true,
    likedMe: true,
  },
];

// Font styles for Nunito (make sure Nunito fonts are linked in your project)
const fonts = {
  regular: "Nunito-Regular",
  medium: "Nunito-Medium",
  bold: "Nunito-Bold",
};

export default function MatchesScreen() {
  const [filter, setFilter] = useState("mutual");

  const handleViewProfile = (user) => {
    console.log("View profile of", user.name);
  };

  const handleOpenChat = (user) => {
    console.log("Open chat with", user.name);
  };

  // Filter data based on selected filter
  const filteredProfiles = mockProfiles.filter((user) => {
    if (filter === "mutual") return user.mutual;
    if (filter === "likedByMe") return user.likedByMe;
    if (filter === "likedMe") return user.likedMe;
    return true;
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Filter buttons */}
      <View style={styles.filterContainer}>
        {["mutual", "likedByMe", "likedMe"].map((type) => (
          <TouchableOpacity
            key={type}
            onPress={() => setFilter(type)}
            style={[
              styles.filterButton,
              filter === type && styles.filterButtonActive,
            ]}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.filterButtonText,
                filter === type && styles.filterButtonTextActive,
              ]}
            >
              {type === "mutual"
                ? "Mutual"
                : type === "likedByMe"
                ? "Liked By Me"
                : "Liked Me"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Show premium message if filter is likedByMe */}
      {filter === "likedByMe" && (
        <View style={styles.premiumMessageContainer}>
          <Text style={styles.premiumTitle}>Premium Feature</Text>
          <Text style={styles.premiumText}>
            Please subscribe to the premium plan to see this content.
          </Text>
        </View>
      )}

      {/* Show list only if not "likedByMe" or show empty if you want */}
      {filter !== "likedByMe" && (
        <FlatList
          data={filteredProfiles}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <MatchCard
                user={item}
                onViewProfile={handleViewProfile}
                onOpenChat={handleOpenChat}
              />
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mildPink,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
    marginBottom: 8,
    paddingHorizontal: 12,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#f7d4e6",
    borderWidth: 1,
    borderColor: "#ff4da6",
  },
  filterButtonActive: {
    backgroundColor: "#ff4da6",
  },
  filterButtonText: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: "#ff4da6",
  },
  filterButtonTextActive: {
    color: "#fff",
    fontFamily: fonts.bold,
  },
  listContainer: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  cardWrapper: {
    flex: 1,
    margin: 8,
  },
  premiumMessageContainer: {
    backgroundColor: "#fff0f6",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ff4da6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  premiumTitle: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: "#ff1a75",
    marginBottom: 8,
  },
  premiumText: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: "#a60052",
    textAlign: "center",
  },
});
