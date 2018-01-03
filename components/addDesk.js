import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'

import { connect } from 'react-redux'
import { CardsActions } from '../actions/desks'

const desksStyles = StyleSheet.create({
  home: {
      color: '#FFF'
  },
  deskItem:{

  }
})

class AddDesk extends Component {
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
        <View>
          <Text style={[desksStyles.home]}>Add Desk</Text>
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
)(AddDesk)