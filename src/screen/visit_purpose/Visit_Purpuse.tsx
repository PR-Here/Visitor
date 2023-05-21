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

export default function Visit_Purpuse({ navigation }) {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Visitor",
      isSelect: false,
    },
    {
      id: "2",
      name: "Student",
      isSelect: false,
    },
    {
      id: "3",
      name: "Interview",
      isSelect: false,
    },
    {
      id: "4",
      name: "Employee",
      isSelect: false,
    },
    {
      id: "5",
      name: "Consultant",
      isSelect: false,
    },
    {
      id: "6",
      name: "meeting",
      isSelect: false,
    },
    {
      id: "7",
      name: "Tour",
      isSelect: false,
    },
    {
      id: "8",
      name: "Interview",
      isSelect: false,
    },
    {
      id: "9",
      name: "Teacher",
      isSelect: false,
    },
    {
      id: "10",
      name: "Employee",
      isSelect: false,
    },
  ]);
  const [isSelect, setIsSelect] = useState(false);
  const [error, setError] = useState("");
  const [myIndex, setMyIndex] = useState(null);

  const _renderItem = (item: any, index: number) => {
    return (
      <TouchableOpacity
        style={[
          Styles.tochableView,
          {
            backgroundColor: myIndex == index ? MyColor.GREEN : MyColor.TRANS,
            flexBasis: `${90 / 3}%`,
          },
        ]}
        onPress={() => {
          // setData(
          //   data.map((i) =>
          //     i.id === item.id ? { ...i, isSelect: !i.isSelect } : i
          //   )
          // );
          setMyIndex(index);
          if (!item?.isSelect) {
            setIsSelect(true);
          }
        }}
      >
        <Text
          style={[
            Styles.visitName,
            { color: myIndex == index ? MyColor.WHITE : MyColor.BLACK },
          ]}
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const handlePress = () => {
    if (!isSelect) {
      setError("Please select the Purpose of Visit.");
    } else if (isSelect) {
      setError("");
      navigation.navigate(MyString.Select_Meet_Person);
    }
  };

  const handleBackClick = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header navigation={navigation} />
      <Text style={Styles.visitReasontext}>Purpose of your Visit</Text>
      <View style={Styles.flatList}>
        <FlatList
          numColumns={3}
          data={data}
          renderItem={({ item, index }) => _renderItem(item, index)}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
      {!isSelect ? (
        <MyErrorMsg msg={error} show={true} style={Styles.errorMsg} />
      ) : null}

      {/* Button View */}
      <View style={Styles.buttonView}>
        {/* Back Button */}
        <MyButton
          title="Back"
          onPress={handleBackClick}
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
          colors={
            myIndex == null
              ? [MyColor.GREY, MyColor.GREY]
              : [MyColor.GREEN, MyColor.GREEN]
          }
          containerStyle={Styles.continueBtn}
          titleStyle={{
            color: myIndex == null ? MyColor.BLACK : MyColor.WHITE,
          }}
          rightIcon={false}
          leftIcon={true}
          leftIconStyle={{
            tintColor: myIndex == null ? MyColor.BLACK : MyColor.WHITE,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
