import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import MyButton from "../../component/MyButton";
import MyErrorMsg from "../../component/MyErrorMsg";
import { Styles } from "./Style";
import Header from "../../component/Header";
import { MyColor } from "../../utils/MyColor";
import { MyString } from "../../utils/MyString";
import { Dropdown } from "react-native-element-dropdown";
import { MyImage } from "../../utils/MyImage";

export default function SelectMeetPerson({ navigation }) {
  const [error, setError] = useState("");
  const data = [
    { label: "Jack", value: "1" },
    { label: "Mack", value: "2" },
    { label: "Pater", value: "3" },
    { label: "Alex", value: "4" },
    { label: "Mohan", value: "5" },
    { label: "Lucy", value: "6" },
    { label: "Max", value: "7" },
    { label: "Tom", value: "8" },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handlePress = () => {
    // if (value == null) {
    //   setError("Please select the Meet Person.");
    // } else {
    setError("");
    navigation.navigate(MyString.User_Personal_Form);
    // }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header navigation={navigation} />
      <Text style={Styles.visitReasontext}>Select your meet person</Text>
      <View style={Styles.flatList}>
        <Image source={MyImage.SEARCH} style={Styles.searchImage} />
        <TextInput style={Styles.textInput} placeholder="Search by name" />
      </View>
      {value == null ? (
        <MyErrorMsg msg={error} show={true} style={Styles.errorMsg} />
      ) : null}
      {/* Button View */}
      <View style={Styles.buttonView}>
        {/* Back Button */}
        <MyButton
          title="Back"
          onPress={handleBackPress}
          colors={[MyColor.TRANS, MyColor.TRANS]}
          containerStyle={Styles.backButton}
          rightIcon={true}
          leftIcon={false}
          leftIconStyle={{}}
        />

        {/* Next Button */}
        <MyButton
          title="Continue"
          onPress={handlePress}
          colors={[MyColor.GREEN, MyColor.GREEN]}
          containerStyle={Styles.continueBtn}
          rightIcon={false}
          leftIcon={true}
          leftIconStyle={{ tintColor: "white" }}
          titleStyle={Styles.nextBtnText}
        />
      </View>
    </SafeAreaView>
  );
}
