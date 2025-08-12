import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { tokens } from "../../theme/tokens";
import { LoginForm } from "../auth/LoginForm";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>
          Experimente mais liberdade no controle da sua vida financeira.
        </Text>
        <Text style={styles.heroSubtitle}>Crie sua conta com a gente!</Text>
      </View>
      <LoginForm />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, gap: 16, padding: 16, backgroundColor: tokens.byteBgDefault },
  hero: {
    width: "100%",
    paddingVertical: 24,
    alignItems: "center",
    backgroundColor: "#eef6f5",
    borderRadius: 12,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: tokens.byteColorDash,
  },
  heroSubtitle: {
    marginTop: 8,
    fontSize: 16,
    color: tokens.byteTextMediumGray,
  },
});