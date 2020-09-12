import * as firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/analytics'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCUzVFYzN9YEF5owkqgsJ5Jy5ZW8iErJOI",
    authDomain: "match-6c928.firebaseapp.com",
    databaseURL: "https://match-6c928.firebaseio.com",
    projectId: "match-6c928",
    storageBucket: "match-6c928.appspot.com",
    messagingSenderId: "414601676611",
    appId: "1:414601676611:web:649bc0ac7db5a51af751f6",
    measurementId: "G-M7H28CNBVE"
})

export const storage = app.storage()
export const db = app.firestore()
export const analytics = app.analytics()
export const auth = app.auth()
