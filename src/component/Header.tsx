import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MyImage } from "../utils/MyImage";
import { FontName, FontSize } from "../utils/FontName";
import { MyColor } from "../utils/MyColor";

export default function Header({ navigation }) {
  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity
        style={styles.imageView}
        onPress={() => navigation.goBack()}
      >
        <Image style={styles.image} source={MyImage.BACK} />
      </TouchableOpacity>
      {/* App Logo */}
      <View>
        <Image
          resizeMode="contain"
          style={styles.appLogo}
          source={MyImage.LOGO}
        />
        <Text style={styles.AppText}>Vizmo</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: hp("5%"),
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  image: {
    width: hp(4),
    height: hp(4),
  },
  imageView: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  appLogo: {
    width: hp(10),
    height: hp(5),
  },
  AppText: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    textAlign: "center",
    fontSize: FontSize.ONE_POINT_EIGHT,
  },
});
