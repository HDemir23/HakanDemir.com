import { useThemeColors } from "@/constants/theme";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

type MailProps = {
  onSend?: (data: { email: string; message: string }) => void;
};

export default function Mail({ onSend }: MailProps) {
  const colors = useThemeColors();
  const [message, setMessage] = useState("");
  const [senderMail, setSenderMail] = useState("");

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
  }
};

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={[
          styles.input,
          {
            color: colors.text,
            borderColor: colors.text,
          },
        ]}
        placeholder="Your Email Address"
        placeholderTextColor={colors.text + "66"}
        value={senderMail}
        onChangeText={setSenderMail}
      />
      <TextInput
        style={[
          styles.input,
          {
            color: colors.text,
            borderColor: colors.text,
          },
        ]}
        placeholder="Message me"
        placeholderTextColor={colors.text + "66"}
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      <View style={[styles.button, { backgroundColor: colors.button }]}>
        <Button title="Gönder" onPress={handleSend} color={colors.primary} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginLeft: 12,
    minWidth: 220,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    textAlignVertical: "top",
  },
  button: {
    marginTop: 8,
    borderRadius: 8,
  },
});
