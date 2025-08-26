import React from "react";
import { Text, View } from "react-native";
import { styles } from "./DashboardScreen.styles";

const DashboardScreen: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <View style={styles.balance}>
          <Text style={styles.balanceLabel}>Saldo</Text>
          <Text style={styles.balanceValue}>R$ 0,00</Text>
        </View>
        {/* <Card title="Extrato" /> */}
      </View>

      <View style={styles.row}>
        {/* <Card title="Renda Fixa" value="R$ 36.000,00" />
        <Card title="Renda Variável" value="R$ 14.000,00" /> */}
      </View>
    </View>
  );
};

export default DashboardScreen;
