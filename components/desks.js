import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { white } from '../utils/colors';

import * as desksActions from '../actions/desks'
import * as API from '../utils/api'

const desksStyles = StyleSheet.create({
    home: {
        color: white
    },
    deskItem:{
        
    }
})

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
        return (
            <ScrollView>
                {Object.keys(this.props.desks).map((key) => {            
                return (
                    <View key={key}>
                        <Text style={[desksStyles.home]}>{key}</Text>
                    </View>
                    )
                })}           
            </ScrollView>
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