import { useThemeColors } from "@/constants/theme";
import React, { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  TextInput,
  View,
  ActivityIndicator,
  useWindowDimensions,
  Platform,
} from "react-native";

type MailProps = {};

export default function Mail() {
  const colors = useThemeColors();
  const [message, setMessage] = useState("");
  const [senderMail, setSenderMail] = useState("");
  const [loading, setLoading] = useState(false);

  const { width } = useWindowDimensions();
  const isTabletOrWeb = width >= 768;

  const handleSend = async () => {
    if (senderMail.trim() === "" || message.trim() === "") {
      Alert.alert("Uyarı", "Lütfen tüm alanları doldurun.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(senderMail)) {
      Alert.alert("Lütfen geçerli bir e-posta adresi girin");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("https://my-cv-backend-rho.vercel.app/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: senderMail, message }),
      });

      const result = await response.json();

      if (result.success) {
        Alert.alert("Başarılı", "Mesaj gönderildi.");
        setSenderMail("");
        setMessage("");
      } else {
        Alert.alert("Hata", result.error || "Gönderilemedi.");
      }
    } catch (error) {
      Alert.alert("Hata", "Sunucuya ulaşılamadı.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor: colors.background,
          alignSelf: isTabletOrWeb ? "center" : "stretch",
          width: isTabletOrWeb ? 500 : "100%",
        },
      ]}
    >
      <TextInput
        style={[styles.input, { color: colors.text, borderColor: colors.text }]}
        placeholder="Your Email Address"
        placeholderTextColor={colors.text + "66"}
        value={senderMail}
        onChangeText={setSenderMail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.spacing} />
      <TextInput
        style={[styles.input, { color: colors.text, borderColor: colors.text }]}
        placeholder="Your Message"
        placeholderTextColor={colors.text + "66"}
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
      />
      <View style={styles.spacing} />
      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <View style={[styles.button, { backgroundColor: colors.button }]}>
          <Button title="Gönder" onPress={handleSend} color={colors.primary} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  spacing: {
    height: 12,
  },
  button: {
    marginTop: 12,
    borderRadius: 8,
  },
});