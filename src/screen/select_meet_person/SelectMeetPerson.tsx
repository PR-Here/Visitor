import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import MyButton from "../../component/MyButton";
import MyErrorMsg from "../../component/MyErrorMsg";
import { Styles } from "./Style";
import Header from "../../component/Header";
import { MyColor } from "../../utils/MyColor";
import { MyString } from "../../utils/MyString";
import { Dropdown } from "react-native-element-dropdown";

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
    if (value == null) {
      setError("Please select the Meet Person.");
    } else {
      setError("");
      navigation.navigate(MyString.User_Personal_Form);
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header navigation={navigation} />
      <Text style={Styles.visitReasontext}>Select your meet person</Text>
      <View style={Styles.flatList}>
        <Dropdown
          style={[Styles.dropdown, isFocus && { borderColor: "green" }]}
          placeholderStyle={Styles.placeholderStyle}
          selectedTextStyle={Styles.selectedTextStyle}
          inputSearchStyle={Styles.inputSearchStyle}
          iconStyle={Styles.iconStyle}
          itemTextStyle={Styles.selectedTextStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select Person" : "..."}
          searchPlaceholder="Search Person..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      {value == null ? (
        <MyErrorMsg msg={error} show={true} style={Styles.errorMsg} />
      ) : null}
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
            value != null
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
