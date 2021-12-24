import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Firebase from "./Firebase";

firebase.initializeApp(Firebase);

let auth = firebase.auth();
let db = firebase.firestore;

export { auth, db };
