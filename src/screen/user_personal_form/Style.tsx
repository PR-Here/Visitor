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
    marginTop: hp(8),
    textAlign:'center'
  },

  nextButton: {
    width: wp(40),
    height: hp(6),
    alignSelf: "flex-end",
    justifyContent:'center'
  },
  errorMsg: {
    alignSelf: "center",
    margin: 5,
    marginLeft: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: hp(10),
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  firstNameView: {
    width: "40%",
  },
  firstNameText: {
    fontFamily: FontName.SEN,
    fontSize: FontSize.ONE_POINT_EIGHT,
    color: MyColor.BLACK,
  },
  textInput: {
    width: "100%",
    height: hp(6),
    fontFamily: FontName.SEN,
    fontSize: FontSize.ONE_POINT_NINE,
    color: MyColor.BLACK,
    borderRadius: hp(1),
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: hp(1),
    borderColor: MyColor.GREY,
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
  nextBtnText:{
    color:MyColor.WHITE
  },
  backButton: {
    height: hp(6),
    justifyContent: "center",
    borderColor: MyColor.GREEN,
    backgroundColor:MyColor.TRANS
  },
});
