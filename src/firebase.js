import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHruCmAngYPmafJLbmkcOSfUqu3sAEiuA",
  authDomain: "verbose-2e4ab.firebaseapp.com",
  projectId: "verbose-2e4ab",
  storageBucket: "verbose-2e4ab.appspot.com",
  messagingSenderId: "938737527012",
  appId: "1:938737527012:web:e6afe8be3054421ca7a4f1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
