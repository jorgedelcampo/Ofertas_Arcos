// JavaScript Document

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
firebase.analytics();

function IntitalizeFireBaseMessaging() {
	messaging
		.requestPermission()
		.then(function () {
			console.log("Notification Permission");
			return messaging.getToken();
		})
		.then(function (token) {
			console.log("Token : "+token);
			//document.getElementById("token").innerHTML=token;
		})
		.catch(function (reason) {
			console.log(reason);
		});
}

messaging.onMessage(function (payload) {
	console.log(payload);
	const notificationOption={
		body:payload.notification.body,
		icon:payload.notification.icon
	};

	if(Notification.permission==="granted"){
		var notification=new Notification(payload.notification.title,notificationOption);

		notification.onclick=function (ev) {
			ev.preventDefault();
			window.open(payload.notification.click_action,'_blank');
			notification.close();
		}
	}

});
messaging.onTokenRefresh(function () {
	messaging.getToken()
		.then(function (newtoken) {
			console.log("New Token : "+ newtoken);
		})
		.catch(function (reason) {
			console.log(reason);
		})
})
IntitalizeFireBaseMessaging();