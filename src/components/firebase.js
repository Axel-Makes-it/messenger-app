import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEErL3_7t01i68dBE0c5AvGYmimbJdut4",
  authDomain: "messenger-app-258fd.firebaseapp.com",
  projectId: "messenger-app-258fd",
  storageBucket: "messenger-app-258fd.appspot.com",
  messagingSenderId: "173486855625",
  appId: "1:173486855625:web:785774f5d4106b09238418",
  measurementId: "G-7ZX57XFH2K",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
