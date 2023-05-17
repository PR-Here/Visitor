import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Styles from "./Style";
import MyButton from "../../component/MyButton";
import OTPTextInput from "react-native-otp-textinput";
import { MyImage } from "../../utils/MyImage";
import { MyColor } from "../../utils/MyColor";
import Header from "../../component/Header";
import { MyString } from "../../utils/MyString";

export default function OtpVerify({ navigation, route }) {
  const { code, number } = route?.params;
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState("Enter 4-digit code");
  const [otp, setOtp] = useState("");
  let otpInput = useRef(null);

  // Next Button Click
  const handleClick = () => {
    // navigation.navigate("Dashboard");
    if (otp == "") {
      setError("Enter 4-digit code");
    } else if (otp.length != 4) {
      setError("Enter valid OTP");
    } else {
      navigation.navigate(MyString.Visit_Purpose)
    }
  };

  // Timer UseEffect
  useEffect(() => {
    // decrement the timer every second
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // re-send OTP when the timer reaches 0
    if (timer === 0) {
      clearInterval(interval);
    }

    // cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [timer]);

  const resendOtp = () => {
    setTimer(60); // reset the timer
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header navigation={navigation} />
      <Text style={Styles.what_is_text}>Verify Phone number</Text>
      <Text style={Styles.ChatsApp_will_Text}>{`(${code} ${number})`}</Text>

      {/* <Text style={Styles.ChatsApp_will_Text}>
        {`We sent an SMS to\n ${code} ${number}. `}
        <Text onPress={() => {}} style={Styles.wrongNotext}>
          Wrong number?
        </Text> */}
      {/* </Text> */}

      {/* Mobile Number View */}
      <View style={Styles.OtpView}>
        <OTPTextInput
          ref={otpInput}
          inputCount={4}
          autoFocus={false}
          handleTextChange={(e) => setOtp(e)}
        />
        <Text style={Styles.enterCodeText}>{error}</Text>
      </View>
      {/* Resend SMS View */}
      <View style={Styles.resendSmsView}>
        <Image style={Styles.smsImage} source={MyImage.SMS} />
        <Text
          onPress={() => {
            if (timer <= 0) resendOtp();
          }}
          style={[
            Styles.resendSmstext,
            { color: timer > 0 ? MyColor.GREY : MyColor.BLACK },
          ]}
        >
          Resend SMS
        </Text>

        {/* Timer */}
        {timer > 0 ? (
          <Text style={Styles.timerText}>{timer} seconds</Text>
        ) : (
          <Text style={Styles.timerText}>00:00</Text>
        )}
      </View>

      {/* Button View */}
      <View style={Styles.buttonView}>
        <MyButton
          title="Verify"
          colors={[MyColor.BLACK, MyColor.BLACK]}
          containerStyle={Styles.button}
          onPress={handleClick}
          titleStyle={Styles.buttonText}
        />
      </View>
    </SafeAreaView>
  );
}
