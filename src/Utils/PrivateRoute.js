import { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import {AuthContext} from '../Context/AuthContext'



const PrivateRoute = ({component},...rest ) => {
    const {currentUser} = useContext(AuthContext)
    return (
       currentUser ? <Route  component={component} {...rest} /> :
       <Redirect to='/user/auth/signin'/>
    )
}

export default PrivateRoute
