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
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import MyButton from "../../component/MyButton";
import MyErrorMsg from "../../component/MyErrorMsg";
import { Styles } from "./Style";
import Header from "../../component/Header";
import { MyColor } from "../../utils/MyColor";
import { MyString } from "../../utils/MyString";
import CheckBox from "@react-native-community/checkbox";
import { MyImage } from "../../utils/MyImage";

export default function VisitSummary({ navigation, route }) {
  console.log(route?.params);
  const { name, comanyName, email } = route?.params?.formData;
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const handlePress = () => {
    navigation.navigate(MyString.Welcome_Last_Scanner);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header navigation={navigation} />
      <Text style={Styles.visitReasontext}>Summary of your visit</Text>
      <View style={Styles.flatList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          data={[1]}
          renderItem={({ item, index }) => {
            return (
              <View style={Styles.firstNameView}>
                <View style={Styles.ImageAndTextView}>
                  <Image
                    resizeMode="contain"
                    style={Styles.profileImage}
                    source={MyImage.PLACEHOLDER}
                  />
                  <View style={Styles.profileView}>
                    <View style={Styles.logoView}>
                      <Image
                        resizeMode="contain"
                        style={Styles.appLogo}
                        source={MyImage.LOGO}
                      />
                      <Text style={Styles.AppText}>Vizmo</Text>
                    </View>
                    <Text style={Styles.userNameText}>{name}</Text>
                    <Text style={Styles.visitorText}>Visitor</Text>
                    <Text style={Styles.visitorText}>
                      Meeting : Kunal Goswami
                    </Text>
                    <Text style={Styles.visitorText}>Jan 23, 2023 2:15 am</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <Text
          onPress={() => navigation.goBack()}
          style={Styles.editDetailsText}
        >
          Edit Details
        </Text>
      </View>

      {/* Button View */}
      <View style={Styles.buttonView}>
        {/* Back Button */}
        <MyButton
          onPress={handleBackPress}
          colors={[MyColor.TRANS, MyColor.TRANS]}
          title="Back"
          containerStyle={Styles.backButton}
          rightIcon={true}
          leftIcon={false}
          titleStyle={{}}
          leftIconStyle={{}}
        />
        {/* Next Button */}
        <MyButton
          onPress={handlePress}
          colors={[MyColor.GREEN, MyColor.GREEN]}
          title="Continue"
          containerStyle={Styles.nextButton}
          rightIcon={false}
          leftIcon={true}
          leftIconStyle={{ tintColor: "white" }}
          titleStyle={Styles.nextBtnText}
        />
      </View>
    </SafeAreaView>
  );
}
