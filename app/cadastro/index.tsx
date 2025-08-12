import React from "react";
import { View, StyleSheet } from "react-native";
import { tokens } from "../../src/theme/tokens";
import { SignupForm } from "../../src/features/auth/SignupForm";

export default function CadastroPage() {
  return (
    <View style={styles.container}>
      <SignupForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: tokens.byteBgDefault },
});