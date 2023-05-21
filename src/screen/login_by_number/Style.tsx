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
    marginHorizontal: hp(3),
  },
  loginButton: {
    width: wp("100%"),
    height: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(10),
  },
  what_is_text: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    fontSize: hp(3),
    width: "100%",
    marginTop: hp(10),
    textAlign: "center",
  },
  tap_to_text: {
    fontFamily: FontName.SEN,
    color: MyColor.BLACK,
    marginTop: hp(4),
    fontSize: FontSize.ONE_POINT_FIVE,
    textAlign: "center",
  },
  countryCodeView: {
    width: hp(5),
    borderRightWidth: 1.6,
    borderLeftColor: MyColor.GREEN,
    height: hp(5.7),
    justifyContent: "center",
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
    borderWidth: 1.5,
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    height: hp(6),
    marginTop: hp(7),
    paddingHorizontal: 10,
    borderRadius: hp(0.4),
  },
  errorMsg: {
    marginLeft: hp(2),
    marginTop: hp(1),
  },
  continueBtn: {
    height: hp(6),
    marginTop: hp(15),
    justifyContent: "center",
  },
  backButton: {
    height: hp(6),
    marginTop: hp(15),
    justifyContent: "center",
    borderColor: MyColor.GREEN,
  },
  buttonView: {
    position: "absolute",
    bottom: hp(5),
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  buttontext: {},
});

export default Styles;
