import React from 'react';
import { View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo'
import reducers from './reducers';
import styles from './styles';

import desks from './components/desks';
import viewDesk from './components/viewDesk';
import cards from './components/cards';
import addDesk from './components/addDesk';

function SatusBar () {
    return (
        <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar translucent barStyle="light-content"/>
        </View>
    )
}

const NavegationApp = StackNavigator({
    Home: {
        screen: desks,
        navigationOptions: {
            title: 'Home'
        }
    },
    viewDesks: {
        screen: viewDesk,
        navigationOptions: {
            title: 'Desk'
        }
    },
    addDesks: {
        screen: addDesk,
        navigationOptions: {
            tabBarLabel: 'Add Card'
        }
    }
});

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={styles.main}>
                    <SatusBar barStyle="light-content" />
                    <NavegationApp />
                </View>
            </Provider>
        );
    }
}
