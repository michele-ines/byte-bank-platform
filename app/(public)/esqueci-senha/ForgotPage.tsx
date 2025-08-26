import { ForgotPasswordForm } from "@/src/features/auth/ForgotPasswordForm/ForgotPasswordForm";
import React from "react";
import { View } from "react-native";
import { styles } from "./ForgotPage.styles";

const ForgotPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <ForgotPasswordForm />
    </View>
  );
};

export default ForgotPage;
