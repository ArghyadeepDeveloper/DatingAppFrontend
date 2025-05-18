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
import LinearGradient from "react-native-linear-gradient";

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
      {/* Soft fading shadow below */}
      <LinearGradient
        colors={["rgba(0,0,0,0.07)", "rgba(0,0,0,0.01)", "transparent"]}
        style={styles.shadow}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[styles.card, animatedStyle]}>
          <Image source={user.image} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>
              {user.name}, {user.age}
            </Text>
            <Text style={styles.city}>{user.city}</Text>
          </View>
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
    height: SCREEN_WIDTH * 1.5 + 30,
    alignItems: "center",
    justifyContent: "flex-start",
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
    backgroundColor: "rgba(0,0,0,0.3)",
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

  shadow: {
    position: "absolute",
    bottom: 0,
    width: SCREEN_WIDTH * 0.5,
    height: 30,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    transform: [{ scaleX: 1.5 }],
    zIndex: -1,
  },
});
