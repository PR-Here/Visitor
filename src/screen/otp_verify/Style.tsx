import React from "react";

import { StyleSheet } from "react-native";
import { FontName, FontSize } from "../../utils/FontName";
import MyButton from "../../component/MyButton";
import { MyColor } from "../../utils/MyColor";
import { MyImage } from "../../utils/MyImage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp("3%"),
    marginHorizontal: hp(3),
  },
  verifyText: {
    fontFamily: FontName.SEN_BOLD,
    fontSize: FontSize.TWO,
    textAlign: "center",
    color: MyColor.GREEN,
  },
  ChatsApp_will_Text: {
    fontFamily: FontName.SEN,
    fontSize: FontSize.ONE_POINT_SEVEN,
    marginTop: hp(1),
    color: MyColor.BLACK,
    textAlign: "center",
  },
  textInput: {
    fontFamily: FontName.SEN,
    fontSize: FontSize.TWO,
  },
  button: {
    width: "100%",
    height: hp("6%"),
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.WHITE,
    fontSize: FontSize.TWO,
  },
  buttonView: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    alignSelf: "center",
  },
  wrongNotext: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.RED,
  },
  OtpView: {
    width: "100%",
    height: hp("5%"),
    marginTop: hp("5%"),
    alignSelf: "center",
  },
  enterCodeText: {
    color: MyColor.RED,
    fontFamily: FontName.SEN,
    marginTop: hp("3%"),
    textAlign: "center",
    height: hp(4),
  },
  resendSmsView: {
    width: "100%",
    justifyContent: "space-between",
    height: hp("5%"),
    marginTop: hp("15%"),
    flexDirection: "row",
    alignItems: "center",
  },
  smsImage: {
    width: 20,
    height: 20,
  },
  resendSmstext: {
    fontSize: FontSize.ONE_POINT_FIVE,
    color: MyColor.BLACK,
    fontFamily: FontName.SEN_BOLD,
    marginLeft: hp("4%"),
    position: "absolute",
  },
  timerText: {
    fontSize: FontSize.ONE_POINT_FIVE,
    color: MyColor.BLACK,
    fontFamily: FontName.SEN_BOLD,
    marginLeft: hp("2%"),
  },
  what_is_text: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    fontSize: hp(3),
    width: "100%",
    marginTop: hp(12),
    textAlign: "center",
  },
});

export default Styles;
