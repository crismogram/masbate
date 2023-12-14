import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseApp = initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: "1:101578118490:web:bb998c0a47443eb8a84f63",
  measurementId: process.env.MEASUREMENT_ID
  });

const database = getDatabase(firebaseApp);
export { database };

