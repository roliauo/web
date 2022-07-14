// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEtkN6jaDZb_30_ZGw6-dDJCJga0DVVu4",
  authDomain: "shop-4abeb.firebaseapp.com",
  projectId: "shop-4abeb",
  storageBucket: "shop-4abeb.appspot.com",
  messagingSenderId: "535763174084",
  appId: "1:535763174084:web:944c94ecc41259306b3f91",
  measurementId: "G-50TJ84WVM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);