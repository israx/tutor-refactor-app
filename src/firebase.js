import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACTP_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACTP_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACTP_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACTP_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACTP_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACTP_APP_FIREBASE_APP_ID,
});

//variable for authentication
export const auth = app.auth();
//exporting app to be used anywhere in our application
export default app;
