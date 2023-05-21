import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import Styles from "../screen/home/Style";
import { FontName } from "./FontName";
import { MyColor } from "./MyColor";

interface props {
  show: boolean;
}

const AppLoader: React.FC<props> = ({ show }) => {
  return <>{show ? <ActivityIndicator style={styles.loader} /> : null}</>;
};
export default AppLoader;
const styles = StyleSheet.create({
  loader: {
    color: MyColor.GREEN,
    position: "absolute",
    alignSelf: "center",
  },
  waitText: {
    fontFamily: FontName.SEN_BOLD,
  },
});
