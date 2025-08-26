import { SignupForm } from "@/src/features/auth/SignupForm/SignupForm";
import React from "react";
import { View } from "react-native";
import { styles } from "./CadastroPage.styles";

const CadastroPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <SignupForm />
    </View>
  );
};

export default CadastroPage;
