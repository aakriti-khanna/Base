import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC9rz3mBJr7eO33UPlKwv2FC0z1TSLalBw",
//   authDomain: "openinappassignment-940ce.firebaseapp.com",
//   projectId: "openinappassignment-940ce",
//   storageBucket: "openinappassignment-940ce.appspot.com",
//   messagingSenderId: "184120513408",
//   appId: "1:184120513408:web:8df25b6ca3e566252de765",
//   measurementId: "G-9BD6DNFM32"
// };


const firebaseConfig = {
  apiKey: "AIzaSyBLc4DUHm6Q3ejzEOqqmD4VrhOEIGn1YPw",
  authDomain: "base-e571f.firebaseapp.com",
  projectId: "base-e571f",
  storageBucket: "base-e571f.appspot.com",
  messagingSenderId: "679311695489",
  appId: "1:679311695489:web:a85d83cd105bb920b7f780",
  measurementId: "G-EP8QKW1X01"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
