import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1ydp0vmta9TaqhmakAEOtpDqrUyYT2Fw",
  authDomain: "warehouse-management-80db8.firebaseapp.com",
  projectId: "warehouse-management-80db8",
  storageBucket: "warehouse-management-80db8.appspot.com",
  messagingSenderId: "9191067877",
  appId: "1:9191067877:web:8b3c1d5e319aa95c60040c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;