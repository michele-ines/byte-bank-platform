import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { tokens } from '../../theme/tokens';

export function CustomDrawerContent(props: any) {
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut(); 
  };

  return (
    <View style={{ flex: 1, backgroundColor: tokens.byteColorDash }}>
      <DrawerContentScrollView {...props}>
        {/* Removemos o header que estava aqui */}
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

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#4A7C89',
  },
  logoutButton: {
    paddingVertical: 10,
  },
  logoutButtonText: {
    fontSize: 16,
    color: tokens.byteGray100,
  },
});