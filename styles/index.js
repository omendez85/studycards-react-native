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
        marginBottom: 10
    },
    deskSubTitle: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 50
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
    },
    addDesk:{
        padding: 10
    },
    h1: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    h2: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    card: {
        marginTop: 40,
        minHeight: '50%',
        alignItems: 'center'
    },
    h2Card: {
        marginBottom: 20,
        minHeight: 100
    },
    btnCard: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    counterQuestions: {
        color: colors.gray,
        padding: 10
    },
    correctBtn: {
        backgroundColor: colors.green,

    },
    incorrectBtn: {
        backgroundColor: colors.red,

    },
    h2Responses:{
        marginTop: 30
    },
    btnWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnAnswers: {
        marginTop:50
    }
});
