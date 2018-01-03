import { AsyncStorage } from 'react-native'

const DESKS = 'studyCards:desks';
const CARDS = 'studyCards:cards';

export function setDefaultDesks () {
    const initData = [
        {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    ]
    AsyncStorage.setItem(DESKS, JSON.stringify(initData));
    return initData;
}

export function fetchDesks () {
    return AsyncStorage.getItem(DESKS)
        .then( () => {

        });
}

export function submitNewDesk ({ entry, key }) {
    return AsyncStorage.mergeItem(DESKS, JSON.stringify({
        [key]: entry
    }))
}

export function removeDesk (key) {
    return AsyncStorage.getItem(DESKS)
    .then((results) => {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(DESKS, JSON.stringify(data))
    })
}

export function fetchCards () {
    return AsyncStorage.getItem(CARDS)
        .then(formatCalendarResults)
}

export function submitNewCard ({ entry, key }) {
    return AsyncStorage.mergeItem(CARDS, JSON.stringify({
        [key]: entry
    }))
}

export function removeCard (key) {
    return AsyncStorage.getItem(CARDS)
    .then((results) => {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(CARDS, JSON.stringify(data))
    })
}