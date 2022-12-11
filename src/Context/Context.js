import React, { createContext, useState } from 'react';

export const authContext = createContext();

const Context = ({children}) => {
    const [loggedIn,setLoggedIn] = useState(false);


    const authInfo = { loggedIn,setLoggedIn };
    return (
        <authContext.Provider value={authInfo}>
            {children} 
            </authContext.Provider>
    );
};

export default Context;