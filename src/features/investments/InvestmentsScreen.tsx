import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { tokens } from "../../theme/tokens";

export default function InvestmentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Investimentos</Text>
      <Text>Total: R$ 0,00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: tokens.byteBgDashboard },
  title: { fontSize: 20, fontWeight: "700" },
});