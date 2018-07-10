import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
    apiKey: "AIzaSyDeFQN09jSo1qSyJkCPM1n6k9IK_Fjqvbg",
    authDomain: "api-project-880036853068.firebaseapp.com",
    databaseURL: "https://api-project-880036853068.firebaseio.com",
    projectId: "api-project-880036853068",
    storageBucket: "api-project-880036853068.appspot.com",
    messagingSenderId: "880036853068"
};

const devConfig = {
    apiKey: "AIzaSyDeFQN09jSo1qSyJkCPM1n6k9IK_Fjqvbg",
    authDomain: "api-project-880036853068.firebaseapp.com",
    databaseURL: "https://api-project-880036853068.firebaseio.com",
    projectId: "api-project-880036853068",
    storageBucket: "api-project-880036853068.appspot.com",
    messagingSenderId: "880036853068"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
