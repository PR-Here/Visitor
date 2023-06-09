import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState } from "react";
import Styles from "./Style";
import { MyImage } from "../../utils/MyImage";
import MyButton from "../../component/MyButton";
import { MyColor } from "../../utils/MyColor";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import { MyString } from "../../utils/MyString";
import Login from "../login/StaffLogin";

export default function Home({ navigation }) {
  const [ShowScanner, setShowScanner] = useState(false);

  const handleClick = () => {
    setShowScanner(true);
  };

  const handleGuestClick = () => {
    navigation.navigate(MyString.Login_by_phone);
  };

  const handleStaffClick = () => {
    navigation.navigate(MyString.Staff_Login);
  };
  const handleQrCodeCancelClick = () => {
    setShowScanner(false);
  };

  const onSuccess = (e: any) => {
    setShowScanner(false);
    Linking.openURL(e.data).catch((err) =>
      console.error("An error occured", err)
    );
  };
  return (
    <SafeAreaView style={Styles.container}>
      {!ShowScanner ? (
        <View>
          <Image style={Styles.qrCodeImage} source={MyImage.QRCODE} />
          <MyButton
            onPress={handleClick}
            title="Scan Qr Code"
            colors={[MyColor.GREEN, MyColor.GREEN]}
            containerStyle={Styles.scanButton}
          />
          <MyButton
            onPress={handleGuestClick}
            title="Guest Login"
            colors={[MyColor.GREEN, MyColor.GREEN]}
            containerStyle={Styles.scanButton}
          />
          <MyButton
            onPress={handleStaffClick}
            title="Staff Login"
            colors={[MyColor.GREEN, MyColor.GREEN]}
            containerStyle={Styles.scanButton}
          />
        </View>
      ) : null}
      {ShowScanner ? (
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
          showMarker
          // topContent={
          //   <Text style={Styles.centerText}>
          //    Done
          //     <Text style={Styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
          //     your computer and scan the QR code.
          //   </Text>
          // }
          bottomContent={
            <MyButton
              onPress={handleQrCodeCancelClick}
              colors={[MyColor.BLACK, MyColor.BLACK]}
              title="Cancel"
              containerStyle={Styles.scanButton}
            />
          }
        />
      ) : null}
    </SafeAreaView>
  );
}
