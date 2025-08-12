import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import { tokens } from "../../theme/tokens";
import { Link, router } from "expo-router";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    if (!email || !password) {
      Alert.alert("Atenção", "Informe e-mail e senha.");
      return;
    }
    // Demo only: navega pro dashboard
    router.replace("/dashboard");
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        placeholder="Digite seu email cadastrado"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Link href="/esqueci-senha">
        <Text style={styles.forgot}>Esqueci a senha!</Text>
      </Link>

      <Pressable onPress={onSubmit} style={styles.submit}>
        <Text style={styles.submitText}>ACESSAR</Text>
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
  forgot: { color: tokens.byteColorDash, marginTop: 6, textAlign: "right" },
  submit: {
    marginTop: 12,
    backgroundColor: tokens.byteColorGreen500,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: { color: "#fff", fontWeight: "700" },
});