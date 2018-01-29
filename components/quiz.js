import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements';
import Card from './card';

import styles from '../styles';

import * as desksActions from '../actions/desks'
import * as API from '../utils/api'
import * as constants from '../utils/const'
import * as localNotifications from '../utils/localNotifications';


const initialState = {
    currentQuestion: 0,
    totalIncorrect: 0,
    totalCorrect: 0,
    totalQuestions: 0,
    showResults: false
}

class QuizComponent extends Component {

    state = initialState;

    componentDidMount(){
        this.setState({
            totalQuestions: this.props.navigation.state.params.questions.length
        });
        localNotifications.clearLocalNotification()
            .then(localNotifications.setLocalNotification);
    }

    nextQuestion = (question) => {

        if(question){
            this.setState((prevState) => {
                return {
                    currentQuestion: prevState.currentQuestion + 1,
                    totalCorrect: prevState.totalCorrect + 1
                }
            });
        } else {
            this.setState((prevState) => {
                return {
                    currentQuestion: prevState.currentQuestion + 1,
                    totalIncorrect: prevState.totalIncorrect + 1
                }
            });
        }

        if ( (this.state.currentQuestion + 1) === this.state.totalQuestions ) {
            this.setState({
                showResults: true
            });
        }
    }
    tryAgain(){
        this.setState({
            ...initialState,
            totalQuestions: this.state.totalQuestions
        });
    }
    render() {
        const questions = this.props.navigation.state.params.questions;
        const { navigate } = this.props.navigation;
        const { currentQuestion, totalQuestions, showResults, totalCorrect, totalIncorrect } = this.state;
        const percentCorrect = Math.floor(((totalCorrect * 100) / totalQuestions))
        return ( showResults ?
                <View>
                    <Text
                        style={[styles.h2, styles.h2Responses]}>
                        {constants.totalCorrect} {totalCorrect}
                    </Text>
                    <Text
                        style={[styles.h2, styles.h2Responses]}>
                        {constants.totalIncorrect} {totalIncorrect}
                    </Text>
                    <Text
                        style={[styles.h2, styles.h2Responses]}>
                        {constants.percent} {percentCorrect}%
                    </Text>
                    <View style={[styles.btnWrapper, styles.btnAnswers]}>
                        <Button
                            title={constants.backtoDeskBtn}
                            buttonStyle={styles.greenBtn}
                            onPress={ () => navigate('viewDesks', { desk: this.props.navigation.state.params.desk }) }
                        />
                        <Button
                            title={constants.tryAgainBtn}
                            buttonStyle={styles.greenBtn}
                            onPress={ () => this.tryAgain() }
                        />
                    </View>
                </View>
            :
                <View>
                    <Text
                        style={styles.counterQuestions}>
                        {currentQuestion + 1} / {totalQuestions}
                    </Text>
                    <Card card={questions[currentQuestion]} />
                    <View style={styles.btnWrapper}>
                        <Button
                            title={constants.correct}
                            buttonStyle={[styles.greenBtn, styles.correctBtn]}
                            onPress={ () => this.nextQuestion(true) }
                        />
                        <Button
                            title={constants.incorrect}
                            buttonStyle={[styles.greenBtn, styles.incorrectBtn]}
                            onPress={ () => this.nextQuestion(false) }
                        />
                    </View>
                </View>
        )
    }
}

export default QuizComponent
