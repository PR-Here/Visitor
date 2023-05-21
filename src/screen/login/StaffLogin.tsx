import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import { Styles } from "./Style";
import Header from "../../component/Header";
import MyButton from "../../component/MyButton";
import { MyColor } from "../../utils/MyColor";
import { MyString } from "../../utils/MyString";
import MyErrorMsg from "../../component/MyErrorMsg";
import AppLoader from "../../utils/AppLoader";
import { StaffLogin, MOBILE_internal_Api } from "../../apiCall/ApiCall";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [error, setError] = useState("");
  const [errorPassword, setPasswordError] = useState("");
  const [userName, setUserName] = useState("mgrbiru@gmail.com");
  const [password, setPassword] = useState("123456");
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (userName == "") {
      setIsValid(false);
      setError("Please enter Username.");
    }
    if (password == "") {
      setIsValid(false);
      setPasswordError("Please enter Password.");
    } else if (password.length < 5) {
      setPasswordError("Password must be greater 5 digit.");
    }
    if (userName && password && password.length > 5) {
      setLoading(true);
      setPasswordError("");
      setError("");
      const res = await StaffLogin(password, userName);
      if (res?.statusCode == "0") {
        setLoading(false);
        const mobileApiRes = await MOBILE_internal_Api();
        console.log("RES... ", mobileApiRes);
        if (mobileApiRes?.statusCode == "0") {
          const data = {
            ...res,
            mobileApiRes,
          };
          await AsyncStorage.setItem("staffData", JSON.stringify(data));
          navigation.navigate(MyString.Login_by_phone);
        }
      } else {
        setError(res?.statusMsg);
      }
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header navigation={navigation} />
      <Text style={Styles.loginText}>Login</Text>
      {/* UserName */}
      <TextInput
        style={[
          Styles.textInputPassword,
          { borderBottomColor: error ? "red" : "black" },
        ]}
        placeholder="Username"
        keyboardType="email-address"
        returnKeyType="done"
        onChangeText={(e) => setUserName(e)}
        onFocus={() => {
          setError("");
        }}
        value={userName}
      />
      {error ? (
        <MyErrorMsg show={true} msg={error} style={Styles.errorMsg} />
      ) : null}
      {/* Password */}
      <TextInput
        style={[
          Styles.textInputPassword,
          { borderBottomColor: error ? "red" : "black" },
        ]}
        placeholder="Password"
        keyboardType="default"
        returnKeyType="done"
        secureTextEntry={true}
        onChangeText={(e) => {
          if (e.length > 5) {
            setPasswordError("");
          } else {
            setPasswordError("Password must be greater 5 digit.");
          }
          setPassword(e);
        }}
        onFocus={() => {}}
        value={password}
      />
      {errorPassword ? (
        <MyErrorMsg show={true} msg={errorPassword} style={Styles.errorMsg} />
      ) : null}
      <Text
        onPress={() => {
          navigation.navigate(MyString.Forgot_Password);
        }}
        style={Styles.forgotText}
      >
        Forgot Password?
      </Text>
      <MyButton
        title="Login"
        colors={[MyColor.GREEN, MyColor.GREEN]}
        onPress={handleClick}
        containerStyle={Styles.loginBtn}
        rightIcon={false}
        leftIcon={false}
        titleStyle={{ color: MyColor.WHITE }}
        leftIconStyle={{}}
      />
      <AppLoader show={loading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
