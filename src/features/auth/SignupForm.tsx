import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import { tokens } from "../../theme/tokens";

export const SignupForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmit = () => {
    if (!name || !email || !password || !confirm) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }
    if (password !== confirm) {
      Alert.alert("Atenção", "As senhas não coincidem.");
      return;
    }
    Alert.alert("Tudo certo", "Conta criada (demo). Faça login!");
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Crie sua conta</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        placeholder="Digite seu nome completo"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
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
      <Text style={styles.label}>Confirmar senha</Text>
      <TextInput
        placeholder="Repita sua senha"
        value={confirm}
        onChangeText={setConfirm}
        style={styles.input}
        secureTextEntry
      />

      <Pressable onPress={onSubmit} style={styles.submit}>
        <Text style={styles.submitText}>CRIAR CONTA</Text>
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
    backgroundColor: tokens.byteColorOrange500,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: { color: "#fff", fontWeight: "700" },
});