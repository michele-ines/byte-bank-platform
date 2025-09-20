import { tokens } from "@/src/theme/tokens";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type CardMinhaContaStyles = {
  title: TextStyle;
  field: ViewStyle;
  label: TextStyle;
  inputWrapper: ViewStyle;
  input: TextStyle;
  inputEditing: ViewStyle;
};
export const styles = StyleSheet.create<CardMinhaContaStyles>({
  title: {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 25,
    lineHeight: 30,
    color: tokens.byteColorBlack,
    marginBottom: 20,
  },
  field: {
    marginBottom: 10,
  },
  label: {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 15,
    color: tokens.byteColorBlack,
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: tokens.byteGray300,
    borderRadius: 8,
    backgroundColor: tokens.byteBgDefault,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: tokens.byteTextMediumGray,
  },
  inputEditing: {
    borderColor: tokens.byteColorGreen500,
  },
});
