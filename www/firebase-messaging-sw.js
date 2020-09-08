importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyCKtwGcKRebdT5xDCQpCk6iWyUByJSf0NU",
	authDomain: "ofertas-arcos.firebaseapp.com",
	databaseURL: "https://ofertas-arcos.firebaseio.com",
	projectId: "ofertas-arcos",
	storageBucket: "ofertas-arcos.appspot.com",
	messagingSenderId: "681783871189",
	appId: "1:681783871189:web:426a2c6b43f31c5b7fc45c",
	measurementId: "G-RVQJNFKBZB",
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});