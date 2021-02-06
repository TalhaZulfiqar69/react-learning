import firebase from 'firebase';

var firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAQSWZ4NooWpI1kTqRmP4wteuGtwP19HJs',
  authDomain: 'practice-and-learning.firebaseapp.com',
  projectId: 'practice-and-learning',
  storageBucket: 'practice-and-learning.appspot.com',
  messagingSenderId: '151465072222',
  appId: '1:151465072222:web:92e69beeb01f13ff1986cf',
  measurementId: 'G-Y0WF31J9Q7',
});

// Initialize Firebase
const auth = firebase.auth();
// firebase.initializeApp(firebaseConfig);

export { firebase, auth };
