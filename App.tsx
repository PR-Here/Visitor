import { NavigationContainer } from "@react-navigation/native";
import React,{useEffect} from "react";
import MyStack from "./src/navigation/MyStack";
import SplashScreen from "react-native-splash-screen";

export default function App() {

  useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
