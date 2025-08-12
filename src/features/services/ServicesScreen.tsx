import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { tokens } from "../../theme/tokens";

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Outros serviços</Text>
      <Text>Em breve.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: tokens.byteBgDashboard },
  title: { fontSize: 20, fontWeight: "700" },
});