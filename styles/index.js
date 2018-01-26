import { StyleSheet } from 'react-native';
import * as colors from './colors';

export default StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.black
    },
    containerDeskItem: {
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        margin: 10,
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    deskItem:{
        color: colors.black,
        paddingRight: 5
    },
    deskItemNumber:{
        marginLeft: 'auto'
    },
    greenBtn:{
        backgroundColor: colors.green,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10
    },
    deskTitle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 30,
    },
    deskSubTitle: {
        fontSize: 15,
        textAlign: 'center'
    },
    input:{
        height: 40,
        borderColor: colors.black,
        borderWidth: 1,
        padding: 10
    },
    labelInput:{
        marginTop:20,
        marginBottom:5,
    },
    errorInput:{
        color: colors.red
    },
    addCard:{
        padding: 10
    }
});
