import React, {Component} from 'react';
import { View, Text, Button, NativeModules } from "react-native";
import Header from "../../components/Header";
const mPush = NativeModules.MPush;

export default class GoodsReptileList extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: '爬虫'
    })
    constructor(props) {
        super(props);
        this.state = {
            deviceIdBtnTitle: ''
        }
    }
    render() {
        return (
            <View>
                <Header title={'商品爬虫'} rightButton={true} />
                <Text>我是列表页</Text>
                <Button
                    title='详情页'
                    onPress={() => {
                        this.props.navigation.navigate('GoodsReptileDetail', {id: 123});
                    }} />
                <Button
                    title='MPush调用Native方法'
                    onPress={() => {
                        mPush.getDeviceId((args) => {
                            this.setState({
                                deviceIdBtnTitle: args
                            });
                        });
                    }} />
                <Text>getDeviceId：{this.state.deviceIdBtnTitle}</Text>
            </View>
        )
    }
}