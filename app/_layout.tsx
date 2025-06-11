import { useThemeColors } from "@/constants/theme";
import { Stack } from "expo-router";
import React from "react";
import { useFonts } from "expo-font";
import { fontFamily } from "@/constants/fonts";

export default function RootLayout() {
  const colors = useThemeColors();
  const [fonts] = useFonts({
    [fontFamily.bold]: require("../assets/fonts/WorkSans-Bold.ttf"),
    [fontFamily.meduim]: require("../assets/fonts/WorkSans-Medium.ttf"),
    [fontFamily.regular]: require("../assets/fonts/WorkSans-Regular.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Welcome", headerShown: false }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Home", headerShown: false }}
      />
    </Stack>
  );
}
