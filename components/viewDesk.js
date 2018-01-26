import React, { Component } from 'react'
import { View, Text, Platform, ScrollView } from 'react-native'
import { Button } from 'react-native-elements';
import * as constants from '../utils/const'
import styles from '../styles';

class desksComponent extends Component {

    render() {
        const desk = this.props.navigation.state.params.desk;
        const { navigate } = this.props.navigation;
        const numQuestions = desk.questions.length;

        return (
            <View>
                <Text style={styles.deskTitle}>{desk.title}</Text>
                <Text style={styles.deskSubTitle}>{numQuestions} { numQuestions > 1 ? constants.cardLabelPlural : constants.cardLabel}</Text>
                <Button
                    icon={{ name: 'input' }}
                    title={constants.addNewCardBtn}
                    buttonStyle={styles.greenBtn}
                    onPress={() => navigate('addDesks', { desk: desk })}
                />
                <Button
                    icon={{ name: 'lightbulb-outline' }}
                    title={constants.startQuizBtn}
                    buttonStyle={styles.greenBtn}
                    onPress={() => navigate('addDesks')}
                />
            </View>
        )
    }
}

export default desksComponent;
