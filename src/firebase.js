import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRvUEUnsith6Q4-lmzAV1g1ffs6aEuwMU",
  authDomain: "a-clone-7f4c6.firebaseapp.com",
  databaseURL: "https://a-clone-7f4c6.firebaseio.com",
  projectId: "a-clone-7f4c6",
  storageBucket: "a-clone-7f4c6.appspot.com",
  messagingSenderId: "75244773855",
  appId: "1:75244773855:web:7ce2b067b181d030b3646a",
  measurementId: "G-THFVB0HVSC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
