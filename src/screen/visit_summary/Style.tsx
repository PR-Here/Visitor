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
    justifyContent: "center",
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
    justifyContent: "space-between",
    marginTop: hp(2),
    elevation: 5,
    shadowColor: MyColor.GREEN,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: MyColor.WHITE,
    padding: 20,
  },
  profileView: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginLeft: hp(4),
    alignSelf: "center",
  },
  profileImage: {
    width: wp(10),
    height: hp(8),
  },
  userNameText: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    fontSize: FontSize.TWO,
    marginTop: hp(3),
  },
  visitorText: {
    fontFamily: FontName.SEN,
    color: MyColor.BLACK,
    fontSize: FontSize.ONE_POINT_FIVE,
  },
  appLogo: {
    width: hp(8),
    height: hp(5),
  },
  AppText: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    fontSize: FontSize.ONE_POINT_EIGHT,
  },
  logoView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: hp(-2),
  },
  ImageAndTextView: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    // backgroundColor: "red",
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
  editDetailsText:{
    fontFamily:FontName.SEN_BOLD,
    color:MyColor.GREEN,
    marginTop:hp(2),
    textAlign:'center',
    fontSize:FontSize.ONE_POINT_FIVE,
  }
});
