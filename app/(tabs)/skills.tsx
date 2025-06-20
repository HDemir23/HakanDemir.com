
import { Card } from "@/components/Card/card";
import { useThemeColors } from "@/constants/ThemeProvider";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

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
  const isTablet = width >= 768;
  const isWeb = width >= 1024;
  const [maxHeight, setMaxHeight] = useState(0);

  const handleLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setMaxHeight((prev) => Math.max(prev, height));
  };

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={[
            styles.grid,
            isTablet && styles.gridTablet,
            isWeb && styles.gridWeb,
          ]}
        >
          <Card
            title="Languages"
            icon={<LanguageIcon size={24} />}
            size={20}
            fontsize={16}
            skills={[
              { name: "TypeScript", icon: <TypeScriptIcon size={20} /> },
              { name: "JavaScript", icon: <JavaScriptIcon size={20} /> },
              { name: "Swift", icon: <SwiftIcon size={20} /> },
            ]}
            onLayout={handleLayout}
            fixedHeight={maxHeight}
          />
          <Card
            title="Frontend"
            icon={<Frontend size={24} />}
            size={20}
            fontsize={16}
            skills={[
              { name: "React", icon: <ReactIcon size={20} /> },
              { name: "HTML", icon: <HtmlIcon size={20} /> },
              { name: "CSS", icon: <CssIcon size={20} /> },
              { name: "SCSS", icon: <ScssIcon size={20} /> },
            ]}
            onLayout={handleLayout}
            fixedHeight={maxHeight}
          />
          <Card
            title="Mobile"
            icon={<PhoneIcon size={24} />}
            size={20}
            fontsize={16}
            skills={[
              { name: "React Native", icon: <ReactIcon size={20} /> },
              { name: "SwiftUI", icon: <SwiftIcon size={20} /> },
              { name: "Expo", icon: <ExpoIcon size={20} /> },
            ]}
            onLayout={handleLayout}
            fixedHeight={maxHeight}
          />
          <Card
            title="Backend"
            icon={<BackendIcon size={24} />}
            size={20}
            fontsize={16}
            skills={[
              { name: "Node.js", icon: <NodeJsIcon size={20} /> },
              { name: "MongoDB", icon: <MongoDBIcon size={20} /> },
            ]}
            onLayout={handleLayout}
            fixedHeight={maxHeight}
          />
          <Card
            title="Dev Tools"
            icon={<DevTools size={24} />}
            size={20}
            fontsize={16}
            skills={[
              { name: "Git", icon: <GitIcon size={20} /> },
              { name: "GitHub", icon: <GitHubIcon size={20} /> },
              { name: "VS Code", icon: <VsCodeIcon size={20} /> },
              { name: "Postman", icon: <PostmanIcon size={20} /> },
            ]}
            onLayout={handleLayout}
            fixedHeight={maxHeight}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  grid: {
    gap: 16,
  },
  gridTablet: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    rowGap: 16,
    columnGap: 16,
  },
  gridWeb: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 16,
    columnGap: 16,
  },
});
