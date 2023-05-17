import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { FontName, FontSize } from "../utils/FontName";
import { MyColor } from "../utils/MyColor";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Props {
  msg: string;
  show: boolean;
  style: ViewStyle;
}

const MyErrorMsg: React.FC<Props> = ({ show, msg, style }) => {
  return (
    <>{show ? <Text style={[styles.text, { ...style }]}>{msg}</Text> : null}</>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FontName.SEN,
    color: MyColor.RED,
    fontSize: FontSize.ONE_POINT_SEVEN,
    textAlign: "left",
    marginLeft: hp(4.4),
    marginTop: hp(0.5),
  },
  
});
export default MyErrorMsg;
