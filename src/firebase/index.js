import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQGEgR_0kcC8KgyaV9TIbNDNlgxxdJwKM",
  authDomain: "m26-upload-file.firebaseapp.com",
  projectId: "m26-upload-file",
  storageBucket: "m26-upload-file.appspot.com",
  messagingSenderId: "5098928900",
  appId: "1:5098928900:web:d9a5aada41a35e22a8ee51",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
