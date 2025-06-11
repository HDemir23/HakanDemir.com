import { useThemeColors } from "@/constants/theme";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  const colors = useThemeColors();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Welcome", headerShown: true }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Home", headerShown: false }}
      />
    </Stack>
  );
}
