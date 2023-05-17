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
  dottedView: {
    borderStyle: "dotted",
    height: hp(30),
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: hp(5),
    justifyContent: "center",
    alignItems: "center",
  },
  uploadtext: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    fontSize: FontSize.TWO,
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
  nextButton: {
    width: wp(40),
    height: hp(6),
    alignSelf: "flex-end",
  },
  profileCameraImage: {
    height: hp(30),
    width: "100%",
    justifyContent: "center",
    alignItems:'center'
  },
});
