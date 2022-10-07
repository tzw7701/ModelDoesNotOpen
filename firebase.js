import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9PLhj6Jwv-Zej9loMCBAQVjkMcIVrz0U",
  authDomain: "fir-auth-342614.firebaseapp.com",
  projectId: "firebase-auth-342614",
  storageBucket: "firebase-auth-342614.appspot.com",
  messagingSenderId: "437547049094",
  appId: "1:437547049094:web:ad38b0ef0176dc82183107"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };


