import PushNotification from "react-native-push-notification";

export default class NotifService {
  scheduleNotif(idNo, todo, group, timestamp) {
    PushNotification.localNotificationSchedule({
      date: new Date(timestamp),
      id: idNo,
      /* Android Only Properties */
      // largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
      // smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: todo, // (optional) default: "message" prop
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000

      /* iOS only properties */
      // alertAction: 'view', // (optional) default: view
      // category: null, // (optional) default: null
      // userInfo: null, // (optional) default: null (object containing additional notification data)

      /* iOS and Android properties */
      title: group, // (optional)
      message: todo, // (required)
      playSound: true, // (optional) default: true
      soundName: "default" // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    });
  }
  cancelNotif(idNo) {
    PushNotification.cancelLocalNotifications({ id: idNo });
  }
}
