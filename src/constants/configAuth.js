import firebase from 'firebase';


const config = {
  apiKey: 'AIzaSyA2PTRbHj5lUyoN0CjkG8vb5vOXwssXj40',
  authDomain: 'crewww-c780d.firebaseapp.com',
  databaseURL: 'https://crewww-c780d.firebaseio.com',
  projectId: 'crewww-c780d',
  storageBucket: 'gs://crewww-c780d.appspot.com/'
};
firebase.initializeApp(config)
//export const database= firebase.database();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
