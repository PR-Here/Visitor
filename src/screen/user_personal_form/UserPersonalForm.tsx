import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import MyButton from "../../component/MyButton";
import MyErrorMsg from "../../component/MyErrorMsg";
import { Styles } from "./Style";
import Header from "../../component/Header";
import { MyColor } from "../../utils/MyColor";
import { MyString } from "../../utils/MyString";
import CheckBox from "@react-native-community/checkbox";

export default function UserPersonalForm({ navigation }) {
  const [error, setError] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [toggleCheckBoxYes, setYesToggleCheckBox] = useState(false);
  const [toggleCheckBoxNo, setNoToggleCheckBox] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailName] = useState("");
  const [comanyName, setComanyName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handlePress = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (firstName == "") {
      setIsValid(false);
      setError("Please enter first name.");
    } else if (lastName == "") {
      setIsValid(false);
      setError("Please enter last name.");
    } else if (emailId == "") {
      setIsValid(false);
      setError("Please enter email id.");
    } else if (!emailPattern.test(emailId)) {
      setIsValid(false);
      setError("Please enter a valid email id.");
    } else if (comanyName == "") {
      setIsValid(false);
      setError("Please enter company name.");
    } else if (!toggleCheckBoxNo && !toggleCheckBoxYes) {
      setIsValid(false);
      setError("Please select the laptop option.");
    } else {
      setError("");
      setIsValid(true);
      navigation.navigate(MyString.My_Visit_Summary)
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  useEffect(() => {}, [toggleCheckBoxNo, toggleCheckBoxYes]);

  return (
    <SafeAreaView style={Styles.container}>
      <Header navigation={navigation} />
      <Text style={Styles.visitReasontext}>Personal Information</Text>
      <View style={Styles.flatList}>
        {/* Name View */}
        <View style={Styles.nameView}>
          {/* First Name */}
          <View style={Styles.firstNameView}>
            <Text style={Styles.firstNameText}>First Name</Text>
            <TextInput
              returnKeyType="done"
              style={Styles.textInput}
              placeholder="name"
              onChangeText={(e) => setFirstName(e)}
            />
          </View>
          {/* last Name View */}
          <View style={Styles.firstNameView}>
            <Text style={Styles.firstNameText}>Last Name</Text>
            <TextInput
              returnKeyType="done"
              style={Styles.textInput}
              placeholder="name"
              onChangeText={(e) => setLastName(e)}
            />
          </View>
        </View>
        {/* Email ID */}
        <View style={Styles.emailView}>
          <Text style={Styles.firstNameText}>Email Id</Text>
          <TextInput
            keyboardType="email-address"
            style={Styles.textInput}
            placeholder="Email Id"
            returnKeyType="done"
            onChangeText={(e) => setEmailName(e)}
          />
        </View>
        {/* Company Name */}
        <View style={Styles.emailView}>
          <Text style={Styles.firstNameText}>Company Name</Text>
          <TextInput
            returnKeyType="done"
            style={Styles.textInput}
            placeholder="Company Name"
            onChangeText={(e) => setComanyName(e)}
          />
        </View>
        {/* Company Laptop */}
        <View style={Styles.emailView}>
          <Text style={Styles.firstNameText}>
            Are you carrying Company Laptop?
          </Text>
          {/* Yes Checkbox */}
          <View style={Styles.checkBoxView}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxYes}
              onValueChange={(newValue) => {
                setIsValid(true);
                setError("");
                setNoToggleCheckBox(!newValue);
                setYesToggleCheckBox(newValue);
              }}
            />
            <Text style={Styles.firstNameText}>Yes</Text>
          </View>
          {/* No Checkbox */}
          <View style={Styles.checkBoxView}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxNo}
              onValueChange={(newValue) => {
                setIsValid(true);
                setError("");
                setNoToggleCheckBox(newValue);
                setYesToggleCheckBox(!newValue);
              }}
            />
            <Text style={Styles.firstNameText}>No</Text>
          </View>
        </View>
      </View>
      {!isValid ? (
        <MyErrorMsg msg={error} show={true} style={Styles.errorMsg} />
      ) : null}
      {/* Button View */}
      <View style={Styles.buttonView}>
        {/* Back Button */}
        <MyButton
          onPress={handleBackPress}
          colors={[MyColor.BLACK, MyColor.BLACK]}
          title="Back"
          containerStyle={Styles.nextButton}
        />
        {/* Next Button */}
        <MyButton
          onPress={handlePress}
          colors={
            isValid
              ? [MyColor.GREEN, MyColor.GREEN]
              : [MyColor.GREY, MyColor.GREY]
          }
          title="Next"
          containerStyle={Styles.nextButton}
        />
      </View>
    </SafeAreaView>
  );
}
