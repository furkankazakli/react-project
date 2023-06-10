import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore";

// Firebase Setup

const firebaseConfig = {
    apiKey: "AIzaSyDdxdTaR9q4VkNNXFBU5Qx63E3lPFYvHkA",
    authDomain: "reat-project-51be8.firebaseapp.com",
    projectId: "reat-project-51be8",
    storageBucket: "reat-project-51be8.appspot.com",
    messagingSenderId: "413699252401",
    appId: "1:413699252401:web:e536133862c95d63cac290",
    measurementId: "G-60FZ6T5594"
  };
  
  // Initialize Firebase
  const firebaseApp= initializeApp(firebaseConfig);

// Authentication Setup
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Firestore Setup
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
    ) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid); //benzersiz bir bağlantı noktası
    const userSnapShot = await getDoc(userDocRef); // veri setine erişim

    // Users veritabanı yok ise
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log("kullancıyı kaydetmede hata:", error.message);
        }
    }

    //Benzersiz bağlantıyı döndürme
    return userDocRef;
}

// Email/Password Sign Up
export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
}






