import React, { Component } from 'react'
import { View, TextInput, Text} from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements';
import * as constants from '../utils/const'
import styles from '../styles';
import * as API from '../utils/api'

class AddDeskComponent extends Component {
    state={
        newdesk: '',
        deskError: false
    };
    submitForm = () => {
        if ( this.state.newdesk === '' ) {
            this.setState({deskError:true});
            return null
        }
        const { navigate } = this.props.navigation;
        API.addDesk(this.state.newdesk)
            .then((desks) => {
                navigate('Home');
            });

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.addDesk}>
                <Text style={styles.h1}>{constants.addDesk}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                        const value = text.trim();
                        if (value) {
                            this.setState({newdesk: text, deskError: false})
                        } else {
                            this.setState({newdesk: '', deskError:true})
                        }
                    }}
                />
                { this.state.deskError && <Text style={styles.errorInput}>{constants.errorInput}</Text>}


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

export default AddDeskComponent
