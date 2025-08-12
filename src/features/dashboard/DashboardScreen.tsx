import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { tokens } from "../../theme/tokens";

const Card: React.FC<{ title: string; value?: string }> = ({ title, value }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    {value ? <Text style={styles.cardValue}>{value}</Text> : null}
  </View>
);

const DashboardScreen: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <View style={styles.balance}>
          <Text style={styles.balanceLabel}>Saldo</Text>
          <Text style={styles.balanceValue}>R$ 0,00</Text>
        </View>
        <Card title="Extrato" />
      </View>

      <View style={styles.row}>
        <Card title="Renda Fixa" value="R$ 36.000,00" />
        <Card title="Renda Variável" value="R$ 14.000,00" />
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  wrapper: { flex: 1, padding: 16, backgroundColor: tokens.byteBgDashboard, gap: 16 },
  row: { flexDirection: "row", gap: 16 },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    minHeight: 140,
  },
  cardTitle: { fontWeight: "700", marginBottom: 8, color: tokens.byteColorDash },
  cardValue: { fontSize: 20, fontWeight: "700" },
  balance: {
    flex: 1,
    backgroundColor: "#0a4956",
    padding: 16,
    borderRadius: 12,
    minHeight: 140,
  },
  balanceLabel: { color: "#b6dde5", fontWeight: "700" },
  balanceValue: { color: "#fff", fontSize: 24, fontWeight: "800", marginTop: 12 },
});