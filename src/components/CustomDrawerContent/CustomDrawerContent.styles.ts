import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { tokens } from "../../theme/tokens";

type Styles = {
  footer: ViewStyle;
  logoutButton: ViewStyle;
  logoutButtonText: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#4A7C89",
  },
  logoutButton: {
    paddingVertical: 10,
  },
  logoutButtonText: {
    fontSize: 16,
    color: tokens.byteGray100,
  },
});
