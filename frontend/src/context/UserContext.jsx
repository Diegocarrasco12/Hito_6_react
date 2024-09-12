// src/context/UserContext.jsx
import React, { createContext, useEffect, useState } from 'react';


export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
         const storedToken = localStorage.getItem('token')
        return storedToken !== null ? storedToken === 'true' : true
    })

    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token])

    const logout = () => {
        setToken(false); 
    };

    return (
        <UserContext.Provider value={{ token, logout, setToken }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider