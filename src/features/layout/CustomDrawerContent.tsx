import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { tokens } from '../../theme/tokens';


export function CustomDrawerContent(props: any) {
  const handleLogout = () => {
    router.replace('/'); 
  };


  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Bytebank</Text>
        </View>


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
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: tokens.byteColorDash,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
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