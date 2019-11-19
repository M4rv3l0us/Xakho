import firebase from 'firebase'


import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID
} from 'react-native-dotenv'

const firebaseConfig = {
    apiKey: "AIzaSyA9Xwi-wxYyQrCFaQd32qrwstoZFVplFig",
    authDomain: "xakho-99804.firebaseapp.com",
    databaseURL: "https://xakho-99804.firebaseio.com",
    projectId: "xakho-99804",
    storageBucket: "xakho-99804.appspot.com",
    messagingSenderId: "1032127088596",
    appId: "1:1032127088596:web:55559f7616d8a9cc47f841",
    measurementId: "G-36VNN6VEM7"
}

//Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase