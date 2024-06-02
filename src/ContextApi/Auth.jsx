import {createContext, useState } from "react"

// { isAuthenticated: false, token: null, email: null }

export let AuthD=createContext()

export default function Auth({children}){
    let [isAuthenticated,setIsAuthenticated]=useState(false);
    let [token,setToken]=useState(null)
    let [email,setEmail]=useState(null)

    

    
    return <>
            <AuthD.Provider value={{isAuthenticated,token,setToken,setIsAuthenticated,email,setEmail}}>
                {children}
            </AuthD.Provider>

    </>
}