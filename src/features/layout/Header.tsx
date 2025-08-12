import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link, usePathname } from "expo-router";
import { tokens } from "../../theme/tokens";

type Variant = "home" | "dashboard";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const isDashboard =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/meus-cartoes") ||
    pathname.startsWith("/investments") ||
    pathname.startsWith("/outros-servicos");

  const variant: Variant = isDashboard ? "dashboard" : "home";

  return (
    <View style={[styles.container, variant === "home" ? styles.home : styles.dashboard]}>
      <Text style={styles.logo}>Bytebank</Text>
      <View style={styles.nav}>
        {variant === "home" ? (
          <>
            <NavItem href="/dashboard" label="Dashboard" />
            <NavItem href="/outros-servicos" label="Serviços" />
          </>
        ) : (
          <>
            <NavItem href="/dashboard" label="Início" />
            <NavItem href="/meus-cartoes" label="Meus cartões" />
            <NavItem href="/investments" label="Investimentos" />
            <NavItem href="/outros-servicos" label="Outros serviços" />
          </>
        )}
      </View>
      <View style={styles.cta}>
        <Link href="/cadastro" asChild>
          <Pressable style={[styles.btn, styles.openAccount]}>
            <Text style={styles.btnText}>ABRIR CONTA</Text>
          </Pressable>
        </Link>
        <Link href="/" asChild>
          <Pressable style={[styles.btn, styles.login]}>
            <Text style={styles.btnText}>Já tenho conta</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} asChild>
    <Pressable style={styles.navItem}>
      <Text style={styles.navText}>{label}</Text>
    </Pressable>
  </Link>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  home: { backgroundColor: tokens.byteColorBlack },
  dashboard: { backgroundColor: tokens.byteColorDash },
  logo: {
    color: tokens.byteColorGreen500,
    fontSize: 20,
    fontWeight: "700",
  },
  nav: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  navItem: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
  },
  navText: {
    color: tokens.byteColorGreen500,
    fontSize: 14,
    fontWeight: "600",
  },
  cta: { flexDirection: "row", gap: 8, alignItems: "center" },
  btn: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: tokens.byteColorGreen500,
  },
  openAccount: { backgroundColor: "transparent" },
  login: { backgroundColor: "transparent" },
  btnText: { color: tokens.byteColorGreen500, fontWeight: "700" },
});