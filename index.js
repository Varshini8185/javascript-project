import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAFKframvdJxkQy208lfTTI8u-nUS9pQBc",
    authDomain: "loginform-1af2e.firebaseapp.com",
    projectId: "loginform-1af2e",
    storageBucket: "loginform-1af2e.firebasestorage.app",
    messagingSenderId: "23297301650",
    appId: "1:23297301650:web:667a8911273162f8af1a4b",
    measurementId: "G-JQNRSEL15P"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
