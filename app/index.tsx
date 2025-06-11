import { useThemeColors } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

const emojiList = [
  // Duck
  "💛",
  "✨",
  "🐥",
  "💫",
  "🌼",

  // Festive & magical
  "🎀",
  "🎉",
  "🥳",
  "🌟",

  // Soft & cute
  "🩷",
  "🪄",
  "💐",
  "🫧",
  "🦆",

  // Kawaii-style
  "🐤",
  "🌸",
  "💎",
  "🧁",
  "🍭",

  // Pastel mood
  "💗",
  "🩵",
  "🤍",
  "💜",
  "🌷",
  "🌙",
  "🫶",

  // Celebration vibes
  "🎊",
  "🎈",
  "🍾",
  "💃",
  "🕺",

  // Ultra-cute animals
  "🧸",
  "🐰",
  "🦊",
  "🐝",
  "🍓",
];

function EmojiConfetti({
  count = 24,
  origin,
}: {
  count?: number;
  origin: { x: number; y: number };
}) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const anim = new Animated.Value(0);
        useEffect(() => {
          Animated.timing(anim, {
            toValue: 1,
            duration: 3500,
            easing: Easing.out(Easing.exp),
            useNativeDriver: true,
          }).start();
        }, []);
        const x = Math.random() * 600 - 300;
        const y = Math.random() * -600 - 200;

        return (
          <Animated.Text
            key={i}
            style={{
              position: "absolute",
              fontSize: 24,
              top: origin.y,
              left: origin.x,
              transform: [
                {
                  translateX: anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, x],
                  }),
                },
                {
                  translateY: anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, y],
                  }),
                },
                {
                  rotate: anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "360deg"],
                  }),
                },
              ],
              opacity: anim.interpolate({
                inputRange: [0, 0.8, 1],
                outputRange: [1, 1, 0],
              }),
            }}
          >
            {emojiList[Math.floor(Math.random() * emojiList.length)]}
          </Animated.Text>
        );
      })}
    </>
  );
}

export default function Index() {
  const colors = useThemeColors();
  const router = useRouter();
  const scale = useRef(new Animated.Value(1)).current;
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiOrigin, setConfettiOrigin] = useState({ x: 0, y: 0 });

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.03,
          duration: 1200,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1200,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handlePressIn = () => {
    scale.setValue(1);
    Animated.spring(scale, {
      toValue: 0.92,
      useNativeDriver: true,
      bounciness: 10,
    }).start();
  };

  const handlePressOut = () => {
    setConfettiOrigin({
      x: Dimensions.get("window").width / 2,
      y: Dimensions.get("window").height / 2,
    });

    Animated.spring(scale, {
      toValue: 1.15,
      useNativeDriver: true,
    }).start(() => {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        router.push("./(tabs)/home");
      }, 1500);
    });
  };

  const onDuckLayout = (e: LayoutChangeEvent) => {
    const { x, y, width, height } = e.nativeEvent.layout;
    setConfettiOrigin({
      x: Dimensions.get("window").width / 2,
      y: Dimensions.get("window").height / 2,
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {showConfetti && <EmojiConfetti count={24} origin={confettiOrigin} />}
      <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Animated.View
          style={{ transform: [{ scale }] }}
          onLayout={onDuckLayout}
        >
          <Image
            source={require("../assets/images/dock.png")}
            style={[styles.shape, { backgroundColor: colors.background }]}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 125,
    marginRight: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
