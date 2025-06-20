import { useMemo } from "react";
import { useThemeColors } from "@/constants/ThemeProvider";
import { TextStyle, ViewStyle } from "react-native";

export const useCardStyles= () => {

    const colors = useThemeColors()

    const container: ViewStyle = useMemo(
        () => ({
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "nowrap",
            gap: 12,
        }),
        [colors]
    )

    const webWrap: ViewStyle = useMemo(
        () => ({
            flexWrap: "wrap",
            justifyContent: "center",
        }),
        [colors]
    )

    const cardWrapper: ViewStyle = useMemo(
        () => ({
            marginVertical: 10,
            paddingHorizontal: 8,
            width: "100%",
        }),
        [colors]
    )

    const card: ViewStyle = useMemo(
        () => ({
            borderRadius: 20,
            padding: 20,
            elevation: 4,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
        }),
        [colors]
    )

    const cardMobile: ViewStyle = useMemo(
        () => ({
            width: "100%",
        }),
        [colors]
    )

    const cardTablet: ViewStyle = useMemo(
        () => ({
            width: "48%",
            minWidth: 300,
        }),
        [colors]
    )

    const cardWeb: ViewStyle = useMemo(
        () => ({
            width: "31.5%",
            minWidth: 320,
            maxWidth: 360,
        }),
        [colors]
    )
    const header: ViewStyle = useMemo(
        () => ({
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
        }),
        [colors]
    )
    const icon: ViewStyle = useMemo(
        () => ({
            marginRight: 12,
        }),
        [colors]
    )

    const divider: ViewStyle = useMemo(
        () => ({
            height: 1,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            marginBottom: 16,
        }),
        [colors]
    )
    const skillsWrapper: ViewStyle = useMemo(
        () => ({
            flexDirection: "column",
            gap: 12,
        }),
        [colors]
    )
    const skillItem: ViewStyle = useMemo(
        () => ({
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
        }),
        [colors]
    )
    const skillIcon: ViewStyle = useMemo(
        () => ({
            marginRight: 10,
        }),
        [colors]
    )
    const skillText: TextStyle = useMemo(
        () => ({
            fontSize: 16,
        }),
        [colors]
    )

    return{
        container,
        webWrap,
        cardWrapper,
        card,
        cardMobile,
        cardTablet,
        cardWeb,
        header,
        icon,
        divider,
        skillsWrapper,
        skillItem,
        skillIcon,
        skillText

    }
}






