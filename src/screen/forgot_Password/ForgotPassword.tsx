import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import { Styles } from "./Style";
import Header from "../../component/Header";
import MyButton from "../../component/MyButton";
import { MyColor } from "../../utils/MyColor";
import { MyString } from "../../utils/MyString";
import MyErrorMsg from "../../component/MyErrorMsg";

export default function ForgotPassword({ navigation }) {
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");

  const handleClick = () => {
    if (userName == "") {
      setError("Please enter Username.");
    } else {
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
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
