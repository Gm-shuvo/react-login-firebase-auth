import React, {useContex, useState} from 'react'

const AuthContext = React.createContext()

export function AuthProvider  ({children}){
    const [currentUser, setcurrentUser] = useState()
    const value ={
        currentUser
    }
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>

    )
}

export function useAuth (){
    return useAuth(AuthContext)
}