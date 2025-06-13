import GitHubIcon from "@/assets/svg/GitHub";
import LinkedInIcon from "@/assets/svg/LinkedIn";
import MailIcon from "@/assets/svg/Mail";
import PhoneIcon from "@/assets/svg/Phone";
import Mail from "@/components/mail";
import Spacer from "@/components/Spacer";
import { fontFamily } from "@/constants/fonts";
import { useThemeColors } from "@/constants/theme";
import React, { useMemo } from "react";
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
  const isTabletOrWeb = width >= 768;

  const iconSize = isTabletOrWeb ? 34 : 24;
  const fontSize = isTabletOrWeb ? 22 : 18;

  const contactItems = useMemo(
    () => [
      {
        icon: <GitHubIcon size={iconSize} color={colors.text} />,
        text: "HDemir23",
        onPress: () => Linking.openURL("https://github.com/HDemir23"),
      },
      {
        icon: <PhoneIcon size={iconSize} color={colors.text} />,
        text: "+90 507 586 56 81",
        onPress: () => Linking.openURL("tel:+905075865681"),
      },
      {
        icon: <LinkedInIcon size={iconSize} color={colors.text} />,
        text: "Ahmet Hakan Demir",
        onPress: () =>
          Linking.openURL("https://www.linkedin.com/in/realhdemir/"),
      },
      {
        icon: <MailIcon size={iconSize} color={colors.text} />,
        text: "a.hakandemir23@gmail.com",
        onPress: () => Linking.openURL("mailto:a.hakandemir23@gmail.com"),
      },
    ],
    [iconSize, colors.text]
  );

  return (
    <KeyboardAvoidingView
      style={[styles.flexContainer, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView
        contentContainerStyle={[
          styles.container,
          {
            alignItems: isTabletOrWeb ? "center" : "flex-start",
            paddingHorizontal: isTabletOrWeb ? 64 : 24,
          },
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <Spacer flex={1} />
        <View
          style={[
            styles.centeredBox,
            {
              width: isTabletOrWeb ? "auto" : "100%",
              alignSelf: "center",
            },
          ]}
        >
          <View style={styles.linkGroup}>
            {contactItems.map((item, i) => (
              <Pressable
                key={i}
                style={({ pressed }) => [
                  styles.pressableContainer,
                  { opacity: pressed ? 0.5 : 1 },
                ]}
                onPress={item.onPress}
              >
                {item.icon}
                <Text
                  style={[
                    styles.linkText,
                    {
                      fontSize: fontSize,
                      fontFamily: fontFamily.medium,
                      color: colors.text,
                    },
                  ]}
                >
                  {item.text}
                </Text>
              </Pressable>
            ))}
          </View>

          <Spacer />

          <View style={styles.mailContainer}>
            <Mail />
          </View>
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
  pressableContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  mailContainer: {
    marginTop: 24,
    width: "100%",
  },
  linkText: {
    fontWeight: "500",
    marginLeft: 12,
  },
});
