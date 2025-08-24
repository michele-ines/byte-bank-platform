import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { tokens } from "../../theme/tokens";
// @ts-ignore
import LoginIllustration from '../../../assets/images/login/ilustracao-login.svg';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Atenção", "Informe e-mail e senha.");
      return;
    }

    router.replace("/dashboard");
  };

  const handleCreateAccount = () => {
    router.push('/cadastro');
  };

  return (
    <View style={styles.card}>
      <LoginIllustration width={'100%'} style={styles.illustration} />

      <Text style={styles.title}>Login</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Digite seu email"
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

      <Link href="/esqueci-senha" asChild>
        <Pressable>
            <Text style={styles.forgot}>Esqueci a senha!</Text>
        </Pressable>
      </Link>
      <View style={styles.alignButtons}>
        <Pressable onPress={handleLogin} style={[styles.button, styles.submitButton]}>
          <Text style={styles.buttonText}>Acessar</Text>
        </Pressable>
        
        <Pressable onPress={handleCreateAccount} style={[styles.button, styles.createButton]}>
          <Text style={[styles.buttonText]}>Criar conta</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1, // Usa flex: 1 para ocupar todo o espaço do container pai
    justifyContent: "center", // Centraliza o conteúdo (inputs, botões, etc.) verticalmente
    backgroundColor: tokens.byteColorGreen100,
    paddingHorizontal: 24, // Adiciona o espaçamento apenas nas laterais
    gap: 12,
  },
  illustration: {
    width: '100%',
    marginBottom: 16,
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 16,
    color: tokens.byteGray800,
  },
  label: { 
    fontSize: 16, 
    fontWeight:"bold", 
    color: tokens.byteGray800,
    marginBottom: -4,
  },
  input: {
    borderWidth: 1,
    borderColor: tokens.byteGray200,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: tokens.byteColorGreen100,
  },
  forgot: { 
    color: tokens.byteColorGreen500,
    textAlign: "left",
    fontWeight: '600',
    marginTop: 4,
    marginBottom: 16,
    textDecorationLine: 'underline'
  },
  button: {
    width:144,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  alignButtons:{
    alignItems:'center'
  },
  submitButton: {
    backgroundColor: tokens.byteColorGreen500,
  },
  createButton: {
    backgroundColor: tokens.byteColorOrange500,
  },
  buttonText: { 
    color: "#fff", 
    fontWeight: "bold",
    fontSize: 16,
  },
});