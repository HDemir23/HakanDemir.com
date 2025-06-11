import { useThemeColors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function Index() {



  const colors = useThemeColors();
  const router = useRouter();
  return (
    <View style={[styles.container , { backgroundColor: colors.background }]}>
      <Pressable onPress={() => router.push("./(tabs)/home")}>
        <Image style={[styles.shape, { backgroundColor: colors.background }]} source={require('../assets/images/dock.png')} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,

  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9c1aff",
  },
});
