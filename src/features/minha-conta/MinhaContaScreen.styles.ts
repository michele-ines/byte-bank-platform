import { tokens } from "@/src/theme/tokens";
import { StyleSheet, ViewStyle } from "react-native";

type MinhaContaStyles = {
  wrapper: ViewStyle;
  cardContainer: ViewStyle;
  illustration: ViewStyle;
  pixelBottom: ViewStyle;
  pixelTop: ViewStyle;
};

export const styles = StyleSheet.create<MinhaContaStyles>({
  wrapper: {
    flex: 1,
    backgroundColor: tokens.byteBgDashboard,
    padding: 16,
    justifyContent: "center",
  },
  cardContainer: {
    backgroundColor: tokens.byteGray200,
    borderRadius: 16,
    padding: 16,
  },
  illustration: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    zIndex: 1,
  },
  pixelTop: {
    position: "absolute",
    left: 0,
  },
  pixelBottom: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
