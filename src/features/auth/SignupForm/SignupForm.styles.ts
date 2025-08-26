import { tokens } from "@/src/theme/tokens";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

type SignupFormStyles = {
  card: ViewStyle;
  illustration: ImageStyle;
  title: TextStyle;
  label: TextStyle;
  input: TextStyle;
  inputError: TextStyle;
  errorText: TextStyle;
  checkboxContainer: ViewStyle;
  checkbox: ViewStyle;
  checkboxLabel: TextStyle;
  button: ViewStyle;
  submitButton: ViewStyle;
  buttonText: TextStyle;
};

export const styles = StyleSheet.create<SignupFormStyles>({
  card: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 24,
    gap: 12,
  },
  illustration: {
    alignSelf: "center",
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
    flexDirection: "row",
    alignItems: "center",
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
