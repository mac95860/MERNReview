import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD8OldVGMIjXn_YgTCNv8KfeugR6N_eGYE",
    authDomain: "challenge-719b6.firebaseapp.com",
    databaseURL: "https://challenge-719b6.firebaseio.com",
    projectId: "challenge-719b6",
    storageBucket: "challenge-719b6.appspot.com",
    messagingSenderId: "1049141763184",
    appId: "1:1049141763184:web:aebd64d1808cf170afa8b5",
    measurementId: "G-ZPSKV7JQ42"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };