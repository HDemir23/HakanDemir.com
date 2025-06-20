import { PlatformOnlyButton } from "@/components/ActionButton";
import Spacer from "@/components/Spacer";
import { fontFamily } from "@/constants/fonts";
import { useThemeColors } from "@/constants/ThemeProvider";
import { router } from "expo-router";
import React, { useCallback, useMemo } from "react";
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

export default function Home() {
  const colors = useThemeColors();
  const [isHovered, setIsHovered] = React.useState(false);


  const handlePressCv = useCallback(() => {
    router.push(
      "https://docs.google.com/document/d/1ZKeHLH1XcS_kLFjsHAbqszWEeG7JD39OpQYDPyO1his/edit?tab=t.0"
    );
  }, []);

  const handleAndroidDownload = useCallback(() => {
    Linking.openURL(
      "https://expo.dev/accounts/roseprince/projects/Cv/builds/dace587f-af26-4baf-afe1-425e3db89f3e"
    );
  }, []);

  const handleIosDownload = useCallback(() => {
    Linking.openURL(
      "https://jetottawa.ca/wp-content/uploads/2021/10/work-progress-loading-bar-concept-hand-drawing-work-progress-loading-bar-concept-marker-transparent-wipe-board-167678984.jpg"
    );
  }, []);

  // Hover handlers to change button style on hover
  const hoverIn = useCallback(() => setIsHovered(true), []);
  const hoverOut = useCallback(() => setIsHovered(false), []);

  // Memoized styles to avoid unnecessary recalculations
  // This helps in performance optimization
  // and ensures styles are only recalculated when dependencies change
  // Button style that changes based on hover state
  // and uses theme colors
  // Text style that changes based on hover state
  // and uses theme colors
  // Memoized button style that changes based on hover state
  // and uses theme colors
  // Memoized text style that changes based on hover state

  const CvButtonStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      ...styles.ButtonContainer,
      backgroundColor: colors.primary,
      transform: isHovered ? [{ scale: 1.03 }] : [{ scale: 1 }],
    }),
    [isHovered, colors.primary]
  );

  const buttonTextStyle = useMemo<StyleProp<TextStyle>>(
    () => ({
      color: isHovered ? colors.textOposide : colors.text,
      fontFamily: fontFamily.bold,
    }),
    [isHovered, colors.text, colors.textOposide]
  );

  const baseTextStyle = useMemo(
    () => ({
      color: colors.text,
      fontFamily: fontFamily.medium,
    }),
    [colors.text]
  );

  const bgColor = useMemo(
    () => ({
      backgroundColor: colors.background,
    }),
    [colors.background]
  );

  const primaryColor = useMemo(
    () => ({
      backgroundColor: colors.primary,
    }),
    [colors.primary]
  );

  return (
    <View style={[styles.wrapper, bgColor]}>
      <ScrollView>
        <View style={[styles.container, bgColor]}>
          <View style={[styles.card, primaryColor]}>
            <Image
              style={styles.image}
              source={require("@/assets/images/Photo.png")}
            />
            <Text style={[styles.Boldtext, baseTextStyle]}>
              Ahmet Hakan Demir
            </Text>
          </View>
          <Spacer flex={2} />

          <Pressable
            accessibilityRole="button"
            onPress={handlePressCv}
            onHoverIn={hoverIn}
            onHoverOut={hoverOut}
            style={CvButtonStyle}
          >
            <Text style={buttonTextStyle}>CV</Text>
          </Pressable>

          <View style={styles.textContainer}>
            <Text style={[styles.paragraph, baseTextStyle]}>
              ◉ Building real, working software is where I focus not just
              following tutorials.{"\n\n"}◉ Over the past few months, most of my
              time has gone into projects using TypeScript and Swift, especially
              web apps built with React and React-Native (Expo).{"\n\n"}◉
              Familiar with how app's are structured, I care about writing code
              that's readable and solving problems without overcomplicating
              things.{"\n"}
              Experience includes using tools like Node.js and MongoDB, as well
              as experimenting with web3 utilities through small personal
              projects.
              {"\n\n"}◉ Right now, the focus is on cross-platform development
              with Expo, alongside steadily improving my understanding of native
              iOS development.{"\n"}
              While there's still a lot to learn, this journey didn't start from
              zero progress has been steady, and I pick things up quickly when
              the path is clear.{"\n\n"}◉ Clean code, thoughtful decisions, and
              projects that actually work matter most.{"\n"}
              The goal now is to join a team where learning continues through
              hands-on work and real feedback.
            </Text>
          </View>
          <Spacer flex={2} />
          <View style={styles.buttonFlex}>
            <PlatformOnlyButton
              label="Download For Android"
              onPress={handleAndroidDownload}
            />
            <PlatformOnlyButton
              label="Download For iOS"
              onPress={handleIosDownload}
            />
          </View>
          <Spacer flex={2} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonFlex: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingHorizontal: 20,
    margin: 20,
  },
  image: {
    alignItems: "flex-start",
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  Boldtext: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  textContainer: {
    width: "90%",
    paddingBottom: 20,
  },
  ButtonContainer: {
    height: 30,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
});
