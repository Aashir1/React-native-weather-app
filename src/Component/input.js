import React, {Component} from 'react';
import {Text, View, TextInput, Switch, Alert} from 'react-native';

export default class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            text:'',
            switchValue: false,
        }
    }
    _onChangeText = (value) =>{
        this.setState({text: value});
    }
    _onSubmit = () =>{
        Alert.alert(`Submitted Text: ${this.state.text}`);
        this.setState({text:''})
    }
    _onValueChange = (value) =>{
        this.setState({switchValue: value})
    }
    render(){
        return(
        <View>
            <TextInput 
                onChangeText= {this._onChangeText}
                placeholder="Enter something"
                value={this.state.text}
                onSubmitEditing={this._onSubmit}
                />
            <Text>{this.state.text}</Text>
            <Switch 
                onValueChange = {this._onValueChange}
                value = {this.state.switchValue}
            />
        </View>
        );
    }
}