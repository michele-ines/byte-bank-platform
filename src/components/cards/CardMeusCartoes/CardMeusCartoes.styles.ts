import { tokens } from "@/src/theme/tokens";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

type CardMeusCartoesStyles = {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  cardGroup: ViewStyle;
  actions: ViewStyle;
  button: ViewStyle;
  buttonOrange: ViewStyle;
  buttonBlock: ViewStyle;
  buttonText: TextStyle;
  functionText: TextStyle;
  pixelTop: ImageStyle;
  pixelBottom: ImageStyle;
};

export const styles = StyleSheet.create<CardMeusCartoesStyles>({
  container: {
    backgroundColor: tokens.byteGray200,
    padding: 16,
    minHeight: 478,
    borderRadius: 12,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 70,
    textAlign: "center",
    fontFamily: "Inter",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 8,
    textAlign: "center",
  },
  cardGroup: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 24,
    gap: 16,
  },
  actions: {
    width: "80%",
    alignItems: "center",
    gap: 12,
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonOrange: {
    backgroundColor: tokens.byteColorOrange500,
  },
  buttonBlock: {
    backgroundColor: tokens.byteGray500,
  },
  buttonText: {
    color: tokens.byteBgDefault,
    fontSize: 16,
    fontWeight: "500",
  },
  functionText: {
    fontSize: 14,
    color: tokens.byteGray500,
  },
  pixelTop: {
    position: "absolute",
    left: 0,
  },
  pixelBottom: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
});
