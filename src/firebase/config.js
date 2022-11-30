import firebase from "firebase/app";
import "firebase/firestore";
import ".firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1MeXw8EaYs6lSYHUo1FAHFJcKu_ZYFkM",
  authDomain: "list-crud-jeffry.firebaseapp.com",
  projectId: "list-crud-jeffry",
  storageBucket: "list-crud-jeffry.appspot.com",
  messagingSenderId: "308530182958",
  appId: "1:308530182958:web:3c5257e83c5687a1fcd8bf",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.fieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
