import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MyColor } from "../../utils/MyColor";
import { FontName, FontSize } from "../../utils/FontName";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(2),
    marginHorizontal:hp(3)
  },
  loginButton: {
    width: wp("90%"),
    height: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(10),
  },
  what_is_text: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    fontSize: hp(5),
    width: "60%",
    marginTop: hp(2),
  },
  tap_to_text: {
    fontFamily: FontName.SEN,
    color: MyColor.BLACK,
    marginTop: hp(4),
    fontSize: FontSize.ONE_POINT_EIGHT,
  },
  countryCodeView: {
    width: hp(8),
  },
  countryCodeText: {
    fontFamily: FontName.SEN,
    color: MyColor.BLACK,
    fontSize: FontSize.ONE_POINT_NINE,
  },
  textInput: {
    marginLeft: hp("2%"),
    fontFamily: FontName.SEN,
    fontSize: FontSize.TWO,
    position: "absolute",
    left: hp(5),
    width: wp(60),
    color: MyColor.BLACK,
  },
  phoneView: {
    flexDirection: "row",
    borderBottomWidth: 1,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    height: hp(6),
    marginTop:hp(3)
  },
  errorMsg: {
    marginLeft: hp(0),
    marginTop: hp(1),
  },
  continueBtn: {
    width: "100%",
    height: hp(6),
    marginTop: hp(15),
  },
});

export default Styles;
