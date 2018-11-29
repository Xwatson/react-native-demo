/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from "mobx-react";

import { createStackNavigator } from 'react-navigation'
import { DeviceEventEmitter, NativeModules } from 'react-native'
import RouteConfig from './src/router/RouterConfig'
import StackNavigatorConfig from './src/router/StackNavigatorConfig'
import store from "./src/store";
import './src/utils/storage';
const mPush = NativeModules.MPush;

const Navigator = createStackNavigator(RouteConfig, StackNavigatorConfig);

export default class App extends Component {
  componentDidMount() {
    //绑定账号 
    mPush.bindAccount('xwatson@foxmail.com',(bindCallback)=>{
      //绑定回调结果
      alert(bindCallback);
    });
    DeviceEventEmitter.addListener('onMessage', this.onMessage);
    DeviceEventEmitter.addListener('onNotification', this.onNotification);
    DeviceEventEmitter.addListener('onNotificationOpened', this.onNotificationOpened);
    DeviceEventEmitter.addListener('onNotificationRemoved', this.onNotificationRemoved);
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener('onMessage', this.onMessage);
    DeviceEventEmitter.removeListener('onNotification', this.onNotification);
    DeviceEventEmitter.removeListener('onNotificationOpened', this.onNotificationOpened);
    DeviceEventEmitter.removeListener('onNotificationRemoved', this.onNotificationRemoved);
  }
  onMessage(e) {
    alert("Message Received. Title:" + e.title + ", Content:" + e.content);
  }
  onNotification(e) {
    alert("Notification Received.Title:" + e.title + ", Content:" + e.content);
  }
  onNotificationOpened(e) {
    alert("Notification Clicked");
  }
  onNotificationRemoved(e) {
    alert("Notification removed");
  }
  render() {
    return (
      <Provider {...store} >
        <Navigator />
      </Provider>
    )
  }
}