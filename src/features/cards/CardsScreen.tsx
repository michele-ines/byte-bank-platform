import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { tokens } from "../../theme/tokens";

export default function CardsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus cartões</Text>
      <Text>Configure e bloqueie seus cartões por aqui.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: tokens.byteBgDashboard },
  title: { fontSize: 20, fontWeight: "700" },
});