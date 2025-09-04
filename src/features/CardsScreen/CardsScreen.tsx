import CardMeusCartoes from "@/src/components/cards/CardMeusCartoes/CardMeusCartoes";
import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./CardsScreen.styles";

const CardsScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meus cartões</Text>
      <Text>Configure e bloqueie seus cartões por aqui.</Text>
      <CardMeusCartoes />
    </ScrollView>
  );
};

export default CardsScreen;
