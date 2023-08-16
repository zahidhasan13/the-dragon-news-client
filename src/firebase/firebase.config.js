// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf6_Eiki4zTFY8UOOhnqKsllyZZ_5EkQk",
  authDomain: "the-dragon-news-client-d2bff.firebaseapp.com",
  projectId: "the-dragon-news-client-d2bff",
  storageBucket: "the-dragon-news-client-d2bff.appspot.com",
  messagingSenderId: "235384758801",
  appId: "1:235384758801:web:3bb793fea947ce9564c7b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;