import { fontFamily } from "@/constants/fonts";
import { useThemeColors } from "@/constants/theme";
import React, { useMemo } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  useWindowDimensions,
} from "react-native";

type Props = {
  title: string;
  skills: { name: string; icon: React.ReactNode }[];
  icon: React.ReactNode;
  size?: number;
  fontsize?: number;
  onLayout?: (e: any) => void;
  fixedHeight?: number;
};

export const Card = React.memo(function Card({
  icon,
  title,
  skills,
  size = 20,
  fontsize = 16,
  onLayout,
  fixedHeight,
}: Props) {
  const colors = useThemeColors();
  const { width } = useWindowDimensions();

  const isTablet = width >= 768 && width < 1024;
  const isWeb = width >= 1024;

  const dynamicCardStyle = useMemo(() => {
    if (isWeb) {
      return styles.cardWeb;
    }
    if (isTablet) {
      return styles.cardTablet;
    }
    return styles.cardMobile;
  }, [isWeb, isTablet]);

  const cardStyle = useMemo<StyleProp<ViewStyle>>(() => {
    const base = [
      styles.card,
      dynamicCardStyle,
      { backgroundColor: colors.primary },
    ];

    if ((isWeb || isTablet) && fixedHeight) {
      base.push({ height: fixedHeight } as any); // :D
    }

    return base;
  }, [dynamicCardStyle, colors.primary, isWeb, isTablet, fixedHeight]);

  const titleStyle = useMemo<StyleProp<TextStyle>>(
    () => [
      {
        color: colors.text,
        fontSize: size,
        fontFamily: fontFamily.bold,
      },
    ],
    [colors.text, size]
  );

  const SkillTextStyle = useMemo<StyleProp<TextStyle>>(
    () => [
      styles.skillText,
      {
        fontSize: fontsize,
        color: colors.text,
        fontFamily: fontFamily.medium,
      },
    ],
    [colors.text, fontsize]
  );

  return (
    <View style={[styles.container, isWeb && styles.webWrap]}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${title} skill card`}
        style={styles.cardWrapper}
      >
        <View style={cardStyle} onLayout={onLayout}>
          <View style={styles.header}>
            {icon && <View style={styles.icon}>{icon}</View>}
            <Text style={titleStyle}>{title}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.skillsWrapper}>
            {skills.map((skill) => (
              <View key={skill.name} style={styles.skillItem}>
                <View style={styles.skillIcon}>{skill.icon}</View>
                <Text style={SkillTextStyle} numberOfLines={1}>{skill.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "nowrap",
    gap: 12,
  },
  webWrap: {
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cardWrapper: {
    marginVertical: 10,
    paddingHorizontal: 8,
    width: "100%",
  },
  card: {
    borderRadius: 20,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardMobile: {
    width: "100%",
  },
  cardTablet: {
    width: "48%",
    minWidth: 300,
  },
  cardWeb: {
    width: "31.5%",
    minWidth: 320,
    maxWidth: 360,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    marginRight: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginBottom: 16,
  },
  skillsWrapper: {
    flexDirection: "column",
    gap: 12,
  },
  skillItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  skillIcon: {
    marginRight: 10,
  },
  skillText: {
    fontSize: 16,
  },
});
