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
    width: "70%",
    marginTop: hp(2),
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
    bottom: 80,
    fontSize: FontSize.TWO_POINT_eight,
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
    marginTop: hp(5),
    width: "100%",
  },
  nameView: {
    justifyContent: "space-between",
  },
  firstNameView: {
    width: "100%",
    flexDirection: "row",
    justifyContent:'space-between',
    marginTop:hp(2)
  },
  firstNameText: {
    fontFamily: FontName.SEN,
    fontSize: FontSize.ONE_POINT_EIGHT,
    color: MyColor.BLACK,
    width: "40%",
    textAlign:'left'

  },

  emailView: {
    width: "100%",
    marginTop: hp(3),
  },
  checkBoxView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: hp(1),
  },
  Colum:{
    width:10
  }
});
