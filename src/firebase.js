 import firebase from 'firebase';
 
 // Your web app's Firebase configuration
 const config = {
    apiKey: "AIzaSyC2IfnYdNAz7a23jfXNfYfJ6xyWKZmJnvs",
    authDomain: "fir-react-example-ccbd3.firebaseapp.com",
    projectId: "fir-react-example-ccbd3",
    storageBucket: "fir-react-example-ccbd3.appspot.com",
    messagingSenderId: "629759121880",
    appId: "1:629759121880:web:e78073eacebf8f997a7aad"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;