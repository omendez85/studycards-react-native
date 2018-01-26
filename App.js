import React from 'react';
import { View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo'
import styles from './styles';

import desks from './components/desks';
import viewDesk from './components/viewDesk';
import addCard from './components/addCard';
import addDesk from './components/addDesk';
import quiz from './components/quiz';
import * as localNotifications from './utils/localNotifications';

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
    addCard: {
        screen: addCard,
        navigationOptions: {
            tabBarLabel: 'Add Card'
        }
    },
    addDesks: {
        screen: addDesk,
        navigationOptions: {
            tabBarLabel: 'Add Card'
        }
    },
    quiz: {
        screen: quiz,
        navigationOptions: {
            tabBarLabel: 'Quiz'
        }
    }
});

export default class App extends React.Component {
    componentDidMount() {
        localNotifications.setLocalNotification();
    }
    render() {
        return (
            <View style={styles.main}>
                <SatusBar barStyle="light-content" />
                <NavegationApp />
            </View>
        );
    }
}
