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
  const [toggleCheckBoxOtherPerson, setOtherPersonToggleCheckBox] = useState(
    false
  );
  const [toggleCheckBoxSomeOption, setSomeOptionToggleCheckBox] = useState(
    false
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailName] = useState("");
  const [comanyName, setComanyName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isFocused, setIsfocused] = useState("");

  const handlePress = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (firstName == "") {
      setIsValid(false);
      setIsfocused("name");
    } else if (lastName == "") {
      setIsValid(false);
      setIsfocused("last");
    } else if (emailId == "") {
      setIsValid(false);
      setIsfocused("email");
    } else if (!emailPattern.test(emailId)) {
      setIsValid(false);
      setIsfocused("email");
    } else if (comanyName == "") {
      setIsValid(false);
      setIsfocused("company");
    } else if (!toggleCheckBoxNo && !toggleCheckBoxYes) {
      setIsValid(false);
      setError("Please select the company laptop option.");
    } else {
      setError("");
      setIsValid(true);
      const data = {
        name: `${firstName} ${lastName}`,
        email: emailId,
        comanyName: comanyName,
      };
      navigation.navigate(MyString.My_Visit_Summary, { formData: data });
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
              style={[
                Styles.textInput,
                {
                  borderColor:
                    isFocused == "name" ? MyColor.GREEN : MyColor.GREY,
                  borderWidth: isFocused == "name" ? 2 : 1,
                },
              ]}
              placeholder="first name"
              onChangeText={(e) => setFirstName(e)}
              onFocus={() => setIsfocused("name")}
              onBlur={() => setIsfocused("")}
            />
          </View>
          {/* last Name View */}
          <View style={Styles.firstNameView}>
            <Text style={Styles.firstNameText}>Last Name</Text>
            <TextInput
              returnKeyType="done"
              style={[
                Styles.textInput,
                {
                  borderColor:
                    isFocused == "last" ? MyColor.GREEN : MyColor.GREY,
                  borderWidth: isFocused == "last" ? 2 : 1,
                },
              ]}
              placeholder="last name"
              onChangeText={(e) => setLastName(e)}
              onFocus={() => setIsfocused("last")}
              onBlur={() => setIsfocused("")}
            />
          </View>
        </View>
        {/* Email ID */}
        <View style={Styles.emailView}>
          <Text style={Styles.firstNameText}>Email Id</Text>
          <TextInput
            keyboardType="email-address"
            style={[
              Styles.textInput,
              {
                borderColor:
                  isFocused == "email" ? MyColor.GREEN : MyColor.GREY,
                borderWidth: isFocused == "email" ? 2 : 1,
              },
            ]}
            placeholder="Email Id"
            returnKeyType="done"
            onChangeText={(e) => setEmailName(e)}
            onFocus={() => setIsfocused("email")}
            onBlur={() => setIsfocused("")}
          />
        </View>
        {/* Company Name */}
        <View style={Styles.emailView}>
          <Text style={Styles.firstNameText}>Company Name</Text>
          <TextInput
            returnKeyType="done"
            style={[
              Styles.textInput,
              {
                borderColor:
                  isFocused == "company" ? MyColor.GREEN : MyColor.GREY,
                borderWidth: isFocused == "company" ? 2 : 1,
              },
            ]}
            placeholder="Company Name"
            onChangeText={(e) => setComanyName(e)}
            onFocus={() => setIsfocused("company")}
            onBlur={() => setIsfocused("")}
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
                setNoToggleCheckBox(false);
                setYesToggleCheckBox(true);
                setOtherPersonToggleCheckBox(false);
                setSomeOptionToggleCheckBox(false);
              }}
            />
            <Text style={[Styles.firstNameText, { marginLeft: 10 }]}>Yes</Text>
          </View>
          {/* No Checkbox */}
          <View style={Styles.checkBoxView}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxNo}
              onValueChange={(newValue) => {
                setIsValid(true);
                setError("");
                setNoToggleCheckBox(true);
                setOtherPersonToggleCheckBox(false);
                setSomeOptionToggleCheckBox(false);
                setYesToggleCheckBox(false);
              }}
            />
            <Text style={[Styles.firstNameText, { marginLeft: 10 }]}>No</Text>
          </View>
          {/* Other Person */}
          <View style={Styles.checkBoxView}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxOtherPerson}
              onValueChange={(newValue) => {
                setIsValid(true);
                setError("");
                setNoToggleCheckBox(false);
                setYesToggleCheckBox(false);
                setOtherPersonToggleCheckBox(true);
                setSomeOptionToggleCheckBox(false);
              }}
            />
            <Text style={[Styles.firstNameText, { marginLeft: 10 }]}>
              Other Option
            </Text>
          </View>
          {/* Some Option */}
          <View style={Styles.checkBoxView}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxSomeOption}
              onValueChange={(newValue) => {
                setIsValid(true);
                setError("");
                setNoToggleCheckBox(false);
                setYesToggleCheckBox(false);
                setOtherPersonToggleCheckBox(false);
                setSomeOptionToggleCheckBox(true);
              }}
            />
            <Text style={[Styles.firstNameText, { marginLeft: 10 }]}>
              Some Option
            </Text>
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
          colors={[MyColor.TRANS, MyColor.TRANS]}
          title="Back"
          containerStyle={Styles.backButton}
          leftIcon={false}
          rightIcon={true}
          leftIconStyle={{ tintColor: "white" }}
          titleStyle={{}}
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
          leftIconStyle={{ tintColor: "white" }}
          titleStyle={Styles.nextBtnText}
          
        />
      </View>
    </SafeAreaView>
  );
}
