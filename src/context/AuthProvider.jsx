import React, { createContext, useEffect, useState } from 'react'
import {getLocalStorage , setLocalStorage} from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    // const [userData, setUserData] = useState(null)     incorrect
    const [userData, setUserData] = useState([])

    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])                                             //incorrect
    // useEffect(() => {
    //     const { employees } = JSON.parse(localStorage.getItem('employees')) || {};
    //     if (employees) setUserData(employees);
    //   }, []);
    
    

    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
