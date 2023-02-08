import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { environment } from "src/environments/environment";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592

// Initialize Firebase
export const app = initializeApp(environment.firebase);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);