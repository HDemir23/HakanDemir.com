import GitHubIcon from "@/assets/svg/GitHub";
import LinkedInIcon from "@/assets/svg/LinkedIn";
import MailIcon from "@/assets/svg/Mail";
import PhoneIcon from "@/assets/svg/Phone";
import Mail from "@/components/mail";
import Spacer from "@/components/Spacer";
import { fontFamily } from "@/constants/fonts";
import { useThemeColors } from "@/constants/theme";
import React from "react";
import {
  KeyboardAvoidingView,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

export default function About() {
  const colors = useThemeColors();
  const { width } = useWindowDimensions();
  const isWeb = width >= 1024;
  const isTablet = width >= 768;

  const alignmentStyle: { alignItems: "center" | "flex-start" } = {
    alignItems: isTablet || isWeb ? "center" : "flex-start",
  };

  const iconSize = isTablet || isWeb ? 34 : 24;
  const fontSize = isTablet || isWeb ? 22 : 18;

  return (
    <KeyboardAvoidingView
      style={[styles.flexContainer, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView
        contentContainerStyle={[styles.container, alignmentStyle]}
        keyboardShouldPersistTaps="handled"
      >
        <Spacer flex={1} />
        <View style={styles.linkContainer}>
          <View>
            <Pressable
              style={styles.pressableContainer}
              onPress={() => Linking.openURL("https://github.com/HDemir23")}
            >
              <GitHubIcon size={iconSize} />
              <Text
                style={[
                  styles.linkText,
                  {
                    fontSize: fontSize,
                    fontFamily: fontFamily.meduim,
                    color: colors.text,
                  },
                ]}
              >
                HDemir23
              </Text>
            </Pressable>
          </View>
          <View>
            <Pressable
              style={styles.pressableContainer}
              onPress={() => Linking.openURL("tel:+905322955329")}
            >
              <PhoneIcon size={iconSize} />
              <Text
                style={[
                  styles.linkText,
                  {
                    fontSize: fontSize,
                    fontFamily: fontFamily.meduim,
                    color: colors.text,
                  },
                ]}
              >
                +90 507 586 56 81
              </Text>
            </Pressable>
          </View>

          <View>
            <Pressable
              style={styles.pressableContainer}
              onPress={() =>
                Linking.openURL("https://www.linkedin.com/in/realhdemir/")
              }
            >
              <LinkedInIcon size={iconSize} />
              <Text
                style={[
                  styles.linkText,
                  {
                    fontSize: fontSize,
                    fontFamily: fontFamily.meduim,
                    color: colors.text,
                  },
                ]}
              >
                Ahmet Hakan Demir
              </Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.pressableContainer}>
              <MailIcon size={iconSize} />
              <Text
                style={[
                  styles.linkText,
                  {
                    fontSize: fontSize,
                    fontFamily: fontFamily.meduim,
                    color: colors.text,
                  },
                ]}
              >
                a.hakandemir23@gmail.com
              </Text>
            </Pressable>
          </View>
        </View>
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
    flexDirection: "column",
  },
  pressableContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
    paddingVertical: 9,
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
    fontWeight: "bold",
    alignSelf: "center",
  },
});
