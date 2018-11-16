import React, {Component} from 'react';
import { View, Text } from "react-native";
import Header from '../components/Header';

export default class Home extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: '首页'
    })
    render() {
        return (
            <View>
                <Header title={'首页'} />
                <Text>我是首页</Text>
            </View>
        )
    }
}