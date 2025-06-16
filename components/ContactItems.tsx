import GitHubIcon from "@/assets/svg/GitHub";
import LinkedInIcon from "@/assets/svg/LinkedIn";
import MailIcon from "@/assets/svg/Mail";
import PhoneIcon from "@/assets/svg/Phone";
import { fontFamily } from "@/constants/fonts";
import { useThemeColors } from "@/constants/theme";
import React, { useCallback, useMemo } from "react";
import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  FlatList
} from "react-native";

export default React.memo(function ContactItems() {

  const colors = useThemeColors();
  const { width } = useWindowDimensions();
  const iconSize = width >= 768 ? 34 : 24;
  const fontSize = width >= 768 ? 22 : 18;

  const openGitHub = useCallback(() => {
    Linking.openURL("https://github.com/HDemir23");
  }, []);

  const openPhone = useCallback(() => {
    Linking.openURL("tel:+905075865681");
  }, []);

  const openLinkedIn = useCallback(() => {
    Linking.openURL("https://www.linkedin.com/in/realhdemir/");
  }, []);

  const openMail = useCallback(() => {
    Linking.openURL("mailto:a.hakandemir23@gmail.com");
  }, []);

  const contactItems = useMemo(() => {
    const iconProps = { size: iconSize, color: colors.text };
    return [
      {
        icon: <GitHubIcon {...iconProps} />,
        text: "HDemir23",
        onPress: openGitHub,
      },
      {
        icon: <PhoneIcon {...iconProps} />,
        text: "+90 507 586 56 81",
        onPress: openPhone,
      },
      {
        icon: <LinkedInIcon {...iconProps} />,
        text: "Ahmet Hakan Demir",
        onPress: openLinkedIn,
      },
      {
        icon: <MailIcon {...iconProps} />,
        text: "a.hakandemir23@gmail.com",
        onPress: openMail,
      },
    ];
  }, [iconSize, colors.text, openGitHub, openPhone, openLinkedIn, openMail]);


  
  const contactTextStyle = useMemo(
    () => ({
      fontSize: fontSize,
      fontFamily: fontFamily.medium,
      color: colors.text,
    }),
    [fontSize, colors.text, fontFamily.medium]
  );

// I know its unnecessarrt to use flat list here, but I want to use it for learning purposes
const contactItemsFlatList = useCallback(
  ({ item }: { item: typeof contactItems[0] }) => {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.pressableContainer,
          { opacity: pressed ? 0.5 : 1 },
        ]}
        onPress={item.onPress}
      >
        {item.icon}
        <Text style={[styles.linkText, contactTextStyle]}>
          {item.text}
        </Text>
      </Pressable>
    );
  },
  [contactTextStyle]
);

  return (
    <View>
        <FlatList
            data={contactItems}
            renderItem={contactItemsFlatList}
            keyExtractor={(item) => item.text}
            contentContainerStyle={{ paddingHorizontal: 16 }}
        />
    </View>
  );
}
);

const styles = StyleSheet.create({
  pressableContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  linkText: {
    fontWeight: "500",
    marginLeft: 12,
  },
});
