import Mail from "@/components/mail";
import Spacer from "@/components/Spacer";
import { useThemeColors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function About() {
  const colors = useThemeColors();

  return (
    <KeyboardAvoidingView
      style={[styles.flexContainer, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Spacer flex={2} />
        <Text style={[styles.text, { color: colors.text }]}>about</Text>
        <Spacer />

        {[
          { icon: "call", label: "Phone" },
          { icon: "logo-linkedin", label: "LinkedIn" },
          { icon: "logo-github", label: "Github" },
        ].map((item, i) => (
          <View key={i} style={styles.linkContainer}>
            <Ionicons name={item.icon as any} size={35} color={colors.text} />
            <Text style={[styles.linkText, { color: colors.text }]}>
              {item.label}
            </Text>
          </View>
        ))}

        <Spacer />

        <View style={styles.mailContainer}>
          <Mail
            onSend={(message) => {
              console.log("Mesaj gönderildi:", message);
            }}
          />
        </View>

        <Spacer flex={2} />
      </ScrollView>
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
    alignItems: "flex-start",
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  mailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  linkText: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 12,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
  },
});