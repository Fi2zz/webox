import React from "react";
import { View, TouchableOpacity } from "react-native";
import { dummy, isFunc } from "./helper";
const getFlexStyle = ({ justify, align, flex, flexDirection, flexWrap }) => {
  const [justifyContent, alignItems] = [justify, align].map((el) => {
    switch (el) {
      case "start":
        return "flex-start";
      case "end":
        return "flex-end";
      case "between":
        return "space-between";
      case "around":
        return "space-around";
      default:
        return el;
    }
  });

  return {
    justifyContent,
    alignItems,
    flex,
    flexDirection,
    flexWrap,
  };
};
export default function Flex(props) {
  const {
    style,
    wrap,
    justify,
    align,
    children,
    flex,
    vertical,
    direction,
    disabled,
    ...restProps
  } = props;
  const styles = [
    getFlexStyle({
      justify,
      align,
      flexDirection: vertical ? "column" : "row" || direction,
      flexWrap: wrap,
      flex,
    }),
    style,
  ];

  const { onPress, onLongPress, onPressIn, onPressOut } = restProps;
  const touchable =
    isFunc(onPress) ||
    isFunc(onLongPress) ||
    isFunc(onPressIn) ||
    isFunc(onPressOut);
  if (touchable) {
    if (disabled) {
      styles.push({
        opacity: 0.5,
      });
    }

    return (
      <TouchableOpacity
        {...restProps}
        onPress={onPress ?? dummy}
        onLongPress={onLongPress ?? dummy}
        onPressOut={onPressOut ?? dummy}
        onPressIn={onPressIn ?? dummy}
        disabled={disabled}
        style={styles}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View {...restProps} style={styles}>
      {children}
    </View>
  );
}

Flex.defaultProps = {
  direction: "row",
  wrap: "nowrap",
  justify: "start",
  align: "center",
  flex: undefined,
  vertical: false,
};
