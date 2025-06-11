import { Button } from "@react-navigation/elements";
import { useColorScheme } from "react-native";

const lightTheme = {
  background: "#ffffff",
  foreground: "#111111",
  primary: "#007AFF",
  button: "#1A1A1A",
  text: "#111111",
};

const darkTheme = {
  background: "#000000",
  foreground: "#f2f2f2",
  primary: "#0A84FF",
  button: "#2C2C2C",
  text: "#f2f2f2",
};

export function useThemeColors() {
  const scheme = useColorScheme();
  return scheme === "dark" ? darkTheme : lightTheme;
}
