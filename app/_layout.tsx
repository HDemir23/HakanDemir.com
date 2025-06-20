import { fontFamily } from "@/constants/fonts";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React from "react";
import { ThemeProvider } from "@/constants/ThemeProvider";

export default function RootLayout() {
  const [fonts] = useFonts({
    [fontFamily.bold]: require("../assets/fonts/WorkSans-Bold.ttf"),
    [fontFamily.medium]: require("../assets/fonts/WorkSans-Medium.ttf"),
    [fontFamily.regular]: require("../assets/fonts/WorkSans-Regular.ttf"),
  });

  if (!fonts) return null

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
