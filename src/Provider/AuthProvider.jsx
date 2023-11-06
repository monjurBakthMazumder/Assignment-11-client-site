import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import useAxiosSecure from "../Hock/useAxiosSecure";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  // create user
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sing in with google
  const singInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sing in with Github
  const singInWithGithub = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider)
  };

  // logout
  const logoutUser = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    isLoading,
    createUser,
    loginUser,
    singInWithGoogle,
    singInWithGithub,
    logoutUser,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setIsLoading(false);
      console.log(currentUser);

      if (currentUser) {
        axiosSecure
          .post("/jwt", loggedUser)
          .then(() => {});
      } else {
        axiosSecure
          .post("/logout", loggedUser)
          .then(() => {});
      }
    });
    return () => {
      unSubscribe();
    };
  }, [axiosSecure, user?.email]);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
