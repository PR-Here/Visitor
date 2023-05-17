import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { MyImage } from "../utils/MyImage";
import { MyColor } from "../utils/MyColor";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MyString } from "../utils/MyString";

export default function InitialLoading({ navigation }) {

  useEffect(() => {
    handleClearStack()
  }, []);

  const handleClearStack = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: MyString.HomeFirst }],
    });
  };


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={MyImage.LOGO} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColor.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: hp(12),
    height: hp(12),
  },
});
