
import { useColorScheme } from "react-native";

export const lightTheme = {
  background: "#eceff1",      // sky fog
  foreground: "#263238",      // iron blue
  primary: "#90a4ae",         // muted steel
  button: "#cfd8dc",          // cloud gray
  text: "#263238",
  textOposide: "#eceff1",
};

export const darkTheme = {
  background: "#1c262b",      // gunmetal
  foreground: "#eceff1",      // chrome
  primary: "#78909c",         // rain silver
  button: "#37474f",
  text: "#eceff1",
  textOposide: "#263238",
};

export function useThemeColors() {
  const scheme = useColorScheme();
  return scheme === "dark" ? darkTheme : lightTheme;
}





// Peach Bloom

// const lightTheme = {
//   background: "#fff1e6",      // soft peach
//   foreground: "#5e3023",      // spiced bark
//   primary: "#f7a072",         // apricot kiss
//   button: "#ffe5d0",          // peach milk
//   text: "#5e3023",
// };

// const darkTheme = {
//   background: "#331e14",      // roasted pit
//   foreground: "#fff1e6",      // peach cream
//   primary: "#f5a265",         // mellow coral
//   button: "#5e3023",
//   text: "#fff1e6",
// };


// Steel Train

// const lightTheme = {
//   background: "#eceff1",      // sky fog
//   foreground: "#263238",      // iron blue
//   primary: "#90a4ae",         // muted steel
//   button: "#cfd8dc",          // cloud gray
//   text: "#263238",
// };

// const darkTheme = {
//   background: "#1c262b",      // gunmetal
//   foreground: "#eceff1",      // chrome
//   primary: "#78909c",         // rain silver
//   button: "#37474f",
//   text: "#eceff1",
// };


// Slate Coast

// const lightTheme = {
//   background: "#f2f4f6",      // cool haze
//   foreground: "#2f3e46",      // steel edge
//   primary: "#7d97ad",         // coastal mist
//   button: "#d8e3ec",          // pale surf
//   text: "#2f3e46",
// };

// const darkTheme = {
//   background: "#1c262d",      // harbor depth
//   foreground: "#f2f4f6",      // pale wind
//   primary: "#5d738a",         // marine dusk
//   button: "#32444f",
//   text: "#f2f4f6",
// };