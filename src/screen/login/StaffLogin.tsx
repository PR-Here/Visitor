import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import { Styles } from "./Style";
import Header from "../../component/Header";
import MyButton from "../../component/MyButton";
import { MyColor } from "../../utils/MyColor";
import { MyString } from "../../utils/MyString";
import MyErrorMsg from "../../component/MyErrorMsg";

export default function Login({ navigation }) {
  const [error, setError] = useState("");
  const [errorPassword, setPasswordError] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleClick = () => {
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
      setPasswordError("");
      setError("");
      navigation.navigate(MyString.Visit_Purpose);
    }

    console.log(userName, password, isValid);
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
      />
      {errorPassword ? (
        <MyErrorMsg show={true} msg={errorPassword} style={Styles.errorMsg} />
      ) : null}
      <Text onPress={() => {navigation.navigate(MyString.Forgot_Password)}} style={Styles.forgotText}>
        Forgot Password?
      </Text>
      <MyButton
        title="Login"
        colors={[MyColor.GREEN, MyColor.GREEN]}
        onPress={handleClick}
        containerStyle={Styles.loginBtn}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
