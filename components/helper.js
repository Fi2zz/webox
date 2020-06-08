import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");
export function dummy() {}
export function isFunc(input) {
  return typeof input === "function";
}
