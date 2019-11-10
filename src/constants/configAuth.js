import firebase from 'firebase';


const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: ''
};
firebase.initializeApp(config)
//export const database= firebase.database();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
