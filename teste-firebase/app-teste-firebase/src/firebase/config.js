// Configuração do Firebase - vamos preencher depois
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// ESTES DADOS VOCÊ VAI PEGAR DO FIREBASE CONSOLE DEPOIS
const firebaseConfig = {
  apiKey: "vamos-preencher-depois",
  authDomain: "vamos-preencher-depois",
  projectId: "vamos-preencher-depois", 
  storageBucket: "vamos-preencher-depois",
  messagingSenderId: "vamos-preencher-depois",
  appId: "vamos-preencher-depois"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);