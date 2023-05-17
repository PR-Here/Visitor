import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Platform,
  ImageBackground,
  PermissionsAndroid,
} from "react-native";
import React, { useState } from "react";
import { Styles } from "./Style";
import Header from "../../component/Header";
import MyButton from "../../component/MyButton";
import { MyColor } from "../../utils/MyColor";
import ImagePicker from "react-native-image-crop-picker";
import { request, PERMISSIONS } from "react-native-permissions";
import { AndroidCameraPermission } from "../../utils/Permission";
import { MyImage } from "../../utils/MyImage";
import { MyString } from "../../utils/MyString";

export default function ScannerImage({ navigation }) {
  const [profileCameraImage, setProfileCameraImage] = useState("");
  const [idCardCameraImage, setIdCardCameraImage] = useState("");

  const handlePress = () => {
    navigation.navigate(MyString.HomeFirst);
  };
  const handleBackPress = () => {
    navigation.goBack();
  };

  const requestGalleryPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "Gallery Permission",
          message:
            "App needs access to your gallery to select the gallery image.So you can upload in the App.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );

      console.log(granted);

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission granted, you can now access the gallery
        // Perform the desired actions here
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
        }).then((image) => {
          console.log(image);
        });
      } else {
        // Permission denied, handle it accordingly
      }
    } catch (error) {
      console.warn("Error requesting gallery permission:", error);
    }
  };

  const openCamera = async () => {
    const permissionStatus = await AndroidCameraPermission();
    if (permissionStatus || Platform.OS == "ios" || Platform.OS == "android") {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
        useFrontCamera: true,
      }).then((image) => {
        console.log(image);
        setProfileCameraImage(image.path);
      });
    }
  };

  const openGallery = async () => {
    requestGalleryPermission();
  };

  const showAlert = (title: string, msg: string) => {
    Alert.alert(
      title,
      msg,
      [
        { text: "Gallery", onPress: () => openGallery() },
        { text: "Camera", onPress: () => openCamera() },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header navigation={navigation} />
      {/* Camera View */}
      <View style={Styles.dottedView}>
        <ImageBackground
          style={Styles.profileCameraImage}
          source={
            profileCameraImage == "" ||
            profileCameraImage == undefined ||
            profileCameraImage == null
              ? MyImage.LOGO
              : { uri: profileCameraImage }
          }
          resizeMode="contain"
        >
          <Text
            onPress={() => {
              showAlert("Please choose", "Upload your profile Image");
            }}
            style={Styles.uploadtext}
          >
            Upload Profile Image
          </Text>
        </ImageBackground>
      </View>
      {/* Id card View */}
      <View style={Styles.dottedView}>
        <ImageBackground
          style={Styles.profileCameraImage}
          source={
            idCardCameraImage == "" ||
            idCardCameraImage == undefined ||
            idCardCameraImage == null
              ? MyImage.LOGO
              : { uri: idCardCameraImage }
          }
          resizeMode="contain"
        >
          <Text
            onPress={() => {
              showAlert("Please choose", "Upload your Id Card Image");
            }}
            style={Styles.uploadtext}
          >
            Upload Profile Image
          </Text>
        </ImageBackground>
      </View>
      {/* Button View */}
      <View style={Styles.buttonView}>
        {/* Back Button */}
        <MyButton
          onPress={handleBackPress}
          colors={[MyColor.BLACK, MyColor.BLACK]}
          title="Back"
          containerStyle={Styles.nextButton}
        />
        {/* Next Button */}
        <MyButton
          onPress={handlePress}
          colors={[MyColor.GREEN, MyColor.GREEN]}
          title="Next"
          containerStyle={Styles.nextButton}
        />
      </View>
    </SafeAreaView>
  );
}
