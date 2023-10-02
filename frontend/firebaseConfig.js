// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8Wj6IBGVTSqsHfFucZ9R2ZJtK2dyW8w4",
  authDomain: "chat-66c21.firebaseapp.com",
  projectId: "chat-66c21",
  storageBucket: "chat-66c21.appspot.com",
  messagingSenderId: "1034330894223",
  appId: "1:1034330894223:web:83423c729118dd2fcae5fa",
  measurementId: "G-16SM97NN61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);