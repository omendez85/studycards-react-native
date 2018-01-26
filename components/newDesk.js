import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { List, ListItem, Button } from 'react-native-elements';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import styles from '../styles';

import * as desksActions from '../actions/desks'
import * as API from '../utils/api'
import * as constants from '../utils/const'

class desksComponent extends Component {
    componentDidMount () {

        const { dispatch } = this.props;

        API.setDefaultDesks();

        API.fetchDesks()
            .then((desks) => {
                dispatch( desksActions.setDefaultDesks( JSON.parse(desks) ) )
            });
    }
    render() {
        const desks = this.props.desks;
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
                    onPress={() => navigate('addDesks', { new: true })}
                />
            ]
        )
    }
}

function mapStateToProps (state) {
    return {
        desks: state.desks
    }
  }

export default connect(
    mapStateToProps,
)(desksComponent)


{/* <View
    key={desk}
    style={[styles.containerDeskItem]}>
    <Text
        style={[styles.deskItem]}
        onPress={() => navigation('viewDesks', { deck: desk })}>
        {desk}
    </Text>
    <Text style={[styles.deskItem, styles.deskItemNumber]}>{numQuestions}</Text>
    <Ionicons name={'md-arrow-round-forward'} size={17} color={styles.white}/>
</View> */}
