import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import ReduxThunk from 'redux-thunk'

import reducers from './reducers';
import desks from './components/desks';
import cards from './components/cards';
import {black} from './utils/colors';

const Menu = TabNavigator({
    Desks: {
        screen: desks,
        navigationOptions: {
            tabBarLabel: 'Home'
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

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const mainStyles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: 20,
        paddingBottom: 20,
        backgroundColor: 'rgba(0,0,0,1)'
    }
})
export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <View style={[mainStyles.main]}>
                    <Menu />
                </View>
            </Provider>
        );
    }
}

