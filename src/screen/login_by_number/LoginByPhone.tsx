import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import MyButton from "../../component/MyButton";
import { MyColor } from "../../utils/MyColor";
import Styles from "./Style";
import Header from "../../component/Header";
import { CountryPicker } from "react-native-country-codes-picker";
import MyErrorMsg from "../../component/MyErrorMsg";
import { MyString } from "../../utils/MyString";

export default function LoginByPhone({ navigation }) {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  // handle enter phone number
  const onChangeText = (newText: string) => {
    if (/[-,. ]/.test(newText)) {
      setError("Please enter valid Phone number.");
    } else {
      setError("");
      setMobile(newText);
    }
  };

  const handleClick = () => {
    if (mobile == "") {
      setError("Please enter Phone number.");
    } else if (mobile.length != 10) {
      setError("Please enter valid Phone number.");
    } else {
      navigation.navigate(MyString.Otp_Verify, {
        number: mobile,
        code: countryCode,
      });
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header navigation={navigation} />
      <Text style={Styles.what_is_text}>What is your Phone number</Text>
      <Text style={Styles.tap_to_text}>
        Tap "Continue" to get an SMS confirmation to help you use "Visitor App".
        We would like your Phone number.
      </Text>
      {/* Phone Number View */}
      <View
        style={[
          Styles.phoneView,
          { borderBottomColor: error ? "red" : "black" },
        ]}
      >
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={Styles.countryCodeView}
        >
          <Text style={Styles.countryCodeText}>{countryCode}</Text>
        </TouchableOpacity>
        <TextInput
          style={[Styles.textInput]}
          placeholder={"Phone number"}
          keyboardType="numeric"
          maxLength={10}
          onChangeText={(e) => onChangeText(e)}
          returnKeyType="done"
        />
      </View>
      {/* Mobile Error Msg */}
      {error || mobile.length != 10 ? (
        <MyErrorMsg show={true} msg={error} style={Styles.errorMsg} />
      ) : null}

      {/* Continue Button */}
      <MyButton
        title="Continue"
        onPress={handleClick}
        colors={
          mobile.length != 10
            ? [MyColor.GREY, MyColor.GREY]
            : [MyColor.GREEN, MyColor.GREEN]
        }
        containerStyle={Styles.continueBtn}
      />

      <CountryPicker
        lang="en"
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
        onBackdropPress={() => setShow(false)}
        style={{
          // Styles for whole modal [View]
          modal: {
            height: 500,
            backgroundColor: MyColor.WHITE,
          },
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
