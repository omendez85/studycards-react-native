import { AsyncStorage } from 'react-native'
//import initData from '../data/initialdata'

const DESKS = 'studyCards:desks';
const CARDS = 'studyCards:cards';

const initData = {
    'React': {
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
    'JavaScript': {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    'JavaScript2': {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    'JavaScript3': {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    'JavaScript4': {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    'JavaScript5': {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    'JavaScript6': {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    'JavaScript7': {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    'JavaScript8': {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    'JavaScript9': {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

export function setDefaultDesks () {
    AsyncStorage.setItem(DESKS, JSON.stringify(initData));
}

export function fetchDesks () {
    return AsyncStorage.getItem(DESKS);
}

export function addCartDesk (desks) {
    AsyncStorage.setItem(DESKS, JSON.stringify(desks));
    return AsyncStorage.getItem(DESKS);
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
