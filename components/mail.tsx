import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useThemeColors } from "@/constants/theme";
import { Colors } from "react-native/Libraries/NewAppScreen";

type MailProps = {
  onSend?: (message: string) => void;
};

export default function Mail({ onSend }: MailProps) {
  const colors = useThemeColors();
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") {
      Alert.alert("Uyarı", "Lütfen bir mesaj yazın.");
    } else {
      onSend?.(message);
      Alert.alert("Mesaj Gönderildi", "Teşekkürler!");
      setMessage("");
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
        placeholder="Mesajınızı yazın..."
        placeholderTextColor={colors.text + "66"}
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      <View style={[styles.button , {backgroundColor: colors.button}, ]}>

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