import React from "react";
import { Image } from "react-native";
import logo from "../assets/logo.png";

const defaults = {
  width: 510,
  height: 177,
};

const defaultRatio = defaults.width / defaults.height;
/**
 *
 * @param {size} props
 */

const transform = (width) => {
  return width / defaultRatio;
};
export function Logo({ size }) {
  const style = [
    {
      width: size,
      height: transform(size),
    },
  ];
  return <Image source={logo} style={style}></Image>;
}
