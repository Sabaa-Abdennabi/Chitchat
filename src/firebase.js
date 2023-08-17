
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdOELHF8_pT3wWIUf9b2meWCJqHZlQsXw",
  authDomain: "chitchat-23.firebaseapp.com",
  projectId: "chitchat-23",
  storageBucket: "chitchat-23.appspot.com",
  messagingSenderId: "461873681688",
  appId: "1:461873681688:web:45be71cc84569d61933a6d",
  measurementId: "G-X5CZNJZWM4"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore(app);