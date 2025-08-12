import React from "react";
import { Slot, usePathname } from "expo-router";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Header } from "../src/features/layout/Header";
import { Footer } from "../src/features/layout/Footer";
import { tokens } from "../src/theme/tokens";

export default function RootLayout() {
  const pathname = usePathname();
  const isDashboard =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/meus-cartoes") ||
    pathname.startsWith("/investments") ||
    pathname.startsWith("/outros-servicos");

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: isDashboard ? tokens.byteBgDashboard : tokens.byteBgDefault }]}>
      <Header />
      <View style={styles.content}>
        <Slot />
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { flex: 1 },
});