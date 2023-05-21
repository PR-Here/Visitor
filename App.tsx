import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import MyStack from "./src/navigation/MyStack";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/Store";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
