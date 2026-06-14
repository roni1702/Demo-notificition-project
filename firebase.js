// firebase.js ফাইলের ভেতরের কোড
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDpUsQUdwkigIcQf-oCM7Ktzu7bgB3hxOc",
    authDomain: "my-push-demo-bf786.firebaseapp.com",
    projectId: "my-push-demo-bf786",
    storageBucket: "my-push-demo-bf786.firebasestorage.app",
    messagingSenderId: "102845462875",
    appId: "1:102845462875:web:983e0d14ad55ed3d92c27e"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/firebase-logo.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
