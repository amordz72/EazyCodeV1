
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBbzHmINFZOKrX66HPFs5y7torT0Vn8f8A",
  authDomain: "dayne-v1.firebaseapp.com",
  databaseURL: "https://dayne-v1-default-rtdb.firebaseio.com",
  projectId: "dayne-v1",
  storageBucket: "dayne-v1.appspot.com",
  messagingSenderId: "326745985993",
  appId: "1:326745985993:web:73003bc390c1f4b3e58e18",
  measurementId: "G-NDQQZMF0B8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app