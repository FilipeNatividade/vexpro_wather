import firebase from "firebase/compat/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { firebaseConfig } from "./FirebaseConfig";

firebase.initializeApp(firebaseConfig);



export const googleLogar = async () => {
  let user;
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  await signInWithPopup(auth, provider)
    .then((response) => {
      user = response.user;
    })
    .catch((error) => {
      console.log(error);
    });
  return user;
};
