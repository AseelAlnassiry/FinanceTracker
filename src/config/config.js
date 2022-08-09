import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyARMRhAngWcQv8UQLYSYvQo9-YOuQQ7X5w',
  authDomain: 'finance-tracker-fc17a.firebaseapp.com',
  projectId: 'finance-tracker-fc17a',
  storageBucket: 'finance-tracker-fc17a.appspot.com',
  messagingSenderId: '54308360407',
  appId: '1:54308360407:web:d3d86fb9836c376ff6a092',
};

const db = initializeApp(firebaseConfig);
const authInfo = getAuth(db);

export { db, authInfo };
