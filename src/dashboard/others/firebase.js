// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzT6SlYZKYgvY7C9nfNpRU_1y_TfLAHg8",
  authDomain: "tidal-digit-414921.firebaseapp.com",
  projectId: "tidal-digit-414921",
  storageBucket: "tidal-digit-414921.appspot.com",
  messagingSenderId: "869030406897",
  appId: "1:869030406897:web:37a83c2bb2b83880799750",
  measurementId: "G-3SQJNVVM2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app as default };


