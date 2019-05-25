import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCH7-R_eNGQ7BNNHCdLF7nNqzZlCDp7Gqk",
    authDomain: "spotifact-brilla.firebaseapp.com",
    databaseURL: "https://spotifact-brilla.firebaseio.com",
    projectId: "spotifact-brilla",
    storageBucket: "spotifact-brilla.appspot.com",
    messagingSenderId: "453587041482",
    appId: "1:453587041482:web:ebae49aa1fb8d6bf"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);


export default firebase