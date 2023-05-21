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
  },
  qrCodeImage: {
    height: hp(25),
    width: hp(25),
    alignSelf: "center",
    marginTop: hp(1),
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
    marginTop: hp(5),
  },
  scanQrTextText: {
    fontFamily: FontName.SEN,
    fontSize: FontSize.ONE_POINT_SEVEN,
    textAlign: "center",
    color: MyColor.BLACK,
    marginTop: hp(3),
  },
  appLogo: {
    width: wp(15),
    height: hp(12),
    alignSelf: "center",
    marginTop: hp(10),
  },
  vizmoText: {
    fontFamily: FontName.SEN_BOLD,
    fontSize: FontSize.THREE,
    textAlign: "center",
    color: MyColor.BLACK,
  },
  linkView: {
    marginTop: hp(3),
    alignItems: "center",
    justifyContent: "center",
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
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: hp(2),
    alignItems: "center",
    width: "25%",
    alignSelf:'center',

  },
  bottomLogo: {
    width: wp(6),
    height: hp(6),
    alignSelf: "center",
    tintColor: MyColor.GREY,
  },
  bottomAppText:{
    fontFamily:FontName.SEN_EXTRABOLD,
    color:MyColor.BLACK,
    fontSize:hp(2)
  }
});

export default Styles;
