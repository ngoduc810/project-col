import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDpWQN2wjQjc1hYxN6JNj1XrXUnglzBrbM",
  authDomain: "project-app-31ffb.firebaseapp.com",
  projectId: "project-app-31ffb",
  storageBucket: "project-app-31ffb.appspot.com",
  messagingSenderId: "682547352710",
  appId: "1:682547352710:web:e90431893c0d99f97aed07",
  measurementId: "G-BJV4QJ01KB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;