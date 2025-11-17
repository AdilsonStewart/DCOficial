// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // 👈 ADICIONE ESTA LINHA

const firebaseConfig = {
  apiKey: "AIzaSyC1Xv2mPNf4s2oY-Jeh2ev3x0O6qkKNqt4",
  authDomain: "deixacomigo-727ff.firebaseapp.com",
  projectId: "deixacomigo-727ff",
  storageBucket: "deixacomigo-727ff.firebasestorage.app", // 👈 JÁ ESTÁ AQUI
  messagingSenderId: "304342645043",
  appId: "1:304342645043:web:893af23b41547a29a1a646"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // 👈 ADICIONE ESTA LINHA
export default app;