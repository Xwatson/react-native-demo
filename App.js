/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import { createStackNavigator } from 'react-navigation'
import RouteConfig from './src/router/RouterConfig'
import StackNavigatorConfig from './src/router/StackNavigatorConfig'

const Navigator = createStackNavigator(RouteConfig, StackNavigatorConfig);

export default class App extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}