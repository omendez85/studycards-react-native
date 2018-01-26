import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'
import * as constants from '../utils/const'

const NOTIFICATION_KEY = 'studyCardsReact:notifications'

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
    return {
        title: constat.titleReminder,
        body: constants.messageReminder,
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        if (data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                if (status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync()

                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(8)
                    tomorrow.setMinutes(0)

                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(),
                        {
                            time: tomorrow,
                            repeat: 'day',
                        }
                    )

                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
    })
}
