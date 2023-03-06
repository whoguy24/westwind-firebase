import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAfj1HaGNJ3r783qI_MgGehWa8qjsxknI",
    authDomain: "westwind-morgans-377918.firebaseapp.com",
    databaseURL: "https://westwind-morgans-377918-default-rtdb.firebaseio.com",
    projectId: "westwind-morgans-377918",
    storageBucket: "westwind-morgans-377918.appspot.com",
    messagingSenderId: "597094908498",
    appId: "1:597094908498:web:88dd373472f95e35e0d58b",
    measurementId: "G-E14QW04W7R"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;