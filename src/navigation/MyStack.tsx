import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { MyString } from "../utils/MyString";
import { createStackNavigator } from "@react-navigation/stack";
import InitialLoading from "../initialLoading/InitialLoading";
import {
  HomeQrCodeScanner,
  LoginByPhone,
  StaffLogin,
  OtpVerify,
  Visit_Purpuse,
  SelectLocation,
  Department,
  SelectMeetPerson,
  UserPersonalForm,
  VisitSummary,
  ScannerImage,
  ForgotPassword,WelcomeLastScanner
} from "../screen";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName={MyString.InitialLoading}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={MyString.HomeFirst} component={HomeQrCodeScanner} />
      <Stack.Screen name={MyString.Login_by_phone} component={LoginByPhone} />
      <Stack.Screen name={MyString.Staff_Login} component={StaffLogin} />
      <Stack.Screen name={MyString.InitialLoading} component={InitialLoading} />
      <Stack.Screen name={MyString.Otp_Verify} component={OtpVerify} />
      <Stack.Screen name={MyString.Visit_Purpose} component={Visit_Purpuse} />
      <Stack.Screen
        name={MyString.Select_Location}
        component={SelectLocation}
      />
      <Stack.Screen name={MyString.Select_Department} component={Department} />
      <Stack.Screen
        name={MyString.Select_Meet_Person}
        component={SelectMeetPerson}
      />
      <Stack.Screen
        name={MyString.User_Personal_Form}
        component={UserPersonalForm}
      />
      <Stack.Screen name={MyString.My_Visit_Summary} component={VisitSummary} />
      <Stack.Screen name={MyString.Scanner_screen} component={ScannerImage} />
      <Stack.Screen name={MyString.Forgot_Password} component={ForgotPassword} />
      <Stack.Screen name={MyString.Welcome_Last_Scanner} component={WelcomeLastScanner} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
