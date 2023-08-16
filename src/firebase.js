
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCdOELHF8_pT3wWIUf9b2meWCJqHZlQsXw",
  authDomain: "chitchat-23.firebaseapp.com",
  projectId: "chitchat-23",
  storageBucket: "chitchat-23.appspot.com",
  messagingSenderId: "461873681688",
  appId: "1:461873681688:web:45be71cc84569d61933a6d",
  measurementId: "G-X5CZNJZWM4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);