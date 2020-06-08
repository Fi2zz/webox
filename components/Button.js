import React from "react";
import { Text } from "react-native";

import Flex from "./Flex";

const textSizes = {
  large: 32,
  medium: 20,
  small: 16,
};
export function Button({
  title,
  onPress,
  color,
  style,
  size = "medium",
  ...res
}) {
  const fontSize = textSizes[size] ?? textSizes.medium;

  return (
    <Flex style={style} onPress={onPress} {...res}>
      <Text style={{ color, fontSize: fontSize }}>{title}</Text>
    </Flex>
  );
}
