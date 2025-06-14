import Spacer from "@/components/Spacer";
import { fontFamily } from "@/constants/fonts";
import { useThemeColors } from "@/constants/theme";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { router } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Home() {
  const colors = useThemeColors();
  const [isHovered, setIsHovered] = React.useState(false);

  const downloadCv = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Request Needed For download file");
        return;
      }

      const fileId = "14RMAwxM1WGIhYowoGQiGucLMH3E9egr0";
      const fileName = "belge.docx";
      const downloadUri = `https://docs.google.com/document/d/${fileId}/export?format=docx`;
      const localPath = FileSystem.documentDirectory + fileName;

      const downloadResumable = FileSystem.createDownloadResumable(
        downloadUri,
        localPath
      );

      const result = await downloadResumable.downloadAsync();

      if (result?.uri) {
        await MediaLibrary.saveToLibraryAsync(result.uri);
        Alert.alert("Başarılı", ".docx dosyası indirildi ve kaydedildi.");
      } else {
        Alert.alert("Hata", "Dosya indirilemedi.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Something Went Wrong While downloading");
    }
  };

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.background }]}>
      <ScrollView>
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <View style={[styles.card, { backgroundColor: colors.primary }]}>
            <Image
              style={styles.image}
              source={require("@/assets/images/Photo.png")}
            />
            <Text
              style={[
                styles.Boldtext,
                { color: colors.text, fontFamily: fontFamily.bold },
              ]}
            >
              Ahmet Hakan Demir
            </Text>
          </View>
          <Spacer flex={2} />

          <Pressable
            onPress={() =>
              router.push(
                "https://docs.google.com/document/d/1ZKeHLH1XcS_kLFjsHAbqszWEeG7JD39OpQYDPyO1his/edit?tab=t.0"
              )
            }
            onHoverIn={() => setIsHovered(true)}
            onHoverOut={() => setIsHovered(false)}
            style={[
              styles.ButtonContainer,
              {
                backgroundColor: isHovered ? colors.primary : colors.primary,
                transform: isHovered ? [{ scale: 1.03 }] : [{ scale: 1 }],
                transitionDuration: "200ms",
                cursor: "pointer",
              },
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  color: isHovered ? colors.textOposide : colors.text,
                  fontFamily: fontFamily.bold,
                },
              ]}
            >
              CV
            </Text>
          </Pressable>

          <View style={styles.textContainer}>
            <Text
              style={[
                styles.paragraph,
                { color: colors.text, fontFamily: fontFamily.medium },
              ]}
            >
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
  text: {
    fontSize: 15,
    fontStyle: "italic",
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
