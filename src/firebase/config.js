import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8DPWe7XfDgPfz1yeCOps2-3Rz-CR2JOY",
  authDomain: "vuex-auth-6fc4c.firebaseapp.com",
  projectId: "vuex-auth-6fc4c",
  storageBucket: "vuex-auth-6fc4c.appspot.com",
  messagingSenderId: "397335887106",
  appId: "1:397335887106:web:cfd7da4280482b1ea4d61b",
};
initializeApp(firebaseConfig);
const auth = getAuth();

export {auth}
