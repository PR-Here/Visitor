import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";
import { FontName, FontSize } from "../utils/FontName";
import { MyColor } from "../utils/MyColor";
import { MyImage } from "../utils/MyImage";

interface Props {
  title: string;
  onPress: () => void;
  colors: string[];
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  rightIcon: boolean;
  leftIcon: boolean;
  // rightIconStyle: ViewStyle;
  leftIconStyle: ViewStyle;
}

const MyButton: React.FC<Props> = ({
  title,
  onPress,
  colors,
  containerStyle,
  titleStyle,
  rightIcon,
  leftIcon,
  leftIconStyle
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <LinearGradient colors={colors} style={[styles.button, containerStyle]}>
        {rightIcon ? (
          <Image
            style={[styles.rightImage]}
            resizeMode="contain"
            source={MyImage.RIGHT}
          />
        ) : null}
        <Text style={[styles.title, titleStyle,]}>{title}</Text>
        {leftIcon ? (
          <Image
            style={[styles.leftImage,leftIconStyle]}
            resizeMode="contain"
            source={MyImage.LEFT}
          />
        ) : null}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: hp(0.5),
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    flexDirection: "row",
    width: wp(30),
    borderWidth: hp(0.2),
    borderColor: MyColor.GREY,
    backgroundColor: "transparent",
    height: hp(6),
  },
  title: {
    color: MyColor.GREEN,
    backgroundColor: "transparent",
    fontFamily: FontName.SEN_BOLD,
  },
  leftImage: {
    width: wp(8),
    height: hp(8),
    position: "absolute",
    right: hp(0),
    tintColor: MyColor.GREEN,
  },
  rightImage: {
    width: wp(8),
    height: hp(8),
    position: "absolute",
    left: hp(0.1),
    tintColor: MyColor.GREEN,
  },
});

export default MyButton;
