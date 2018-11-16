import React, {Component} from 'react';
import { View, Text } from "react-native";
import Header from "../../components/Header";
export default class GoodsReptileDetail extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: '我是详情页'
    })
    constructor(props) {
        super(props);
        this.id = this.props.navigation.state.params.id
        console.log('详情：', props)
    }
    render() {
        return (
            <View>
                <Header navigation={this.props.navigation} title={`详情页${this.id}`} leftButton />
                <Text>我是详情页</Text>
            </View>
        )
    }
}