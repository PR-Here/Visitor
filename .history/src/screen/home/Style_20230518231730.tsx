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
  scanQrTextText:{
    fontFamily: FontName.SEN,
    fontSize: FontSize.ONE_POINT_SEVEN,
    textAlign: "center",
    color: MyColor.BLACK,
    marginTop: hp(3), 
  },
  appLogo: {
    width: wp(20),
    height: hp(12),
    alignSelf: "center",
    marginTop:hp(10)
  },
  vizmoText: {
    fontFamily: FontName.SEN_BOLD,
    fontSize: FontSize.THREE,
    textAlign: "center",
    color: MyColor.BLACK,
  },
});

export default Styles;
