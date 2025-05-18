import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import HomeScreen from "./screens/home";
import SignUpScreen from "./screens/auth/SignUp";
import UserDetailsScreen from "./screens/user-details"; // fixed typo
import ExploreScreen from "./screens/explore";

// Prevent auto-hide of splash screen before fonts are ready
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load custom fonts
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
        "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
        "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  // Hide splash screen when fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Explore"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Signup" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
          <Stack.Screen name="Explore" component={ExploreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
