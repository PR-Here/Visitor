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

export default function WelcomeLastScanner({ navigation }) {
  const [ShowScanner, setShowScanner] = useState(false);

  const handlePress = () => {
    handleClearStack();
  };

  const handleClearStack = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: MyString.HomeFirst }],
    });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.logoView}>
        <Image
          resizeMode="contain"
          style={Styles.appLogo}
          source={MyImage.LOGO}
        />
        <Text style={Styles.AppText}>Vizmo</Text>
      </View>
      <View>
        <Text style={Styles.welcomeText}>Welcome!</Text>
        <Text style={Styles.userNameText}>Jorgen Henddeiksen</Text>
        <Image style={Styles.qrCodeImage} source={MyImage.QRCODE} />
        {/* Link View */}
        <View style={Styles.linkView}>
          <Text style={Styles.withoutLinkText}>
            Scan the QR code sent to you at the premises kiosk to checkout
            safety, Or click on the link sent to you an SMS/Email. Click on
            <Text
              onPress={() => Linking.openURL("https://vizmo.in/")}
              style={Styles.linkText}
            >
              {` touchless.Vizmo.in`}
            </Text>
          </Text>
        </View>
      </View>

      {/* Button View */}
      <View style={Styles.buttonView}>
        {/* Back Button */}
        <MyButton
          onPress={handleClearStack}
          colors={[MyColor.TRANS, MyColor.TRANS]}
          title="Home"
          containerStyle={Styles.backButton}
          rightIcon={true}
          leftIcon={false}
          titleStyle={{}}
          leftIconStyle={{}}
        />
        {/* Next Button */}
        <MyButton
          onPress={handlePress}
          colors={[MyColor.GREEN, MyColor.GREEN]}
          title="Done"
          containerStyle={Styles.nextButton}
          rightIcon={false}
          leftIcon={true}
          leftIconStyle={{ tintColor: "white" }}
          titleStyle={Styles.nextBtnText}
        />
      </View>
    </SafeAreaView>
  );
}
