import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import './css/style.css';
import './js/nav';
import './js/notification';

if ('serviceWorker' in navigator) {
  const registration = runtime
    .register()
    .then(() => {
      console.log('register sw berhasil');
    })
    .catch((err) => {
      console.log('register sw gagal', err);
    });
} else {
  console.log('browser tidak mendukung sw');
}

const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

// Meminta ijin menggunakan Notification API
const requestPermission = () => {
  Notification.requestPermission().then(function (result) {
    if (result === 'denied') {
      console.log('Fitur notifikasi tidak diijinkan.');
      return;
    } else if (result === 'default') {
      console.error('Pengguna menutup kotak dialog permintaan ijin.');
      return;
    } else {
      navigator.serviceWorker.ready.then(() => {
        if ('PushManager' in window) {
          navigator.serviceWorker
            .getRegistration()
            .then(function (registration) {
              registration.pushManager
                .subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: urlBase64ToUint8Array(
                    'BHE7YcqFUs-ReNJL4hUipotZu0XKUD_ACe2gYPnJG3aMZPOExDRXLSSv0ak4P0rR5OQFPoQ_zE3ZvN3bK4uX75U'
                  ),
                })
                .then(function (subscribe) {
                  console.log(
                    'Berhasil melakukan subscribe dengan endpoint: ',
                    subscribe.endpoint
                  );
                  console.log(
                    'Berhasil melakukan subscribe dengan p256dh key: ',
                    btoa(
                      String.fromCharCode.apply(
                        null,
                        new Uint8Array(subscribe.getKey('p256dh'))
                      )
                    )
                  );
                  console.log(
                    'Berhasil melakukan subscribe dengan auth key: ',
                    btoa(
                      String.fromCharCode.apply(
                        null,
                        new Uint8Array(subscribe.getKey('auth'))
                      )
                    )
                  );
                })
                .catch(function (e) {
                  console.error('Tidak dapat melakukan subscribe ', e.message);
                });
            });
        }
      });
    }
  });
};

// Periksa fitur Notification API
if ('Notification' in window) {
  requestPermission();
} else {
  console.error('Browser tidak mendukung notifikasi.');
}
