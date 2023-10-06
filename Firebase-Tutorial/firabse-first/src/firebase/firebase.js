// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd1P8bbii7pq8RjfMLCGQlb5PciBqnuHw",
  authDomain: "firbase-first-5937a.firebaseapp.com",
  projectId: "firbase-first-5937a",
  storageBucket: "firbase-first-5937a.appspot.com",
  messagingSenderId: "878661557377",
  appId: "1:878661557377:web:3eb13f44d15d86aeb64180",
  databaseURL: 'https://firbase-first-5937a-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);