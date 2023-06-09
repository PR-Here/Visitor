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
    fontSize: hp(5),
    width: "60%",
    marginTop: hp(2),
  },
  tochableView: {
    borderRadius: 100 / 2,
    borderWidth: 1,
    padding: 12,
    marginTop: hp(3),
    justifyContent: "center",
    alignItems: "center",
    borderColor: MyColor.GREY,
    marginLeft: hp(1),
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
    width: wp(40),
    height: hp(6),
    flexDirection:'column'
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
  buttonView: {
    flexDirection: "row",
    width: "100%",
    height: hp(6),
    justifyContent:'space-between',
    alignItems:'center',
  },
});
