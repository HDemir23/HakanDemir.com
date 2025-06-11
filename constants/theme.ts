import { Button } from "@react-navigation/elements";
import { useColorScheme } from "react-native";

const lightTheme = {
  background: "#f7e6e4",      // pale rose mist
  foreground: "#4a2d32",      // berry skin
  primary: "#de6c83",         // rosé flush
  button: "#f8d3d9",          // pink smoke
  text: "#4a2d32",
};

const darkTheme = {
  background: "#2a1418",      // velvet wine
  foreground: "#ffebf0",      // cloudy blush
  primary: "#f88ea7",         // glowing rosé
  button: "#442227",
  text: "#ffebf0",
};

export function useThemeColors() {
  const scheme = useColorScheme();
  return scheme === "dark" ? darkTheme : lightTheme;
}
