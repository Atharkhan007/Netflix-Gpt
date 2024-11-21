// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACGKmFfS3mnGORHcrnXKpfa3PZzZagV6Y",
  authDomain: "netflix-gpt-111a2.firebaseapp.com",
  projectId: "netflix-gpt-111a2",
  storageBucket: "netflix-gpt-111a2.firebasestorage.app",
  messagingSenderId: "585307048781",
  appId: "1:585307048781:web:e0f3fd095c30ec94700504",
  measurementId: "G-40M4C3FNRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();