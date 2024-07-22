// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgdsXHB_AHtW78IofqHYHEwvkEEo_gA9o",
  authDomain: "bagicerita-220724.firebaseapp.com",
  projectId: "bagicerita-220724",
  storageBucket: "bagicerita-220724.appspot.com",
  messagingSenderId: "429337246912",
  appId: "1:429337246912:web:35c813774c6026b05bc125",
  measurementId: "G-F19Q7ZXHRR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
