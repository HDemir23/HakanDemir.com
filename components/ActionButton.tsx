import React from "react";
import { Platform, Pressable, Text, StyleSheet } from "react-native";
import { useThemeColors } from "@/constants/ThemeProvider";
import { fontFamily } from "@/constants/fonts";

type Props = {
  label: string;
  onPress: () => void;
};

export function PlatformOnlyButton({ label, onPress }: Props) {
  const colors = useThemeColors();
  const [isHovered, setIsHovered] = React.useState(false);

  if (Platform.OS !== "web") return null;

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={[
        styles.button,
        {
          backgroundColor: isHovered
            ? colors.primary
            : colors.primary,
        },
      ]}
    >
      <Text style={[styles.text, { color: colors.text }]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
    minWidth: 160,
  },
  text: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
  },
});