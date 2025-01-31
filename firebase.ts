import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBL_BaAJ6TlZBGyBsR6y1ESjMpRI2fh5r0",
    authDomain: "chat-pdf-4a54b.firebaseapp.com",
    projectId: "chat-pdf-4a54b",
    storageBucket: "chat-pdf-4a54b.firebasestorage.app",
    messagingSenderId: "290723894985",
    appId: "1:290723894985:web:b3135db1c660418c965f18",
    measurementId: "G-YNKCBYS6YK"
  };

  const App = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

  const db = getFirestore(App);
  const storage = getStorage(App);
  const analytics = getAnalytics(App);
  export { db, storage, analytics };