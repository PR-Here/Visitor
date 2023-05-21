import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontName, FontSize } from "../../utils/FontName";
import { MyColor } from "../../utils/MyColor";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: hp(3),
  },
  qrCodeImage: {
    height: hp(25),
    width: hp(25),
    alignSelf: "center",
    marginTop: hp(10),
  },
  scanButton: {
    width: wp("50%"),
    height: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(4),
  },
  centerText: {},
  textBold: {},
  buttonTouchable: {},
  buttonText: {},
  welcomeText: {
    fontFamily: FontName.SEN_EXTRABOLD,
    fontSize: FontSize.THREE,
    textAlign: "center",
    color: MyColor.BLACK,
  },
  userNameText: {
    fontFamily: FontName.SEN_BOLD,
    fontSize: FontSize.TWO,
    textAlign: "center",
    color: MyColor.BLACK,
    marginTop: hp(2),
  },
  scanQrTextText: {
    fontFamily: FontName.SEN,
    fontSize: FontSize.ONE_POINT_SEVEN,
    textAlign: "center",
    color: MyColor.BLACK,
    marginTop: hp(3),
  },
  vizmoText: {
    fontFamily: FontName.SEN_BOLD,
    fontSize: FontSize.THREE,
    textAlign: "center",
    color: MyColor.BLACK,
  },
  linkView: {
    marginTop: hp(10),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40,
  },
  openLinkView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  linkText: {
    fontFamily: FontName.SEN_BOLD,
    fontSize: FontSize.ONE_POINT_FIVE,
    color: MyColor.BLUE,
    marginLeft: hp(1),
    marginRight: hp(1),
  },
  withoutLinkText: {
    fontFamily: FontName.SEN_BOLD,
    fontSize: FontSize.ONE_POINT_FIVE,
    color: MyColor.BLACK,
    textAlign: "center",
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: hp(2),
    alignItems: "center",
    width: "25%",
    alignSelf: "center",
  },
  bottomLogo: {
    width: wp(6),
    height: hp(6),
    alignSelf: "center",
    tintColor: MyColor.GREY,
  },
  bottomAppText: {
    fontFamily: FontName.SEN_EXTRABOLD,
    color: MyColor.BLACK,
    fontSize: hp(2),
  },
  nextButton: {
    width: wp(40),
    height: hp(6),
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  nextBtnText: {
    color: MyColor.WHITE,
  },
  backButton: {
    height: hp(6),
    justifyContent: "center",
    borderColor: MyColor.GREEN,
    backgroundColor: MyColor.TRANS,
  },
  buttonView: {
    flexDirection: "row",
    width: "100%",
    height: hp(6),
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: hp(3),
    alignSelf: "center",
  },
  appLogo: {
    width: hp(10),
    height: hp(5),
  },
  AppText: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    textAlign: "center",
    fontSize: FontSize.ONE_POINT_EIGHT,
  },
  logoView: { position: "absolute", top: 20, right: 10 },
});

export default Styles;
