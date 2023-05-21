import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontName, FontSize } from "../../utils/FontName";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  qrCodeImage: {
    height: hp(34),
    width: hp(34),
    alignSelf: "center",
  },
  scanButton: {
    width: wp("50%"),
    height: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(4),
  },
  centerText:{

  },
  textBold:{

  },
  buttonTouchable:{},
  buttonText:{},
  welcomeText:{
    fontFamily:FontName.SEN_BOLD,
    fontSize:FontSize.THREE
  }
});

export default Styles;
