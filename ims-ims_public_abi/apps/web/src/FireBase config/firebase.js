// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyC9fVRsAk5kwHZNNQFQy7VZp4nHupHfOBc",
    authDomain: "uploadingfile-3a4fb.firebaseapp.com",
    projectId: "uploadingfile-3a4fb",
    storageBucket: "uploadingfile-3a4fb.appspot.com",
    messagingSenderId: "309685940012",
    appId: "1:309685940012:web:b511570305399410ecc689"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)