import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuxyx5uyXB__E7QSvApGqsz6iMJ0PMgis",
  authDomain: "singuplogin-e9089.firebaseapp.com",
  projectId: "singuplogin-e9089",
  storageBucket: "singuplogin-e9089.appspot.com",
  messagingSenderId: "535133171396",
  appId: "1:535133171396:web:c4cbce6a12770964fe2391"
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
 export const db = getFirestore(app);