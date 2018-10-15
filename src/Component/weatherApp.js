import React, { Component } from 'react';
import { Text, View, TextInput, Switch, Alert, FlatList, StyleSheet, ListView, TouchableHighlight, ActivityIndicator, Platform, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class WeatherApp extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            humidity: '',
            temp: 0,
            city: '',
            show: false,
            loader: true,
            image: '',
            wind: 0,
            status: '',
        };
    }
    componentDidMount() {
    }
    _onSubmit = () => {
        console.log(this.state.city)
        fetch(`https://www.metaweather.com/api/location/search/?query=${this.state.city}`)
            .then((data) => {
                this.setState({ show: true, loader: true });
                data.json().then((normData) => {
                    let res = fetch(`https://www.metaweather.com/api/location/${normData[0].woeid}`);
                    res.then((Data) => {
                        let normData = Data.json();
                        normData.then((data) => {
                            let info = data.consolidated_weather[0];
                            console.log('info', info)
                            let city = this.state.city.toString();
                            let obj = {
                                humidity: info.humidity,
                                temp: Math.round(info.max_temp),
                                wind: Math.round(info.wind_speed),
                                image: `https://www.metaweather.com//static/img/weather/png/${info.weather_state_abbr}.png`,
                                status: info.weather_state_name,
                                city,
                                loader: false
                            }
                            this.setState(obj)
                        })
                    })
                        .catch(error => {
                            Alert.alert(error.message);
                            console.log(error.message)
                        })
                })
                    .catch(error => {
                        Alert.alert('Wrong Entity Detected');
                        console.log('Wrong Entity Detected')
                    })
            })
            .catch(error => {
                Alert.alert(error.message);
                console.log(error.message)
            })
    }
    _onChangeText = (value) => {
        this.setState({ city: value, show: false });
    }
    render() {
        console.log(this.state.image);
        return (
            <View style={styles.container}>
                <View style={styles.searchSection}>
                    <TextInput
                        style={[styles.input1, { height: Platform.OS == 'android' ? 70 : 20 }]}
                        onChangeText={this._onChangeText}
                        placeholder="Enter City Name"
                        value={this.state.city}
                        onSubmitEditing={this._onSubmit}
                        underlineColorAndroid='transparent'
                        placeholderTextColor= "#fff"
                    />
                    <Icon style={styles.searchIcon} name="ios-search-outline" size={25} color="#fff" />
                </View>
                {/* <TextInput
                    style={styles.input}
                    placeholder="User Nickname"
                onChangeText={(searchString) => { this.setState({ searchString }) }}
                underlineColorAndroid="transparent"
                /> */}

                <View>
                    {
                        this.state.show ?
                            this.state.loader ?
                                <View style={{ flex: 1, paddingTop: 20 }}>
                                    <ActivityIndicator />
                                </View>
                                :
                                <View style={{ paddingTop: 20 }}>
                                    <View>
                                        <Text style={{ color: '#aeaeba' }}>
                                            Temperature
                                        </Text>
                                        <Text style={{ color: '#aeaeba', fontSize: 35, textAlign: 'center', paddingTop: 60, paddingBottom: 60}}>
                                            <Image source={{ uri: `${this.state.image}` }} style={{ width: 70, height: 70 }} />{`\n`}
                                            {/* <MaterialIcons style={styles.searchIcon} name="home" size={55} color="#fff" />{`\n`} */}
                                            {this.state.temp}&deg;
                                            {/* 32.0&deg; */}
                                        </Text>

                                    </View>
                                    <View>
                                        <View style={styles.rowWrapper}>
                                            <Text style={{ color: '#aeaeba' }}>Humidity</Text>
                                            <Text>

                                                <Text style={{ margin: 5, color: '#aeaeba' }}>{this.state.humidity}&deg;{`  `}</Text>
                                                <Icon style={styles.searchIcon} name="ios-water-outline" size={20} color="red" />

                                            </Text>
                                        </View>
                                        <View style={styles.rowWrapper}>
                                            <Text style={{ color: '#aeaeba' }}>Wind</Text>
                                            <Text>

                                                <Text style={{ padding: 5, color: '#aeaeba' }}>{this.state.wind}&deg;{`  `}</Text>
                                                {/* <Icon style={styles.searchIcon} name="air" size={25} color="#fff" /> */}
                                                <MaterialIcons style={styles.otherIcons} name="toys" size={15} color="#fff" />{`\n`}
                                            </Text>
                                        </View>
                                        <View style={styles.rowWrapper}>
                                            <Text style={{ color: '#aeaeba' }}>Status</Text>
                                            <Text>
                                                <Text style={{ margin: 5, color: '#aeaeba' }}>{this.state.status}{`  `}</Text>
                                                <Icon style={styles.searchIcon} name="md-cloudy" size={18} color="#D8EDF3" />
                                                {/* <MaterialIcons style={styles.otherIcons} name="toys" size={15} color="#fff" />{`\n`} */}
                                            </Text>
                                        </View>
                                    </View>
                                    <View>
                                    </View>
                                </View>
                            :
                            null
                    }
                    <Text>

                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        // marginTop: 22,
        padding: 50,
        backgroundColor: '#242330'
    },
    item: {
        padding: 30,
        backgroundColor: 'pink',
        color: '#fff',
        fontSize: 18,
        height: 44,
        borderColor: '#fff',
        borderBottomWidth: 3,
    },
    input1: {
        color: '#aeaeba',
        fontSize: 30,
        paddingTop: 10,
        paddingLeft: 0,
        // height: 3,
        width: 230,
    },
    itemWrapper: {

    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchIcon: {
        paddingTop: 25,
        // position: 'absolute',
        // paddingLeft: 300,
    },
    otherIcons: {
        marginLeft: 5,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    rowWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        alignContent: 'center',
        borderBottomWidth: 3,
        borderBottomColor: '#aeaeba',
        paddingBottom: 20,
        paddingTop: 20,
        
    }
});