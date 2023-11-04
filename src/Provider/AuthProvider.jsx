import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    const authInfo = {
        user,
        setUser,
        isLoading
    }
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
