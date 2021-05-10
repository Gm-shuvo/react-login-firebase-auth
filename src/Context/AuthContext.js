import React, {useContex, useEffect, useState} from 'react'
import { Redirect, useHistory } from 'react-router'
import {auth} from '../Utils/firebase'



export const AuthContext = React.createContext()


export function  useAuth  (){
    return useContex(AuthContext)
}

export function AuthProvider  ({children}){
    const [currentUser, setcurrentUser] = useState('')
    const [loadding, setloadding] = useState(true)
    console.log(`before ${currentUser}`);

    const history = useHistory()


    //firebase signup Function
     function signup (email,password){
        auth.createUserWithEmailAndPassword(email,password)
    }
    //firebase signIn Function
    function signin (email,password){
        auth.signInWithEmailAndPassword(email,password)
    }

    //firebase signIn Function
    function signout (){
        auth.signOut()
    }



    useEffect(() => {
      auth.onAuthStateChanged((user) =>{
         if (user){
           
            setcurrentUser(user)
            console.log(user );
            history.push('/')
        }else{
            history.push('/user/auth/signin')  
        }
        
      })
     
    },[])


    const value ={
        currentUser,
        signup,
        signin,
        signout,
        setloadding
    }


    return (
        <AuthContext.Provider value={value} >
            { children}
        </AuthContext.Provider>

    )
}

