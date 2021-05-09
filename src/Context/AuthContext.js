import React, {useContex, useEffect, useState} from 'react'
import {auth} from '../Utils/firebase'

export const AuthContext = React.createContext()

export function  useAuth  (){
    return useContex(AuthContext)
}

export function AuthProvider  ({children}){
    const [currentUser, setcurrentUser] = useState()

    //firebase signup Function
     function signup (email,password){
        auth.createUserWithEmailAndPassword(email,password)
    }
    //firebase signIn Function
    function signin (email,password){
        auth.signInWithEmailAndPassword(email,password)
    }



    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setcurrentUser(user)
        })
        return unsubscribe
    }, [])


    const value ={
        currentUser,
        signup,
        signin
    }


    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>

    )
}

