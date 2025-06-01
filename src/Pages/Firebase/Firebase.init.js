
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxLFizVxm6GzyOOVSWO_8AhRhctTaEzKE",
  authDomain: "clothyfly-shop.firebaseapp.com",
  projectId: "clothyfly-shop",
  storageBucket: "clothyfly-shop.firebasestorage.app",
  messagingSenderId: "1000895160667",
  appId: "1:1000895160667:web:4e1fe66ee35e50a91d3a7e"
};


const app = initializeApp(firebaseConfig);

export default app;