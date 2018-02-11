import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyCV-o0S3OZqmaymJ7Lq81ucgsI7ytoc7rg",
	authDomain: "emenu-data.firebaseapp.com",
	databaseURL: "https://emenu-data.firebaseio.com",
	storageBucket: "emenu-data.appspot.com,",
};

firebase.initializeApp(config);