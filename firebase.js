importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// আপনার ফায়ারবেজ কনফিগ এখানে আবার বসাতে হবে
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

// ব্যাকগ্রাউন্ড নোটিফিকেশন রিসিভ করার হ্যান্ডলার
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
