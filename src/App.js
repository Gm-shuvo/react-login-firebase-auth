import Signin from "./Components/Signin";
import signup from "./Components/Signup";
import  './app.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {AuthProvider} from './Context/AuthContext'


function App() {
  return (
    <>
       
        <AuthProvider>
          <Router>
              <Switch>
                <Route  path="/user/auth/signin" component={Signin}/>
                <Route  path="/user/auth/signup" component={signup}/>
              </Switch>
          </Router>    
        </AuthProvider>
    </>
  );
}

export default App;
