import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDekeOtu3wu2Mny-ZHLcdSuOyMxwjI37hU",
  authDomain: "react-app-courses-24b74.firebaseapp.com",
  projectId: "react-app-courses-24b74",
  storageBucket: "react-app-courses-24b74.appspot.com",
  messagingSenderId: "518815207316",
  appId: "1:518815207316:web:a5547a0a393cec743bc981"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
  db,
  googleAuthProvider,
  firebase
}