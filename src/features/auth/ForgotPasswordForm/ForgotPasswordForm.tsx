import React, { useState } from "react";
import {
  Alert,
  NativeSyntheticEvent,
  Pressable,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import { styles } from "./ForgotPasswordForm.styles";

type ForgotPasswordFormProps = {
  /** Callback opcional para submit externo */
  onSubmitSuccess?: (email: string) => void;
};

export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onSubmitSuccess }) => {
  const [email, setEmail] = useState<string>("");

  const handleChangeText = (text: string) => {
    setEmail(text);
  };

  const handleChangeEvent = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(e.nativeEvent.text);
  };

  const handleSubmit = () => {
    if (!email) {
      Alert.alert("Atenção", "Informe o e-mail cadastrado.");
      return;
    }
    Alert.alert("Pronto!", "Se estiver cadastrado, enviaremos um link de recuperação.");
    onSubmitSuccess?.(email);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Recuperar senha</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        placeholder="Digite seu e-mail cadastrado"
        value={email}
        onChangeText={handleChangeText} // tipado: (text: string) => void
        onChange={handleChangeEvent}    // tipado: NativeSyntheticEvent<TextInputChangeEventData>
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
      />

      <Pressable onPress={handleSubmit} style={styles.submit}>
        <Text style={styles.submitText}>ENVIAR LINK</Text>
      </Pressable>
    </View>
  );
};
