// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export default defineNuxtPlugin(nuxtApp => {
  const firebaseConfig = {
    apiKey: "AIzaSyB88MsAE8NuMaaZuaXcfQGLSKjF3dXHQOI",
    authDomain: "nuxxi-f5357.firebaseapp.com",
    projectId: "nuxxi-f5357",
    storageBucket: "nuxxi-f5357.appspot.com",
    messagingSenderId: "250111882556",
    appId: "1:250111882556:web:5113e39fb42d868c95da39"
  };

  initializeApp(firebaseConfig);
}
)