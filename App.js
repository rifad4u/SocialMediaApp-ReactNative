import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./src/Screens/PreLogin/LoginScreen";
import RegisterScreen from "./src/Screens/PreLogin/RegisterScreen";

import { SCREEN_ID } from "./src/Common/Constants"

const preLoginStack = createStackNavigator({

  [SCREEN_ID.LOGIN_SCREEN]: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  [SCREEN_ID.REGISTER_SCREEN]: {
    screen: RegisterScreen,
    navigationOptions: {
      headerShown: false
    }
  }
}, {
  initialRouteName: SCREEN_ID.LOGIN_SCREEN,
  defaultNavigationOptions: {
    gestureEnabled: false
  }
})

export default createAppContainer(preLoginStack)
