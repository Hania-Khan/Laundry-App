import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5i0EYwjDfDIl1nbDKIzAfHiLbUMepOU8",
  authDomain: "laundry-app-5e4db.firebaseapp.com",
  projectId: "laundry-app-5e4db",
  storageBucket: "laundry-app-5e4db.appspot.com",
  messagingSenderId: "606059909803",
  appId: "1:606059909803:web:90f5009b2c810dcf219dee",
  measurementId: "G-FMD3K4MZ6L",
};

console.log("Connected with FireBase");

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
