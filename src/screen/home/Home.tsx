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
          {/* App logo */}
          <Image
            style={Styles.appLogo}
            resizeMode="contain"
            source={MyImage.LOGO}
          />
          <Text style={Styles.vizmoText}>Vizmo</Text>
          <Text style={Styles.welcomeText}>Welcomes you</Text>
          <Text style={Styles.scanQrTextText}>Scan QR</Text>
          <Image style={Styles.qrCodeImage} source={MyImage.QRCODE} />
          <Text style={Styles.scanQrTextText}>Or</Text>
          {/* Link View */}
          <View style={Styles.linkView}>
            <View style={Styles.openLinkView}>
              <Text style={Styles.withoutLinkText}>Open</Text>
              <Text onPress={()=>navigation.navigate(MyString.Login_by_phone)} style={Styles.linkText}>touchless.Vizmo.in</Text>
              <Text style={Styles.withoutLinkText}>on your</Text>
            </View>
            <Text style={Styles.withoutLinkText}>
              mobile browser to check in using your mobile phone.
            </Text>
          </View>
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

      {/* Bottom Logo */}
      <View style={Styles.bottomView}>
        <Image
          style={Styles.bottomLogo}
          resizeMode="contain"
          source={MyImage.LOGO}
        />
        <Text style={Styles.bottomAppText}>Vizmo</Text>
      </View>
    </SafeAreaView>
  );
}
