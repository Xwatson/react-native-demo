import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator, createBottomTabNavigator, TabBarBottom } from "react-navigation";
import Icon from "react-native-vector-icons/Feather";
import AppScreen from "./AppScreen";
import GoodsReptileScreen from "./GoodsReptileScreen";

const RootStack = createSwitchNavigator(
  {
    App: AppScreen
  },
  {
    initialRouteName: 'App'
  }
)

export default class RootScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <RootStack />
    }
}
  
  const Navigator = createStackNavigator(
    {
      App: {screen: HomeScreen},
    },
    {
      headerMode: 'none',
    }
  );