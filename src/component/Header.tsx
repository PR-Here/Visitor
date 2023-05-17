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

export default function Header({ navigation }) {
  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity
        style={styles.imageView}
        onPress={() => navigation.goBack()}
      >
        <Image style={styles.image} source={MyImage.BACK} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: hp("5%"),
    alignItems: "flex-start",
    justifyContent: "center",
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
});
