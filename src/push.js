var webPush = require('web-push');

const vapidKeys = {
  publicKey:
    'BHE7YcqFUs-ReNJL4hUipotZu0XKUD_ACe2gYPnJG3aMZPOExDRXLSSv0ak4P0rR5OQFPoQ_zE3ZvN3bK4uX75U',
  privateKey: 's3fEfUMEMTwMVJKTWCXhxbQ92-YGAEhnYcOZKRrHGjI',
};

webPush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
var pushSubscription = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/fS3YSiPm7zg:APA91bHwu-vkc-iQeR3sbSbS5auOFDuE6ka9gme1bCRr7WtO0M-YKtzwis4nEi9PjOz1GK-jy1VswrebjnBekfqk8xKmfnia8BjEYaFbfvBIKumcXQtiV1xfY96ZaTzCr3rb0dunVjVD',
  keys: {
    p256dh:
      'BMhcvtSAOJbjTT1wiPQV3uHlo/gYpsNM7HJa0C8vHNQ2QtHXXOSeVZ7dqrvs1vKlsprl+nlJI/367bTkGCdjNno=',
    auth: 'FyYGDK6hYk5t0jdQx+hSGQ==',
  },
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
  gcmAPIKey: '798809937505',
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
