import { AsyncStorage } from 'react-native'
import initData from '../data/initialdata'

const DESKS = 'studyCardsReact99:desks';
const CARDS = 'studyCardsReact99:cards';

export function setDefaultDesks () {
    AsyncStorage.setItem(DESKS, JSON.stringify(initData));
}

export function update (desks) {
    AsyncStorage.setItem(DESKS, JSON.stringify(desks));
}

export function fetchDesks () {
    return AsyncStorage.getItem(DESKS);
}

export function addCardDesk (currentDesk, card) {
    return fetchDesks()
        .then((desks) => {
            const newDesks = JSON.parse(desks);
            newDesks[currentDesk.title].questions.push(card);
            update(newDesks);
            return newDesks;
        });
}

export function addDesk (deskTitle) {
    return fetchDesks()
        .then((desks) => {
            const newDesks = JSON.parse(desks);
            newDesks[deskTitle] = {
                'title': deskTitle,
                questions: []
            }
            update(newDesks);
            return newDesks;
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
