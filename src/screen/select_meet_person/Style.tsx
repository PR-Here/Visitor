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

  nextButton: {
    width: wp(40),
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
    bottom: hp(15),
    fontSize: FontSize.TWO_POINT_eight,
  },
  buttonView: {
    position: "absolute",
    bottom: hp(5),
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  dropdown: {
    height: hp(6),
    borderColor: "gray",
    borderBottomWidth: 0.5,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: FontSize.TWO,
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
  },
  selectedTextStyle: {
    fontSize: FontSize.TWO,
    fontFamily: FontName.SEN,
    color: MyColor.BLACK,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: hp(7),
    fontFamily: FontName.SEN,
    color: MyColor.BLACK,
  },
  flatList: {
    marginTop: hp(10),
    height: hp(6),
    borderWidth: 1.3,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: MyColor.GREEN,
    flexDirection: "row",
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
  searchImage: {
    width: 20,
    height: 20,
  },
  textInput: {
    width: "100%",
    height: hp(6),
    paddingHorizontal: 10,
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    marginLeft: 10,
  },
  nextBtnText: {
    color: MyColor.WHITE,
  },
});
