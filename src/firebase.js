import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDHHBqNatIuPwDKHtdvMfcKGBt_db1xndo",
  authDomain: "clone-c4843.firebaseapp.com",
  projectId: "clone-c4843",
  storageBucket: "clone-c4843.appspot.com",
  messagingSenderId: "136560170746",
  appId: "1:136560170746:web:fa9b2068f889db4bf91b43",
  measurementId: "G-WTKMLHC2C4",

};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();

export  { auth };
