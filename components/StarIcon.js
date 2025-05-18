import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const deepMauve = "#6e3667"; // example color, adjust as you want
const brownishPink = "#d16e8d"; // example color, adjust as you want

export default function StarIcon({ onPress }) {
  return (
    <TouchableOpacity style={styles.startIcon} onPress={onPress}>
      <AntDesign name="star" size={30} color={deepMauve} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  startIcon: {
    padding: 15,
    backgroundColor: "pink",
    borderRadius: 30, // 50% border radius doesn't work in RN, use half of width/height
    elevation: 5, // for shadow on Android
    shadowColor: "#000", // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
