import React, {Component} from 'react';
import { View, Text, Button } from "react-native";
import Header from "../../components/Header";

export default class GoodsReptileList extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: '爬虫'
    })
    constructor(props) {
        super(props);
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
            </View>
        )
    }
}