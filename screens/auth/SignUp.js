import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Ionicons } from "@expo/vector-icons";
import { primaryPink } from "../../constants/colors";

const SignUpScreen = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field) => (value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = () => {
    console.log(form);
    // Add validation or API call here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcome}>✨ Let's get you started!</Text>

      <Input
        label="First Name"
        placeholder="John"
        value={form.firstName}
        onChange={handleChange("firstName")}
      />

      <Input
        label="Last Name"
        placeholder="Doe"
        value={form.lastName}
        onChange={handleChange("lastName")}
      />

      <Input
        type="email"
        label="Email"
        placeholder="john@example.com"
        value={form.email}
        onChange={handleChange("email")}
      />

      <Input
        label="Phone Number"
        placeholder="1234567890"
        value={form.phone}
        onChange={handleChange("phone")}
        type="number"
      />

      <Input
        type={showPassword ? "text" : "password"}
        label="Password"
        placeholder="••••••••"
        value={form.password}
        onChange={handleChange("password")}
        rightIcon={
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        }
      />

      <Button type="primary" onPress={handleRegister}>
        Register
      </Button>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    backgroundColor: primaryPink,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#fff",
  },
});
