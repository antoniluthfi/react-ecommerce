import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyQ-HNki85H5GXy1BbikT9wz3fADaL-TU",
    authDomain: "ecommerce-3a359.firebaseapp.com",
    projectId: "ecommerce-3a359",
    storageBucket: "ecommerce-3a359.appspot.com",
    messagingSenderId: "60152470415",
    appId: "1:60152470415:web:922908f5856a963d27c9fa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export 
export const auth = firebase.auth();
export const googleAuthProvider = firebase.auth.googleAuthProvider();