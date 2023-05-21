import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import MyButton from "../../component/MyButton";
import { MyColor } from "../../utils/MyColor";
import Styles from "./Style";
import Header from "../../component/Header";
import { CountryPicker } from "react-native-country-codes-picker";
import MyErrorMsg from "../../component/MyErrorMsg";
import { MyString } from "../../utils/MyString";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Login_By_PhoneNumber } from "../../apiCall/ApiCall";
import AppLoader from "../../utils/AppLoader";

export default function LoginByPhone({ navigation }) {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // handle enter phone number
  const onChangeText = (newText: string) => {
    if (newText.length == 10) {
      Keyboard.dismiss();
    }
    if (/[-,. ]/.test(newText)) {
      setError("Please enter valid Phone number.");
    } else {
      setError("");
      setMobile(newText);
    }
  };

  const handleClick = async () => {
    if (mobile == "") {
      setError("Please enter Phone number.");
    } else if (mobile.length != 10) {
      setError("Please enter valid Phone number.");
    } else {
      setLoading(true);
      const res = await Login_By_PhoneNumber(mobile);
      if (res?.statusCode == "0") {
        setLoading(false);
        const data = await AsyncStorage.getItem("staffData");
        const myData = JSON.parse(data);
        // if otpEnable true then navigate to the otp screen
        if (myData?.mobileApiRes?.otpEnable) {
          navigation.navigate(MyString.Otp_Verify, {
            number: mobile,
            code: countryCode,
          });
        }
        // otherwise navigate to the purpose of visiting screen
        else {
          navigation.navigate(MyString.Visit_Purpose);
        }
      } else {
        setLoading(false);
      }
    }
  };

  const handleBackClick = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header navigation={navigation} />
      <Text style={Styles.what_is_text}>Please enter your Phone number</Text>

      {/* Phone Number View */}
      <View
        style={[
          Styles.phoneView,
          { borderColor: error ? "red" : MyColor.GREEN },
        ]}
      >
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={[
            Styles.countryCodeView,
            { borderColor: error ? "red" : MyColor.GREEN },
          ]}
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

      {/* Note text */}
      <Text style={Styles.tap_to_text}>
        Note: by clicking next you agree to share and store your details with us
        for seamless future visitor experience.
      </Text>

      <View style={Styles.buttonView}>
        {/* Back Button */}
        <MyButton
          title="Home"
          onPress={handleBackClick}
          colors={[MyColor.TRANS, MyColor.TRANS]}
          containerStyle={Styles.backButton}
          rightIcon={true}
          leftIcon={false}
          leftIconStyle={{}}
        />

        {/* Next Button */}
        <MyButton
          title="Continue"
          onPress={handleClick}
          colors={
            mobile.length != 10
              ? [MyColor.GREY, MyColor.GREY]
              : [MyColor.GREEN, MyColor.GREEN]
          }
          containerStyle={Styles.continueBtn}
          titleStyle={{
            color: mobile.length != 10 ? MyColor.BLACK : MyColor.WHITE,
          }}
          rightIcon={false}
          leftIcon={true}
          leftIconStyle={{
            tintColor: mobile.length != 10 ? MyColor.BLACK : MyColor.WHITE,
          }}
        />
      </View>

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
      <AppLoader show={loading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
