import ContactItems from "@/components/ContactItems";
import Mail from "@/components/mail";
import Spacer from "@/components/Spacer";
import { useThemeColors } from "@/constants/ThemeProvider";
import React, { useMemo } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";

export default function About() {
  const colors = useThemeColors();
  const { width } = useWindowDimensions();
  const isTabletOrWeb = width >= 768;

  const contentStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      styles.container,
      {
        alignItems: isTabletOrWeb ? "center" : "flex-start",
        paddingHorizontal: isTabletOrWeb ? 64 : 24,
      },
    ],
    [isTabletOrWeb]
  );

  const centeredBoxStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      styles.centeredBox,
      {
        width: isTabletOrWeb ? "auto" : "100%",
        alignSelf: "center",
      },
    ],
    [isTabletOrWeb]
  );

  const bgStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({ backgroundColor: colors.background }),
    [colors.background]
  );

  return (
    <KeyboardAvoidingView
      style={[styles.flexContainer, bgStyle]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <Spacer flex={1} />
      <View style={centeredBoxStyle}>
        <ContactItems />
        <View style={styles.linkGroup}>
          <Spacer />
          <View style={styles.mailContainer}>
            <Mail />
          </View>
        </View>
      </View>
      <Spacer flex={2} />
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
  },
  linkGroup: {
    width: "100%",
    flexDirection: "column",
    gap: 12,
  },
  centeredBox: {
    maxWidth: 640,
    paddingHorizontal: 24,
  },
  mailContainer: {
    marginTop: 24,
    width: "100%",
  },
});
