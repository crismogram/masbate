import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAcC6ccaW_6SuUE20D0bCKYTGAFjizPt6o",
  authDomain: "masbateapp.firebaseapp.com",
  databaseURL: "https://masbateapp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "masbateapp",
  storageBucket: "masbateapp.appspot.com",
  messagingSenderId: "101578118490",
  appId: "1:101578118490:web:bb998c0a47443eb8a84f63",
  measurementId: "G-5S9P0YLESS"
  });

const database = getDatabase(firebaseApp);
export { database };

