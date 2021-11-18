// Import the functions you need from the SDKs you need
import { getMessaging, getToken } from "@firebase/messaging";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDugiSdAbhcAv4kjvZIczRILR0cWnyoLE4",
  authDomain: "don-t-sick.firebaseapp.com",
  projectId: "don-t-sick",
  storageBucket: "don-t-sick.appspot.com",
  messagingSenderId: "713607862724",
  appId: "1:713607862724:web:5ada0cc3cdaa6370662c91",
};

export const swRegistration = async () => {
  try {
    await navigator.serviceWorker.register(
      "https://nsm0924.github.io/dont-sick-react/dont-sick-react/firebase-messaging-sw.js"
    );
  } catch (error) {
    console.error(error);
  }
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);