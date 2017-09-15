import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA2PTRbHj5lUyoN0CjkG8vb5vOXwssXj40",
  authDomain: "crewww-c780d.firebaseapp.com",
  databaseURL: "https://crewww-c780d.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
