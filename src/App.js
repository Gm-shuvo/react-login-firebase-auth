import Signin from "./Components/Signin";
import signup from "./Components/Signup";
import Home from "./Components/Home";
import PrivateRoute from "./Utils/PrivateRoute"

import  './app.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {AuthProvider} from './Context/AuthContext'


function App() {
  return (
    <>
       
       <Router>
        <AuthProvider>
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route  path="/user/auth/signin" component={Signin}/>
                <Route  path="/user/auth/signup" component={signup}/>
              </Switch>
        </AuthProvider>
      </Router>    
    </>
  );
}

export default App;
