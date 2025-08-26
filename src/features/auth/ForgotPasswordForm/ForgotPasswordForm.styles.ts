import { tokens } from "@/src/theme/tokens";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

/** Tipagem avançada para styles */
type ForgotPasswordFormStyles = {
  card: ViewStyle;
  title: TextStyle;
  label: TextStyle;
  input: TextStyle;
  submit: ViewStyle;
  submitText: TextStyle;
};

export const styles = StyleSheet.create<ForgotPasswordFormStyles>({
  card: {
    width: "100%",
    maxWidth: 720,
    marginHorizontal: "auto",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    gap: 8,
  },
  title: { fontSize: 20, fontWeight: "700", textAlign: "center", marginBottom: 8 },
  label: { fontSize: 14, fontWeight: "600", color: tokens.byteGray800 },
  input: {
    borderWidth: 1,
    borderColor: tokens.byteGray200,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: tokens.byteColorGreen100,
  },
  submit: {
    marginTop: 12,
    backgroundColor: tokens.byteColorBlue500,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: { color: "#fff", fontWeight: "700" },
});
