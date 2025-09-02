import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./CardMinhaConta.styles";

interface UserInfo {
  name: string;
  email: string;
  password: string;
}

const initialUser: UserInfo = {
  name: "Joana da Silva Oliveira",
  email: "joanadasilvaoliveira@email.com.br",
  password: "(@79Tp6840)",
};

export function CardMinhaConta() {
  const [user, setUser] = useState<UserInfo>(initialUser);
  const [showPassword, setShowPassword] = useState(false);
  const [isEditable, setIsEditable] = useState({
    name: false,
    email: false,
    password: false,
  });

  const nameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const refs = React.useMemo(
    () => ({
      name: nameRef,
      email: emailRef,
      password: passwordRef,
    }),
    [nameRef, emailRef, passwordRef]
  );

  useEffect(() => {
    (Object.keys(isEditable) as (keyof typeof isEditable)[]).forEach(
      (field) => {
        if (isEditable[field]) refs[field].current?.focus();
      }
    );
  }, [isEditable, refs]);

  const toggleEdit = (field: keyof typeof isEditable) => {
    setIsEditable((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (field: keyof UserInfo, value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Salvar alterações:", user);
  };

  const getActiveColor = (active: boolean) => (active ? "#4CAF50" : "#444");

  const renderField = (
    label: string,
    field: keyof UserInfo,
    secure?: boolean
  ) => (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputWrapper,
          { borderColor: getActiveColor(isEditable[field]) },
        ]}
      >
        <TextInput
          ref={refs[field]}
          style={styles.input}
          editable={isEditable[field]}
          value={user[field]}
          onChangeText={(v) => handleChange(field, v)}
          secureTextEntry={secure && !showPassword}
        />
        {field === "password" && isEditable.password && (
          <TouchableOpacity
            onPress={() => setShowPassword((p) => !p)}
            style={{ marginRight: 8 }}
          >
            <MaterialIcons
              name={showPassword ? "visibility-off" : "visibility"}
              size={22}
              color={getActiveColor(showPassword)}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => toggleEdit(field)}>
          <MaterialIcons
            name="edit"
            size={22}
            color={getActiveColor(isEditable[field])}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      <Text style={styles.title}>Minha conta</Text>
      {renderField("Nome", "name")}
      {renderField("E-mail", "email")}
      {renderField("Senha", "password", true)}

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar alterações</Text>
      </TouchableOpacity>
    </View>
  );
}
