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

export default function SelectLocation({ navigation }) {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Tower A",
      isSelect: false,
    },
    {
      id: "2",
      name: "Tower B",
      isSelect: false,
    },
    {
      id: "3",
      name: "Tower C",
      isSelect: false,
    },
    {
      id: "4",
      name: "Main Building",
      isSelect: false,
    },
    {
      id: "5",
      name: "Staff Building",
      isSelect: false,
    },
    {
      id: "6",
      name: "Tower Building",
      isSelect: false,
    },
    {
      id: "7",
      name: "Teacher Room",
      isSelect: false,
    },
    {
      id: "8",
      name: "HR Room",
      isSelect: false,
    },
    {
      id: "9",
      name: "Tower E",
      isSelect: false,
    },
    {
      id: "10",
      name: "Interview Room",
      isSelect: false,
    },
  ]);
  const [isSelect, setIsSelect] = useState(false);
  const [error, setError] = useState("");
  const[myIndex,setMyIndex]=useState(null)

  useEffect(() => {}, [error]);

  const _renderItem = (item: any, index: number) => {
    return (
      <TouchableOpacity
        style={[
          Styles.tochableView,
          {
            borderColor:
             myIndex==index ? MyColor.GREEN : MyColor.GREY,
            flexBasis: `${90 / 3}%`,
          },
        ]}
        onPress={() => {
          // setData(
          //   data.map((i) =>
          //     i.id === item.id ? { ...i, isSelect: !i.isSelect } : i
          //   )
          // );
          setMyIndex(index)
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
      setError("Please select the Visit Location.");
    } else if (isSelect) {
      setError("");
      navigation.navigate(MyString.Select_Meet_Person);
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header navigation={navigation} />
      <Text style={Styles.visitReasontext}>Select the Location</Text>
      <View style={Styles.flatList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          numColumns={3}
          data={data}
          renderItem={({ item, index }) => _renderItem(item, index)}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
      {!isSelect ? (
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
            isSelect
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
