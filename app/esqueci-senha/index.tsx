import React from "react";
import { View, StyleSheet } from "react-native";
import { tokens } from "../../src/theme/tokens";
import { ForgotPasswordForm } from "../../src/features/auth/ForgotPasswordForm";

export default function ForgotPage() {
  return (
    <View style={styles.container}>
      <ForgotPasswordForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: tokens.byteBgDefault },
});