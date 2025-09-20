import { tokens } from "@/src/theme/tokens";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type EditFieldModalStyles = {
  field: ViewStyle;
  label: TextStyle;
  input: TextStyle;
  inputEditing: ViewStyle;
  modalOverlay: ViewStyle;
  modalContent: ViewStyle;
  modalTitle: TextStyle;
  modalActions: ViewStyle;
  cancelButton: ViewStyle;
  cancelButtonText: TextStyle;
  modalInput: TextStyle;
  showPasswordBtn: ViewStyle;
  saveButton: ViewStyle;
  saveButtonText: TextStyle;
  inputWrapper: ViewStyle;
};

export const styles = StyleSheet.create<EditFieldModalStyles>({
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
    height: 48,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: tokens.byteColorOverlay,
    padding: 10,
  },
  modalContent: {
    width: "100%",
    backgroundColor: tokens.byteBgDefault,
    borderRadius: 12,
    padding: 20,
    marginTop: 120,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#222",
    textAlign: "center",
  },
  modalInput: {
    borderWidth: 1,
    borderColor: tokens.byteGray100,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: tokens.byteTextMediumGray,
    marginBottom: 12,
  },
  showPasswordBtn: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -11 }],
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 12,
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: tokens.byteGray200,
  },
  cancelButtonText: {
    fontSize: 15,
    color: tokens.byteTextMediumGray,
  },
  saveButton: {
    backgroundColor: tokens.byteColorGreen500,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  saveButtonText: {
    fontSize: 15,
    color: tokens.byteColorWhite,
  },
});
