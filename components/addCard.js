import React, { Component } from 'react'
import { View, TextInput, Text} from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements';
import * as constants from '../utils/const'
import styles from '../styles';
import * as API from '../utils/api'

class AddCard extends Component {

    state = {
        question: '',
        questionError: false,
        answer: '',
        answerError: false

    };

    submitForm = () => {
        if ( this.state.answer === '' ) {
            this.setState({answerError:true});
            return null
        }

        if ( this.state.question === '' ) {
            this.setState({questionError:true});
            return null
        }

        const { navigate } = this.props.navigation;
        const currentDesk = this.props.navigation.state.params.desk;
        const newCard = {
            'answer': this.state.answer,
            'question': this.state.question,
        }
        API.addCardDesk(currentDesk, newCard)
            .then((desks) => {
                navigate('viewDesks', { desk: desks[currentDesk.title] });
            });

    }

    render() {
        return (
            <View style={styles.addCard}>
                <Text style={styles.labelInput}>{constants.question}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                        const value = text.trim();
                        if (value) {
                            this.setState({question: text, questionError: false})
                        } else {
                            this.setState({question: '', questionError:true})
                        }
                    }}
                />
                { this.state.questionError && <Text style={styles.errorInput}>{constants.errorInput}</Text>}

                <Text style={styles.labelInput}>{constants.answer}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                        const value = text.trim();
                        if (value) {
                            this.setState({answer: text, answerError: false})
                        } else {
                            this.setState({answer: '', answerError:true})
                        }
                    }}
                />
                { this.state.answerError && <Text style={styles.errorInput}>{constants.errorInput}</Text>}

                <Button
                    icon={{ name: 'add-box' }}
                    title={constants.saveBtn}
                    buttonStyle={styles.greenBtn}
                    onPress={ this.submitForm }
                />
            </View>
        )
    }
}

export default AddCard
