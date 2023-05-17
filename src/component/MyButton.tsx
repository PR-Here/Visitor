import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontName, FontSize } from "../utils/FontName";
import { MyColor } from "../utils/MyColor";

interface Props {
  title: string;
  onPress: () => void;
  colors: string[];
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

const MyButton: React.FC<Props> = ({
  title,
  onPress,
  colors,
  containerStyle,
  titleStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <LinearGradient colors={colors} style={[styles.button, containerStyle]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100 / 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "transparent",
    fontFamily: FontName.SEN,
  },
});

export default MyButton;
