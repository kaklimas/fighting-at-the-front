import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB2cst4huhDBIHNueZwNxw8mkcrp4cU4T0",
    authDomain: "react-chat-app-397cb.firebaseapp.com",
    projectId: "react-chat-app-397cb",
    storageBucket: "react-chat-app-397cb.appspot.com",
    messagingSenderId: "748732328900",
    appId: "1:748732328900:web:bfe3d7c2fad954fc965291"
}).auth();