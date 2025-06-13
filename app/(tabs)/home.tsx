import Spacer from "@/components/Spacer";
import { fontFamily } from "@/constants/fonts";
import { useThemeColors } from "@/constants/theme";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const colors = useThemeColors();
  return (
    <View style={[styles.wrapper, { backgroundColor: colors.background }]}>
      <ScrollView>
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <View style={[styles.card, { backgroundColor: colors.primary }]}>
            <Image
              style={styles.image}
              source={require("@/assets/images/dock.png")}
            />
            <Text
              style={[
                styles.Boldtext,
                { color: colors.text, fontFamily: fontFamily.bold },
              ]}
            >
              Yahoooooo{" "}
            </Text>
          </View>
          <Spacer flex={2} />
          <View style={styles.textContainer}>
            <Text style={[styles.paragraph, { color: colors.text }]}>
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
          <Text style={{ color: colors.text, fontFamily: fontFamily.medium }}>
            Footer
          </Text>
          <Spacer flex={2} />
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
  image: {
    alignItems: "flex-start",
    width: 150,
    height: 150,
  },
  Boldtext: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textContainer: {
    width: "90%",
  },
  text: {
    fontSize: 15,
    fontStyle: "italic",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
});
