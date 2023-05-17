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

  useEffect(() => {}, [error]);

  const _renderItem = (item: any, index: number) => {
    return (
      <TouchableOpacity
        style={[
          Styles.tochableView,
          {
            borderColor: myIndex == index ? MyColor.GREEN : MyColor.GREY,
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
        <Text style={Styles.visitName}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };

  const handlePress = () => {
    if (!isSelect) {
      setError("Please select the Reason for Visit.");
    } else if (isSelect) {
      setError("");
      navigation.navigate(MyString.Select_Location);
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header navigation={navigation} />
      <Text style={Styles.visitReasontext}>Reason For Visit</Text>
      <View style={Styles.flatList}>
        <FlatList
          numColumns={3}
          data={data}
          renderItem={({ item, index }) => _renderItem(item, index)}
        />
      </View>
      {!isSelect ? (
        <MyErrorMsg msg={error} show={true} style={Styles.errorMsg} />
      ) : null}
      <MyButton
        onPress={handlePress}
        colors={
          isSelect
            ? [MyColor.GREEN, MyColor.GREEN]
            : [MyColor.GREY, MyColor.GREY]
        }
        title="Next"
        containerStyle={Styles.nextButton}
      />
    </SafeAreaView>
  );
}
