// Import the functions you need from the SDKs you need
import { initializeApp,firebase } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVmVMqr6Ecuceo38l8MBQ5kI9EsWbsiAE",
  authDomain: "moviehub-a9f9d.firebaseapp.com",
  projectId: "moviehub-a9f9d",
  storageBucket: "moviehub-a9f9d.firebasestorage.app",
  messagingSenderId: "596919392392",
  appId: "1:596919392392:web:5d551b95fb46fbff0fa73d",
  measurementId: "G-4S7CD4KRML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
export default app;
  