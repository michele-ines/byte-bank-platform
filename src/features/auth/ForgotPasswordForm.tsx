import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import { tokens } from "../../theme/tokens";

export const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    if (!email) {
      Alert.alert("Atenção", "Informe o e-mail cadastrado.");
      return;
    }
    Alert.alert("Pronto!", "Se estiver cadastrado, enviaremos um link de recuperação.");
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Recuperar senha</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        placeholder="Digite seu e-mail cadastrado"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />

      <Pressable onPress={onSubmit} style={styles.submit}>
        <Text style={styles.submitText}>ENVIAR LINK</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: 720,
    marginHorizontal: "auto",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    gap: 8,
  },
  title: { fontSize: 20, fontWeight: "700", textAlign: "center", marginBottom: 8 },
  label: { fontSize: 14, fontWeight: "600", color: tokens.byteGray800 },
  input: {
    borderWidth: 1,
    borderColor: tokens.byteGray200,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: tokens.byteColorGreen100,
  },
  submit: {
    marginTop: 12,
    backgroundColor: tokens.byteColorBlue500,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: { color: "#fff", fontWeight: "700" },
});