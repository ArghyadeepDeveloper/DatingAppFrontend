import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { brownishPink } from "../constants/colors";

const Button = ({ type = "primary", onPress, children }) => {
  const isPrimary = type === "primary";

  return (
    <TouchableOpacity
      style={[styles.button, isPrimary ? styles.primary : styles.secondary]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.text,
          isPrimary ? styles.primaryText : styles.secondaryText,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 6,
    width: 200,
  },
  primary: {
    backgroundColor: brownishPink,
  },
  secondary: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#FF5864",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  primaryText: {
    color: "#FFF",
  },
  secondaryText: {
    color: "#FF5864",
  },
});

export default Button;
