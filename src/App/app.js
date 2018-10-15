import React, { Component } from 'react';
// import { Nav } from './nav';
import Input from '../Component/input';
import { View } from 'react-native';
import Boxes from '../Component/boxes';
import List from '../Component/list';
import WeatherApp from '../Component/weatherApp';

export default class Main extends Component {
    render() {
        return (
            <View style={{flex:1,}}>
                {/* <Input /> */}
                {/* <Boxes />
                <List /> */}
                <WeatherApp />
            </View>
        );
    }
}