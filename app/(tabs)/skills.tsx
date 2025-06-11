import Card from "@/components/card";
import { useThemeColors } from "@/constants/theme";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// Svg Components
import HtmlIcon from "@/assets/svg/Html";
import JavaScriptIcon from "@/assets/svg/JavaScript";
import ReactIcon from "@/assets/svg/ReactIcon";
import TypeScriptIcon from "@/assets/svg/TypeScript";
import CssIcon from "@/assets/svg/Css";
import ScssIcon from "@/assets/svg/Scss";

export default function Skills() {
  const colors = useThemeColors();

  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.cardContainer}>
          <Card

            title="Languages"
            icon={<TypeScriptIcon size={24} />}
            skills={[
              { name: "TypeScript", icon: <TypeScriptIcon size={20} /> },
              { name: "JavaScript", icon: <JavaScriptIcon size={20} /> },
              { name: "React", icon: <ReactIcon size={20} /> },
              { name: "Html", icon: <HtmlIcon size={20} /> },
              { name: "Css", icon: <CssIcon size={20} /> },
              { name: "Sass", icon: <ScssIcon size={20} /> },
            ]}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
