import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';

export default class Boxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    _onPress = () => {
        Alert.alert('Button Clicked');
    }
    _onChange = (value) => {
        this.setState({ text: value });
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.box1}
                    onPress={this._onPress}
                    underlayColor="pink"
                >
                    <View >
                        <Text style={styles.text}>Button1</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.box2}
                    onPress={this._onPress}
                    underlayColor="pink"
                >
                    <View>
                        <Text style={styles.text}>Button2</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.box3}
                    onPress={this._onPress}
                    underlayColor="pink"
                >
                    <View>
                        <Text style={styles.text}>Button3</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    box1: {
        flex: 1,
        backgroundColor: 'red',
    },
    box2: {
        flex: 1,
        backgroundColor: 'blue',
    },
    box3: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    text: {
        padding: 20,
        color: '#fff',
    }
})