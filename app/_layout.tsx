import { Slot, usePathname } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { GlobalContextProvider } from "../src/contexts";
import { Footer } from "../src/features/layout/Footer";
import { Header } from "../src/features/layout/Header";
import { tokens } from "../src/theme/tokens";

export default function RootLayout() {
  const pathname = usePathname();
  const isDashboard =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/meus-cartoes") ||
    pathname.startsWith("/investments") ||
    pathname.startsWith("/outros-servicos");

  return (
    <GlobalContextProvider>
      <SafeAreaView style={[styles.safe, { backgroundColor: isDashboard ? tokens.byteBgDashboard : tokens.byteBgDefault }]}>
        <Header />
        <View style={styles.content}>
          <Slot />
        </View>
        <Footer />
      </SafeAreaView>
    </GlobalContextProvider>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { flex: 1 },
});