import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDXXUbwVcgijSLTSxDuDt9QiQa7dwc1wWk",
    authDomain: "project-67-1cff4.firebaseapp.com",
    projectId: "project-67-1cff4",
    storageBucket: "project-67-1cff4.appspot.com",
    messagingSenderId: "904517749785",
    appId: "1:904517749785:web:6644f747e28e1cda696e88"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();