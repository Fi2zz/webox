import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";

import { width, height } from "./helper";

const Core = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{children}</View>
      </SafeAreaView>
    </View>
  );
};
export function Container({ children, scrollable = false }) {
  return <Core>{children}</Core>;
}
