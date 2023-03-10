import { defineNuxtPlugin } from "#app";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";


export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const app = initializeApp({
    apiKey: "AIzaSyB88MsAE8NuMaaZuaXcfQGLSKjF3dXHQOI",
    authDomain: "nuxxi-f5357.firebaseapp.com",
    projectId: "nuxxi-f5357",
    storageBucket: "nuxxi-f5357.appspot.com",
    messagingSenderId: "250111882556",
    appId: "1:250111882556:web:5113e39fb42d868c95da39"
  });

  nuxtApp.provide("firebaseApp", app);
  nuxtApp.provide("firestore", getFirestore(app));
  nuxtApp.provide("firebaseAuth", getAuth(app));
});
