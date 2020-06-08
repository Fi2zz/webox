import { StyleSheet } from "react-native";

import { width } from "./helper";

export default StyleSheet.create({
  input: {
    height: 44,
    borderBottomColor: "#ddd",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: width * 0.7,
    fontSize: 20,
  },
  button: {
    height: 44,
    backgroundColor: "rgb(255, 153, 51)",
    width: width * 0.7,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 44,
  },
});
