import { fontFamily } from "@/constants/fonts";
import { useThemeColors } from "@/constants/theme";
import React from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

type Props = {
  title: string;
  skills: { name: string; icon: React.ReactNode }[];
  route?: any;
  icon: React.ReactNode;
  size?: number;
  fontsize?: number;
};

export function Card({ icon, title, skills, size ,fontsize, route}: Props) {
  const colors = useThemeColors();
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;
  const isWeb = width >= 1024;

  const dynamicCardStyle = isWeb
    ? styles.cardWeb
    : isTablet
    ? styles.cardTablet
    : styles.cardMobile;

  return (
    <Pressable
      style={({ hovered }) => [
        styles.cardWrapper,
        dynamicCardStyle,
        hovered && isWeb && styles.webCardHover,
      ]}
    >
      <View style={[styles.card, { backgroundColor: colors.primary } ]}>
        <View style={styles.header}>
          {icon && <View style={styles.icon}>{icon}</View>}
          <Text style={[styles.title, { color: colors.text , fontSize: size || 22 , fontFamily: fontFamily.bold }]}>{title}</Text>
        </View>
        <View style={styles.divider} />
        <View style={[styles.skills, isTablet && styles.skillsTablet]}>
          {skills.map((skill, idx) => (
            <View key={idx} style={styles.skillItem}>
              {skill.icon && <View style={styles.skillIcon}>{skill.icon}</View>}
              <Text style={[styles.skillText, { color: colors.text , fontSize: fontsize || 22 , fontFamily: fontFamily.meduim }]}>
                {skill.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginVertical: 8,
    borderRadius: 20,
    overflow: Platform.OS === "web" ? "visible" : "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    transitionDuration: Platform.OS === "web" ? "150ms" : undefined,
  },
  cardMobile: {
    width: "100%",
    minWidth: "100%",
    alignSelf: "center",
  },
  cardTablet: {
    flexGrow: 1,
    flexBasis: "48%",
    maxWidth: "48%",
    minWidth: 280,
    height: 260,
  },
  cardWeb: {
    flexGrow: 1,
    flexBasis: "30%",
    maxWidth: "30%",
    minWidth: 280,
    height: 260,
  },
  webCardHover: {
    transform: [{ scale: 1.02 }],
    shadowOpacity: 0.2,
    elevation: 8,
  },
  card: {
    flex: 1,
    padding: 24,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    marginRight: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    includeFontPadding: false, // Android specific
    textAlignVertical: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginVertical: 16,
  },
  skills: {
    gap: 12,
  },
  skillsTablet: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  skillItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    flexBasis: "48%",
  },
  skillIcon: {
    marginRight: 10,
  },
  skillText: {
    fontSize: 16,
  },
});
