import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'

import { connect } from 'react-redux'
import { CardsActions } from '../actions/desks'

const desksStyles = StyleSheet.create({
    deskItem:{
        color: '#FFF',
    }
})

class Cards extends Component {
    componentDidMount () {
 
    /*   fetchCalendarResults()
        .then((entries) => dispatch(receiveEntries(entries)))
        .then(({ entries }) => {
          if (!entries[timeToString()]) {
            dispatch(addEntry({
              [timeToString()]: getDailyReminderValue()
            }))
          }
        })
        .then(() => this.setState(() => ({ready: true}))) */
    }
    render() {
      return (
        <View style={[desksStyles.deskItem]}>
          <Text>Cards</Text>
        </View>
      )
    }
}

function mapStateToProps (state) {
    return {
            alreadyLogged: true
        }
    }
  
export default connect(
    mapStateToProps
)(Cards)