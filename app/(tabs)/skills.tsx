import { Card } from "@/components/card";
import { useThemeColors } from "@/constants/theme";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

// Svg Components (add these if available)
import BackendIcon from "@/assets/svg/Backend";
import CssIcon from "@/assets/svg/Css";
import DevTools from "@/assets/svg/DevTools";
import ExpoIcon from "@/assets/svg/ExpoIcon";
import Frontend from "@/assets/svg/FrontEnd";
import GitHubIcon from "@/assets/svg/GitHub";
import GitIcon from "@/assets/svg/GitIcon";
import HtmlIcon from "@/assets/svg/Html";
import JavaScriptIcon from "@/assets/svg/JavaScript";
import LanguageIcon from "@/assets/svg/LanguageIcon";
import MongoDBIcon from "@/assets/svg/MongoDbI";
import NodeJsIcon from "@/assets/svg/NodeJs";
import PhoneIcon from "@/assets/svg/Phone";
import PostmanIcon from "@/assets/svg/Postman";
import ReactIcon from "@/assets/svg/ReactIcon";
import ScssIcon from "@/assets/svg/Scss";
import SwiftIcon from "@/assets/svg/Swift";
import TypeScriptIcon from "@/assets/svg/TypeScript";
import VsCodeIcon from "@/assets/svg/VsCode";

export default function Skills() {
  const colors = useThemeColors();
  const { width } = useWindowDimensions();
  const isWide = width >= 768;
  const isWebWide = width >= 1024;

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={styles.container}>
          <View
            style={[
              styles.grid,
              isWide && styles.gridWide,
              isWebWide && styles.gridWebWide,
            ]}
          >
            <Card
              title="Languages"
              icon={<LanguageIcon size={34} />}
              size={32}
              fontsize={24}
              skills={[
                { name: "TypeScript", icon: <TypeScriptIcon size={34} /> },
                { name: "JavaScript", icon: <JavaScriptIcon size={34} /> },
                { name: "Swift", icon: <SwiftIcon size={34} /> },
              ]}
            />
            <Card
              title="Frontend"
              icon={<Frontend size={34} />}
              size={32}
              fontsize={24}
              skills={[
                { name: "React", icon: <ReactIcon size={34} /> },
                { name: "HTML", icon: <HtmlIcon size={34} /> },
                { name: "CSS", icon: <CssIcon size={34} /> },
                { name: "SCSS", icon: <ScssIcon size={34} /> },
              ]}
            />
            <Card
              title="Mobile"
              icon={<PhoneIcon size={34} />}
              size={32}
              fontsize={24}
              skills={[
                { name: "React Native", icon: <ReactIcon size={34} /> },
                { name: "SwiftUI", icon: <SwiftIcon size={34} /> },
                { name: "Expo", icon: <ExpoIcon size={34} /> },
              ]}
            />
            <Card
              title="Backend"
              icon={<BackendIcon size={34} />}
              size={32}
              fontsize={24}
              skills={[
                { name: "Node.js", icon: <NodeJsIcon size={34} /> },
                { name: "MongoDB", icon: <MongoDBIcon size={34} /> },
              ]}
            />
            <Card
              title="Dev Tools"
              icon={<DevTools size={34} />}
              size={32}
              fontsize={24}
              skills={[
                { name: "Git", icon: <GitIcon size={34} /> },
                { name: "GitHub", icon: <GitHubIcon size={34} /> },
                { name: "VS Code", icon: <VsCodeIcon size={34} /> },
                { name: "Postman", icon: <PostmanIcon size={34} /> },
              ]}
            />
          </View>
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
  },
  grid: {
    flexDirection: "column",
    gap: 16,
  },
  gridWide: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridWebWide: {
    justifyContent: "space-evenly",
  },
});
