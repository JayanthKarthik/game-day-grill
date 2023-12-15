import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBxagc3Ny-54WgfvMqZfKC19_KRGK64hXY",
    authDomain: "gamedaygrill-bb3f1.firebaseapp.com",
    projectId: "gamedaygrill-bb3f1",
    storageBucket: "gamedaygrill-bb3f1.appspot.com",
    messagingSenderId: "896745156124",
    appId: "1:896745156124:web:0cd5e0e0ad83c46a8b79d9"
};

export const firebase_app = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase_app);
