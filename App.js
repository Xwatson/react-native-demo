/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from "mobx-react";

import { createStackNavigator } from 'react-navigation'
import RouteConfig from './src/router/RouterConfig'
import StackNavigatorConfig from './src/router/StackNavigatorConfig'
import store from "./src/store";

const Navigator = createStackNavigator(RouteConfig, StackNavigatorConfig);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}