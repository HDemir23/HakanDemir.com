import { useThemeColors } from "@/constants/theme";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";

import { showMessage } from "@/utils/showMessage";

export default function Mail() {
  const colors = useThemeColors();
  const [message, setMessage] = useState("");
  const [senderMail, setSenderMail] = useState("");
  const [loading, setLoading] = useState(false);

  const { width } = useWindowDimensions();
  const isTabletOrWeb = width >= 768;

  const handleSend = async () => {
    if (senderMail.trim() === "" || message.trim() === "") {
      showMessage("Warning", "Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(senderMail)) {
      showMessage("Invalid Email", "Please enter a valid email address.");
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
        showMessage("Success", "Your message has been sent.");
        setSenderMail("");
        setMessage("");
      } else {
        showMessage("Error", result.error || "Failed to send your message.");
      }
    } catch (error) {
      showMessage("Error", "Unable to reach the server.");
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
          <Button title="Send" onPress={handleSend} color={colors.primary} />
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