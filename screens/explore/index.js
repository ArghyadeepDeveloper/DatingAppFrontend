// screens/ExploreScreen.js
import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import SwipeCard from "../../components/SwiperCard";
import personImageOne from "../../assets/images/person-image-one.jpeg";
import personImageTwo from "../../assets/images/person-image-two.jpg";
import personImageThree from "../../assets/images/person-image-three.jpg";

const mockProfiles = [
  { id: "1", name: "Alice", age: 26, city: "New York", image: personImageOne },
  {
    id: "2",
    name: "Bob",
    age: 30,
    city: "San Francisco",
    image: personImageTwo,
  },
  {
    id: "3",
    name: "Carol",
    age: 24,
    city: "Los Angeles",
    image: personImageThree,
  },
  { id: "4", name: "David", age: 29, city: "Chicago", image: personImageOne },
  { id: "5", name: "Eve", age: 27, city: "Miami", image: personImageTwo },
  { id: "6", name: "Frank", age: 31, city: "Seattle", image: personImageThree },
  { id: "7", name: "Grace", age: 25, city: "Austin", image: personImageOne },
  { id: "8", name: "Henry", age: 28, city: "Denver", image: personImageTwo },
  { id: "9", name: "Isabel", age: 26, city: "Boston", image: personImageThree },
  { id: "10", name: "Jack", age: 33, city: "Portland", image: personImageOne },
  { id: "11", name: "Karen", age: 29, city: "Atlanta", image: personImageTwo },
  {
    id: "12",
    name: "Leo",
    age: 27,
    city: "Philadelphia",
    image: personImageThree,
  },
  { id: "13", name: "Mona", age: 24, city: "Houston", image: personImageOne },
  { id: "14", name: "Nick", age: 32, city: "San Diego", image: personImageTwo },
  {
    id: "15",
    name: "Olivia",
    age: 26,
    city: "Dallas",
    image: personImageThree,
  },
  { id: "16", name: "Paul", age: 30, city: "Detroit", image: personImageOne },
  {
    id: "17",
    name: "Quinn",
    age: 28,
    city: "Minneapolis",
    image: personImageTwo,
  },
  {
    id: "18",
    name: "Rachel",
    age: 25,
    city: "Orlando",
    image: personImageThree,
  },
  {
    id: "19",
    name: "Steve",
    age: 31,
    city: "Las Vegas",
    image: personImageOne,
  },
  {
    id: "20",
    name: "Tina",
    age: 27,
    city: "Washington D.C.",
    image: personImageTwo,
  },
];

export default function ExploreScreen() {
  const [profiles, setProfiles] = useState(mockProfiles);

  const handleSwipeLeft = (user) => {
    console.log("Rejected:", user.name);
    setProfiles((prev) => prev.filter((p) => p.id !== user.id));
  };

  const handleSwipeRight = (user) => {
    console.log("Liked:", user.name);
    setProfiles((prev) => prev.filter((p) => p.id !== user.id));
  };

  return (
    <View style={styles.container}>
      {profiles.map((user, index) => (
        <SwipeCard
          key={user.id}
          user={user}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
