import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from 'react-native-fontawesome';
import { Constants } from 'expo'

import reducers from './reducers';
import {black} from './utils/colors';

import desks from './components/desks';
import cards from './components/cards';
import addDesk from './components/addDesk';

function SatusBar () {
    return (
        <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar translucent barStyle="light-content"/>
        </View>
    )
}

const Menu = TabNavigator({
    Desks: {
        screen: desks,
        navigationOptions: {
            tabBarLabel: 'Home'
        }
    },
    addDesks: {
        screen: addDesk,
        navigationOptions: {
            tabBarLabel: 'Add Desk'
        }
    }
}, {
    tabBarOptions: {
        style: {
            height: 30,
            paddingBottom: 10, 
            shadowColor: black,
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
});

const mainStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,1)'
    }
})
export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={[mainStyles.main]}>
                    <SatusBar barStyle="light-content" />
                    <Menu />
                </View>
            </Provider>
        );
    }
}

