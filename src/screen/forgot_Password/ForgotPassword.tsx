import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Styles } from "./Style";
import Header from "../../component/Header";
import MyButton from "../../component/MyButton";
import { MyColor } from "../../utils/MyColor";
import { MyString } from "../../utils/MyString";
import MyErrorMsg from "../../component/MyErrorMsg";
import { ForgotPasswords } from "../../apiCall/ApiCall";
import AppLoader from "../../utils/AppLoader";

export default function ForgotPassword({ navigation }) {
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (userName == "") {
      setError("Please enter Username.");
    } else {
      Keyboard.dismiss();
      setLoading(true);
      const res = await ForgotPasswords(userName);
      if (res?.statusCode == "0") {
        setLoading(false);
        setError(res?.statusMsg);
      } else {
        setLoading(false);
        setError(res?.responseMsg);
      }
    }
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Header navigation={navigation} />
      <Text style={Styles.loginText}>Forgot Password</Text>
      <TextInput
        style={[
          Styles.textInput,
          { borderBottomColor: error ? "red" : "black" },
        ]}
        placeholder="Username"
        keyboardType="email-address"
        returnKeyType="done"
        onChangeText={(e) => setUserName(e)}
        onFocus={() => {
          setError("");
        }}
      />
      {error ? (
        <MyErrorMsg msg={error} style={Styles.errorMsg} show={true} />
      ) : null}
      <MyButton
        title="Send OTP"
        colors={[MyColor.GREEN, MyColor.GREEN]}
        onPress={handleClick}
        containerStyle={Styles.loginBtn}
        leftIcon={false}
        rightIcon={false}
        leftIconStyle={{}}
        titleStyle={{ color: MyColor.WHITE }}
      />
      <AppLoader show={loading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
