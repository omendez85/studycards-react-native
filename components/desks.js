import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { List, ListItem, Button } from 'react-native-elements';

import styles from '../styles';

import * as desksActions from '../actions/desks'
import * as API from '../utils/api'
import * as constants from '../utils/const'

class desksComponent extends Component {
    state = {
        desks: {}
    };
    componentDidMount () {
        this.getData();
    }

    getData = () =>{
        API.fetchDesks()
            .then((desks) => {
                if (desks === null){
                    API.setDefaultDesks();
                    this.getData();
                } else {
                    this.setState({
                        desks: JSON.parse(desks)
                    });
                }
            });
    }

    render() {
        const desks = this.state.desks;
        const { navigate } = this.props.navigation;
        return (
            [
                <ScrollView key="0">
                    <List>
                        {Object.keys(desks).map((desk) => {
                            const currentDesk = desks[desk];
                            const numQuestions = currentDesk.questions.length;
                            return (
                                <ListItem
                                  key={desk}
                                  title={desk}
                                  subtitle={`${numQuestions} ${ numQuestions > 1 ? constants.cardLabelPlural: constants.cardLabel} `}
                                  onPress={() => navigate('viewDesks', { desk: currentDesk })}
                                />
                                )
                        })}
                    </List>
                </ScrollView>,
                <Button
                    key="1"
                    icon={{ name: 'add-circle' }}
                    title={constants.addNewDeskBtn}
                    buttonStyle={styles.greenBtn}
                    onPress={() => navigate('addDesks')}
                />
            ]
        )
    }
}

export default desksComponent
