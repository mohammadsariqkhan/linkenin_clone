import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwhjWE_nkghfSPUWWfIOISakYZJ3qX2Iw",
    authDomain: "linkedin-clone-yt-5a321.firebaseapp.com",
    projectId: "linkedin-clone-yt-5a321",
    storageBucket: "linkedin-clone-yt-5a321.appspot.com",
    messagingSenderId: "804948160178",
    appId: "1:804948160178:web:73f6b38fdbdbda281863ab",
    measurementId: "G-B9V4716SG4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db,auth};