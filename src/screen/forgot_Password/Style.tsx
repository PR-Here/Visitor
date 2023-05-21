import { StyleSheet } from "react-native";
import { MyColor } from "../../utils/MyColor";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { FontName, FontSize } from "../../utils/FontName";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: hp(3),
    paddingTop: hp(2),
  },
  loginText: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    fontSize: hp(5),
    width: "60%",
    marginTop: hp(2),
  },
  sendOtpBtn: {
    width: "100%",
    height: hp(6),
    marginTop: hp(14),
  },
  textInput: {
    width: "100%",
    height: hp(6),
    borderBottomWidth: 1,
    marginTop: hp(10),
    borderBottomColor: MyColor.BLACK,
    fontFamily: FontName.SEN,
    color: MyColor.BLACK,
    fontSize: FontSize.TWO,
  },
  loginBtn: {
    width: "100%",
    height: hp(6),
    marginTop: hp(14),
    alignItems:'center',
    justifyContent:'center'
  },
  errorMsg: {
    marginLeft: hp(0),
    marginTop: hp(1),
  },
});
