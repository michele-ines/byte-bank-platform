import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { tokens } from "../../theme/tokens";
import { styles } from "./CustomDrawerContent.styles";

export function CustomDrawerContent(props: any) {
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  return (
    <View style={{ flex: 1, backgroundColor: tokens.byteColorDash }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <Pressable onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </Pressable>
      </View>
    </View>
  );
}
