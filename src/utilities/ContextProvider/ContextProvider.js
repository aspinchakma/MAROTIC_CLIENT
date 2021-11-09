import React, { createContext } from 'react';
import useFirebase from './../hooks/useFirebase';


export const AuthenticationContext = createContext();
const ContextProvider = ({ children }) => {
    const all = useFirebase();
    return (
        <AuthenticationContext.Provider value={all}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default ContextProvider;