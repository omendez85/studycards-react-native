import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { white } from '../utils/colors';

import * as desksActions from '../actions/desks'

const desksStyles = StyleSheet.create({
    home: {
        color: white
    }
})

class desksComponent extends Component {
    componentDidMount () {        
        this.props.desksActions.setDefaultDesks();
    }
    render() {
      return (
        <View>
            {this.props.desks.map( (desk, i) => {
                return (
                    <View key={i}>
                        <Text style={[desksStyles.home]}> {desk.title} </Text>
                    </View>
                )
            })}

        </View>
      )
    }
}

function mapStateToProps (state) {
    return {
        desks: state.desks
    }
}
  
function mapDispatchToProps (dispatch) {
    return {
        desksActions: bindActionCreators( desksActions, dispatch )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(desksComponent)