import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // sing in with google
    const singInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        user,
        setUser,
        isLoading,
        singInWithGoogle
    }
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
