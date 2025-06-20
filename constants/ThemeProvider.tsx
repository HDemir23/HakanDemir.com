import React, { createContext, useContext, useEffect, useState } from "react";
import { Appearance, ColorSchemeName } from "react-native";
import { darkTheme, lightTheme } from "./theme";

type ThemeContextType = {
  theme: typeof lightTheme;
  mode: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName | null>(null);

  useEffect(() => {
    // İlk mount'ta sistem temasını oku
    const systemColor = Appearance.getColorScheme();
    setColorScheme(systemColor);

    // Tema değişimlerini 
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => listener.remove();
  }, []);

  if (!colorScheme) return null; // İlk değer gelmeden UI renderlama

  const mode = colorScheme === "dark" ? "dark" : "light";
  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeColors = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeColors must be inside ThemeProvider");
  return context.theme;
};

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeMode must be inside ThemeProvider");
  return context.mode;
};
