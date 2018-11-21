import React from 'react';
import { View, Text, Button } from "react-native";
import { observer, inject } from "mobx-react";
import Header from '../components/Header';

@inject('homeStore') // 将store传递给组件props
@observer // 转换响应式组件
export default class Home extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: '首页'
    })
    constructor(props) {
        super(props);
        this.homeStore = this.props.homeStore
    }

    render() {
        const { text = '123', num =0 } = this.homeStore;
        return (
            <View>
                <Header title={'首页'} />
                <Text>{text}</Text>
                <Button title="add" onPress={() => this.homeStore.plus()} />
                <Text>{num}</Text>
                <Button title="Minu" onPress={() => this.homeStore.minus()} />
            </View>
        )
    }
}