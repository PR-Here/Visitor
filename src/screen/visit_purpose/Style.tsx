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
    marginHorizontal: hp(3),
    paddingTop: hp(2),
  },
  visitReasontext: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    fontSize: hp(3),
    width: "100%",
    marginTop: hp(10),
    textAlign: "center",
  },
  tochableView: {
    height: hp(6),
    borderRadius: hp(1),
    borderWidth: 1,
    margin: 5,
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
    bottom: hp(20),
    fontSize: FontSize.TWO_POINT_eight,
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
