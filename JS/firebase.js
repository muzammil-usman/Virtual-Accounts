import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfDFrIbb_WJqJZakYdPZ7-Wd_FS713TJk",
  authDomain: "virtualgamingaccount.firebaseapp.com",
  projectId: "virtualgamingaccount",
  storageBucket: "virtualgamingaccount.firebasestorage.app",
  messagingSenderId: "463278864655",
  appId: "1:463278864655:web:86c9b2f7c2127180f2e67a",
  measurementId: "G-VNLCMPHLW3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
