import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements';
import * as constants from '../utils/const'
import styles from '../styles';


class Card extends Component {
    state = {
        showAnswer: false
    }

    render() {
        const { question, answer } = this.props.card;
        return (
            <View style={styles.card}>
                <Text
                    style={[styles.h2, styles.h2Card]}>
                    {(this.state.showAnswer) ? answer : question}
                </Text>
                <Button
                    title={ (this.state.showAnswer) ? constants.answerBtn : constants.questionBtn}
                    buttonStyle={[styles.greenBtn, styles.btnCard]}
                    onPress={ () => this.setState({showAnswer: !this.state.showAnswer}) }
                />
            </View>
        )
    }
}

export default Card
