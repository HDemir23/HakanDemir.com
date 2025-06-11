import { useThemeColors } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  skills: { name: string; icon: React.ReactNode }[];
  route?: any;
  icon: React.ReactNode;
};

export default function Card({ icon, title, skills, route }: Props) {
  const colors = useThemeColors();

  return (
    <View style={styles.cardContainer}>
      <View style={[styles.card, { backgroundColor: colors.primary }]}>
        <Text style={[styles.text, { color: colors.text }]}>{title}</Text>
        <View style={styles.skills}>
          {skills.map((skill, idx) => (
            <View key={idx} style={styles.skillItem}>
              {skill.icon && (
                <View style={{ marginRight: 8 }}>
                  {skill.icon}
                </View>
              )}
              <Text style={{ color: colors.text }}>{skill.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 18,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    height: 300,
  },
  skillItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
    marginBottom: 6,
  },
  skills: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },
});
