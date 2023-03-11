///////////////////////////////////////////////////////
///// LIBRARY MODULES /////////////////////////////////
///////////////////////////////////////////////////////

// Import Required Modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

///////////////////////////////////////////////////////
///// LIBRARY DESCRIPTION /////////////////////////////
///////////////////////////////////////////////////////

// The firebase.js library is used to initialize Google Firebase in our application.
// ----------------------------------------------------
// This libary allows the application to access the Google Firestore api.
// This will allow the application to send and receive requests from the firestore database.
// ----------------------------------------------------
// Used in:
// hooks/useTestimonials.js
//

///////////////////////////////////////////////////////
///// LIBRARY CODE ////////////////////////////////////
///////////////////////////////////////////////////////

// Define Variables
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
const firestore = getFirestore(app);

// Export Library
export default firestore;