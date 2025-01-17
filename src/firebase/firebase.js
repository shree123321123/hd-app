import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA8pGMPJqaD5WdzSwBXsGujJ7m4V9A46OM",
  authDomain: "webhdfc-810ce.firebaseapp.com",
  projectId: "webhdfc-810ce",
  storageBucket: "webhdfc-810ce.appspot.com",
  messagingSenderId: "224108059374",
  appId: "1:224108059374:web:46d063edc9b9a5f287f1ff",
  measurementId: "G-Q1RGY4HPGX"
};

const app = initializeApp(firebaseConfig);
export const realTimeDb= getDatabase(app)