import React from 'react';
import { View, Text } from "react-native";
import { inject, observer } from "mobx-react/native";
import Header from '../components/Header';

@inject('homeStore')
@observer // 监听当前组件
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
                <Button primary onPress={() => this.homeStore.plus()}>
                    <Text>add</Text>
                </Button>
                <Text>{num}</Text>
                <Button primary onPress={() => this.homeStore.minus()}>
                    <Text>Minu</Text>
                </Button>
            </View>
        )
    }
}