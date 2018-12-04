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
import { Platform, DeviceEventEmitter } from 'react-native'
import RouteConfig from './src/router/RouterConfig'
import StackNavigatorConfig from './src/router/StackNavigatorConfig'
import store from "./src/store";
import './src/utils/storage';
import XGPush from 'react-native-xinge-push';

const Navigator = createStackNavigator(RouteConfig, StackNavigatorConfig);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isDebug: false
    };
    this._enableDebug = this._enableDebug.bind(this);
    this._isEnableDebug = this._isEnableDebug.bind(this);

    // 初始化推送
    this.initPush();
  }

  initPush() {
    // 初始化
    if(Platform.OS === 'android') {
      // 请将1111111111修改为APP的AccessId，10位数字
      // 请将YOUR_ACCESS_KEY修改为APP的AccessKey
      XGPush.init(1111111111, 'YOUR_ACCESS_KEY');
    } else {
      // 请将1111111111修改为APP的AccessId，10位数字
      // 请将YOUR_ACCESS_KEY修改为APP的AccessKey
      XGPush.init(1111111111, 'YOUR_ACCESS_KEY');
    }

    // XGPush.setHuaweiDebug(true);

    // 小米
    XGPush.initXiaomi('AppID', 'AppKey');

    // 魅族
    XGPush.initMeizu('appId', 'appKey');

    // 华为请到 build.gradle manifestPlaceholders 配置

    // 第三方推送开关（华为、小米、魅族）
    XGPush.enableOtherPush(true);

    // 注册
    XGPush.register('xwatson')
      .then(result => {
        // do something
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    XGPush.addEventListener('register', this._onRegister);
    XGPush.addEventListener('message', this._onMessage);
    XGPush.addEventListener('notification', this._onNotification);
  }

  componentWillUnmount() {
    XGPush.removeEventListener('register', this._onRegister);
    XGPush.removeEventListener('message', this._onMessage);
    XGPush.removeEventListener('notification', this._onNotification);
  }

  /**
   * 注册成功
   * @param deviceToken
   * @private
   */
  _onRegister(deviceToken) {
    alert('onRegister: ' + deviceToken);
  }

  /**
   * 透传消息到达
   * @param message
   * @private
   */
  _onMessage(message) {
    alert('收到透传消息: ' + message.content);
  }

  /**
   * 通知到达
   * @param notification
   * @private
   */
  _onNotification(notification) {
    if(notification.clicked === true) {
      alert('app处于后台时收到通知' + JSON.stringify(notification));
    } else {
      alert('app处于前台时收到通知' + JSON.stringify(notification));
    }
  }

  /**
   * 获取初始通知（点击通知后）
   * @private
   */
  _getInitialNotification() {
    XGPush.getInitialNotification().then((result) => {
      alert(JSON.stringify(result));
    });
  }

  _enableDebug() {
    XGPush.enableDebug(!this.state.isDebug);
  }

  _isEnableDebug() {
    XGPush.isEnableDebug().then(result => {
      this.setState({
        isDebug: result
      });
      alert(result);
    });
  }

  _setApplicationIconBadgeNumber(number = 0) {
    XGPush.setApplicationIconBadgeNumber(number);
  }

  _getApplicationIconBadgeNumber() {
    XGPush.getApplicationIconBadgeNumber((number) => alert(number));
  }
  render() {
    return (
      <Provider {...store} >
        <Navigator />
      </Provider>
    )
  }
}