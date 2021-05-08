import Signin from "./Components/Signin";
import signup from "./Components/Signup";
import  './app.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/user/auth/signin" component={Signin}/>
          <Route exact path="/user/auth/signup" component={signup}/>
        </Switch>
      </Router>    
    </>
  );
}

export default App;
