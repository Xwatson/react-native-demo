import React from 'react';
import {FlatList, View, Text, Image, TouchableHighlight, StyleSheet, DeviceInfo} from 'react-native';
import Orientation from "react-native-orientation";

export default class GoodsReptileScreen extends React.Component {
    constructor(props) {
        super(props);
        Orientation.lockToPortrait();
    }
    render() {
        return (
            <View>
                <Text>尼玛！</Text>
            </View>
        )
    }
}