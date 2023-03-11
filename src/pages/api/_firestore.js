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
// 
//

///////////////////////////////////////////////////////
///// LIBRARY CODE ////////////////////////////////////
///////////////////////////////////////////////////////

// Define Variables
const firebaseConfig = {
  apiKey: process.env.FIRESTORE_API_KEY,
  authDomain: process.env.FIRESTORE_AUTH_DOMAIN,
  databaseURL: process.env.FIRESTORE_DATABASE_URL,
  projectId: process.env.FIRESTORE_PROJECT_ID,
  storageBucket: process.env.FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIRESTORE_MESSAGING_SENDER_ID,
  appId: process.env.FIRESTORE_APP_ID,
  measurementId: process.env.FIRESTORE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Export Library
export default firestore;