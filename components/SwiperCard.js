import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

import StarIcon from "./StarIcon";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

export default function SwipeCard({ user, onSwipeLeft, onSwipeRight }) {
  const translateX = useSharedValue(0);
  const rotate = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
      rotate.value = event.translationX / 20;
    },
    onEnd: () => {
      if (translateX.value < -SWIPE_THRESHOLD) {
        runOnJS(onSwipeLeft)(user);
        translateX.value = withSpring(-SCREEN_WIDTH);
      } else if (translateX.value > SWIPE_THRESHOLD) {
        runOnJS(onSwipeRight)(user);
        translateX.value = withSpring(SCREEN_WIDTH);
      } else {
        translateX.value = withSpring(0);
        rotate.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { rotate: `${rotate.value}deg` },
    ],
  }));

  return (
    <View style={styles.container}>
      {/* Custom shadow trapezium */}
      <View style={styles.shadowTrapezium} />

      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[styles.card, animatedStyle]}>
          <Image source={user.image} style={styles.image} />
          {/* Info overlay */}
          <View style={styles.info}>
            <Text style={styles.name}>
              {user.name}, {user.age}
            </Text>
            <Text style={styles.city}>{user.city}</Text>
          </View>
          {/* Star Icon */}
          <View style={styles.starIconContainer}>
            <StarIcon
              onPress={() => console.log("Star pressed for", user.name)}
            />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 1.5 + 30, // extra space for shadow below
    alignItems: "center",
    justifyContent: "flex-start",
  },

  // Trapezoid shadow under the card
  shadowTrapezium: {
    position: "absolute",
    bottom: 10,
    width: SCREEN_WIDTH * 0.6,
    height: 0,
    borderBottomWidth: 8, // thickness of shadow
    borderBottomColor: "rgba(0, 0, 0, 0.12)", // shadow color + opacity
    borderLeftWidth: 20, // left slant
    borderRightWidth: 20, // right slant
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderStyle: "solid",

    // iOS shadow for some depth
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  card: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 1.5,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  info: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    marginBottom: 30,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  city: {
    fontSize: 16,
    color: "#ddd",
  },
  starIconContainer: {
    position: "absolute",
    right: 20,
    bottom: 28,
    padding: 12,
  },
});
