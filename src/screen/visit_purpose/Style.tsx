import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MyColor } from "../../utils/MyColor";
import { FontName, FontSize } from "../../utils/FontName";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: hp(3),
    paddingTop: hp(2),
    backgroundColor: MyColor.WHITE,
  },
  visitReasontext: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    fontSize: hp(5),
    width: "60%",
    marginTop: hp(2),
  },
  tochableView: {
    height: hp(6),
    borderRadius: 100 / 2,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: MyColor.GREY,
  },
  visitName: {
    fontFamily: FontName.SEN,
    color: MyColor.BLACK,
  },
  flatList: {
    marginTop: hp(3),
    height: hp(60),
  },
  nextButton: {
    width: "40%",
    height: hp(6),
    alignSelf: "flex-end",
  },
  errorMsg: {
    alignSelf: "center",
    margin: 5,
    marginLeft: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 110,
    fontSize: FontSize.TWO_POINT_eight,
  },
});
