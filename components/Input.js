import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { brownishPink } from "../constants/colors";

const Input = ({
  type,
  placeholder,
  label,
  value,
  onChange,
  error,
  rightIcon,
  leftIcon,
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, error && styles.errorBorder]}>
        {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={type === "password"}
          keyboardType={type === "email" ? "email-address" : "default"}
        />
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
    // fontFamily: "Nunito-Regular",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    marginLeft: 10,
    color: brownishPink,
    fontFamily: "Nunito-Bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: brownishPink, // Light grey border
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 50,
    backgroundColor: "#FFF",
    fontFamily: "Nunito-Bold",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    fontFamily: "Nunito-Bold",
  },
  icon: {
    marginHorizontal: 8,
  },
  errorBorder: {
    borderColor: "#FF5C8D", // Red border for error
  },
  errorText: {
    fontSize: 12,
    color: "#FF5C8D", // Red error message text
    marginTop: 6,
  },
});

export default Input;
