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

export default function VisitSummary({ navigation }) {
  const [error, setError] = useState("");
  const [data, setData] = useState([
    {
      id: "1",
      name: "First Name",
      value: "Visitor",
    },
    {
      id: "2",
      name: "Last Name",
      value: "App",
    },
    {
      id: "3",
      name: "Email Id",
      value: "Visitor@gmail.com",
    },
    {
      id: "4",
      name: "Company Name",
      value: "Visitor.com",
    },
    {
      id: "5",
      name: "Purpose of Visit",
      value: "Interview",
    },
    {
      id: "6",
      name: "Location",
      value: "Hr Department",
    },
    {
      id: "7",
      name: "Meet Person Name",
      value: "Tom",
    },
    {
      id: "8",
      name: "Are you carrying company laptop?",
      value: "Yes",
    },
  ]);

  const handlePress = () => {
    navigation.navigate(MyString.Scanner_screen);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header navigation={navigation} />
      <Text style={Styles.visitReasontext}>Your Visit Summary</Text>
      <View style={Styles.flatList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          data={data}
          renderItem={({ item, index }) => {
            return (
              <View style={Styles.firstNameView}>
                <Text style={Styles.firstNameText}>{item?.name}</Text>
                <Text style={Styles.Colum}>:</Text>
                <Text style={Styles.firstNameText}>{item?.value}</Text>
              </View>
            );
          }}
        />
      </View>

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
          colors={[MyColor.GREEN, MyColor.GREEN]}
          title="Next"
          containerStyle={Styles.nextButton}
        />
      </View>
    </SafeAreaView>
  );
}
