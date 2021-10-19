import firebase from "firebase/compat/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { firebaseConfig } from "./FirebaseConfig";

firebase.initializeApp(firebaseConfig);

export const githubLogar = async () => {
  let user;
  const provider = new GithubAuthProvider();
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

export const facebookLogar = async () => {
  let user;
  const provider = new FacebookAuthProvider();
  const auth = getAuth();
  await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((error) => {
      console.log(error);
    });
  return user;
};

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
