import React, { Component } from 'react';
import { Text, View, TextInput, Switch, Alert, FlatList, StyleSheet, ListView, TouchableHighlight } from 'react-native';

export default class List extends Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             data: [{ id: 0, name: 'Eshal' }, { id: 1, name: 'Alishba' }, { id: 2, name: 'Arfia' }, { id: 3, name: 'Alizay' }, { id: 4, name: 'M Ahmad' }]
    //         }
    //     }

    //     render() {
    //         return (
    //             <View style={{flex:1}}>
    //                 <FlatList
    //                     style={styles.container}
    //                     // data={this.state.data}
    //                     data={[{ id: 0, name: 'Eshal' }, { id: 1, name: 'Alishba' }, { id: 2, name: 'Arfia' }, { id: 3, name: 'Alizay' }, { id: 4, name: 'M Ahmad' }]}
    //                     renderItem={(item) => <Text style={styles.item}>{`${item.name}`}</Text>}
    //                     keyExtractor={(item, index) => `${index}`}
    //                 />
    //             </View>
    //         );
    //     }
    // }
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                { id: 0, name: 'Eshal' },
                { id: 1, name: 'Alishba' },
                { id: 2, name: 'Arfia' },
                { id: 3, name: 'Alizay' },
                { id: 4, name: 'M Ahmad' },
                { id: 0, name: 'Eshal' },
                { id: 1, name: 'Alishba' },
                { id: 2, name: 'Arfia' },
                { id: 3, name: 'Alizay' },
                { id: 4, name: 'M Ahmad' },
                { id: 0, name: 'Eshal' },
                { id: 1, name: 'Alishba' },
                { id: 2, name: 'Arfia' },
                { id: 3, name: 'Alizay' },
                { id: 4, name: 'M Ahmad' },
                { id: 0, name: 'Eshal' },
                { id: 1, name: 'Alishba' },
                { id: 2, name: 'Arfia' },
                { id: 3, name: 'Alizay' },
                { id: 4, name: 'M Ahmad' },
                { id: 0, name: 'Eshal' },
                { id: 1, name: 'Alishba' },
                { id: 2, name: 'Arfia' },
                { id: 3, name: 'Alizay' },
                { id: 4, name: 'M Ahmad' },
                { id: 0, name: 'Eshal' },
                { id: 1, name: 'Alishba' },
                { id: 2, name: 'Arfia' },
                { id: 3, name: 'Alizay' },
                { id: 4, name: 'M Ahmad' },
                { id: 0, name: 'Eshal' },
                { id: 1, name: 'Alishba' },
                { id: 2, name: 'Arfia' },
                { id: 3, name: 'Alizay' },
                { id: 4, name: 'M Ahmad' },
                { id: 0, name: 'Eshal' },
                { id: 1, name: 'Alishba' },
                { id: 2, name: 'Arfia' },
                { id: 3, name: 'Alizay' },
                { id: 4, name: 'M Ahmad' }
            ]),
        };
    }
    _onPress = (data) => {
        // android.log(data);
        Alert.alert(data);
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => {
                    return (
                        <TouchableHighlight
                            onPress={(rowData) => this._onPress(rowData.name)}
                            underlayColor='blue'
                        >
                            <Text style={styles.item}>{rowData.name}</Text>
                        </TouchableHighlight>

                    )
                }
                }
            />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        marginTop: 22
    },
    item: {
        // padding: 30,
        backgroundColor: 'pink',
        color: '#fff',
        fontSize: 18,
        height: 44,
        borderColor: '#fff',
        borderBottomWidth: 3,
    },
    itemWrapper: {

    }
});