import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { auth } from "../../config/firebaseConfig";
import { tokens } from "../../theme/tokens";
// @ts-ignore
import SignupIllustration from '../../../assets/images/cadastro/ilustracao-cadastro.svg';
// @ts-ignore
import Checkbox from 'expo-checkbox';

export const SignupForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (text: string) => {
    // Expressão regular simples para validação de email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(text) && text.length > 0) {
      setEmailError("Dado incorreto. Revise e digite novamente.");
    } else {
      setEmailError("");
    }
    setEmail(text);
  };

  const handleSubmit = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Atenção", "Por favor, preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Atenção", "As senhas não coincidem.");
      return;
    }
    if (!isChecked) {
      Alert.alert("Atenção", "Você precisa aceitar os termos e condições.");
      return;
    }
    if (emailError) {
      Alert.alert("Atenção", "Por favor, corrija o email antes de continuar.");
      return;
    }

    Alert.alert("Sucesso!", "Conta criada com sucesso. Agora você pode fazer o login.");
    router.push('/');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Sucesso!", "Conta criada. Você será redirecionado para o login.");
      router.push('/');
    } catch (error: any) {
      console.error(error);
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert("Erro", "Este e-mail já está em uso.");
      } else {
        Alert.alert("Erro", "Ocorreu um erro ao criar a conta.");
      }
    }
  };

  return (
    <View style={styles.card}>
      <SignupIllustration width={'100%'} height={150} style={styles.illustration} />

      <Text style={styles.title}>Preencha os campos abaixo para criar sua conta corrente!</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        placeholder="Digite seu nome completo"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Digite seu email"
        value={email}
        onChangeText={validateEmail}
        style={[styles.input, emailError ? styles.inputError : null]}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <Text style={styles.label}>Senha</Text>
      <TextInput
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Text style={styles.label}>Confirmar Senha</Text>
      <TextInput
        placeholder="Confirme sua senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        secureTextEntry
      />

      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? tokens.byteColorGreen500 : undefined}
        />
        <Text style={styles.checkboxLabel}>
          Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.
        </Text>
      </View>

      <Pressable onPress={handleSubmit} style={[styles.button, styles.submitButton]}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#fff',
    padding: 24,
    gap: 12,
  },
  illustration: {
    alignSelf: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: tokens.byteGray800,
    lineHeight: 28,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
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
  inputError: {
    borderColor: tokens.byteColorError,
  },
  errorText: {
    color: tokens.byteColorError,
    fontSize: 12,
    marginTop: 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  checkbox: {
    marginRight: 12,
  },
  checkboxLabel: {
    flex: 1,
    color: tokens.byteTextMediumGray,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  submitButton: {
    backgroundColor: tokens.byteColorOrange500,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
