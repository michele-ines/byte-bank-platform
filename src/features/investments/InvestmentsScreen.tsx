import React from "react";
import { Text, View } from "react-native";
import { styles } from "./InvestmentsScreen.styles";

const InvestmentsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Investimentos</Text>
      <Text>Total: R$ 0,00</Text>
    </View>
  );
};

export default InvestmentsScreen;
