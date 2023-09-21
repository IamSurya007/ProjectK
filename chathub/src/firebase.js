// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDqYJkS3k0ffqo0rO5zykCKXN1qJNsKYh0",
  authDomain: "chathub-fc91a.firebaseapp.com",
  projectId: "chathub-fc91a",
  storageBucket: "chathub-fc91a.appspot.com",
  messagingSenderId: "156732803362",
  appId: "1:156732803362:web:68f3185f5fdab79425bd7b",
  measurementId: "G-93WJ7RKWRS"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage();
 export const db = getFirestore();