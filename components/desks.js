import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import { white } from '../utils/colors';

import * as desksActions from '../actions/desks'
import * as API from '../utils/api'

const desksStyles = StyleSheet.create({
    containerDeskItem: {
        borderColor: white,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        margin: 10,
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    deskItem:{
        color: white,
        paddingRight: 5
    },
    deskItemNumber:{
        marginLeft: 'auto'
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
                {Object.keys(this.props.desks).map((desk) => {
                    const currentDesk = this.props.desks[desk];
                    const numQuestions = currentDesk.questions.length;
                    return (
                        <View key={desk}  style={[desksStyles.containerDeskItem]}>
                            <Text style={[desksStyles.deskItem]}>{desk}</Text>
                            <Text style={[desksStyles.deskItem, desksStyles.deskItemNumber]}>{numQuestions}</Text>
                            <Ionicons name={'md-arrow-round-forward'} size={17} color={'#FFF'} />
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