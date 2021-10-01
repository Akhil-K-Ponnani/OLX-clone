import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAadyBT-2AvAX8ejmm-_iykVsXmKZlTYyU",
    authDomain: "olx-clone-aaf6e.firebaseapp.com",
    projectId: "olx-clone-aaf6e",
    storageBucket: "olx-clone-aaf6e.appspot.com",
    messagingSenderId: "51997001176",
    appId: "1:51997001176:web:46cee37aedb87ae9eb9ead",
    measurementId: "G-0J3XC4WLJ9"
  };

  export default firebase.initializeApp(firebaseConfig)