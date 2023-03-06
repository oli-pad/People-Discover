// Import the functions you need from the SDKs you need
// import any other Firebase modules you want to use

import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import any other Firebase modules you want to use

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function initializeFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyBFdhNGEM5X1giEJRB7osGJvPudbr_BUiM",
    authDomain: "people-discover.firebaseapp.com",
    projectId: "people-discover",
    storageBucket: "people-discover.appspot.com",
    messagingSenderId: "645280393380",
    appId: "1:645280393380:web:49dbd8cc10a05067785e31",
    measurementId: "G-WXRP433SJ0"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const Firebase = firebase;
export const Auth = auth;
export const Firestore = firestore;
// export any other Firebase modules you want to use
