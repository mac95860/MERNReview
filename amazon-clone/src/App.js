import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { auth } from './firebase';


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //as soon as app loads, this method starts listening
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> '. authUser);
      if(authUser) {
        //user just logged in

      } else {
        //user is logged out
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path = "/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>           
            <Checkout/>
          </Route>
          <Route path="/">
            <Header/>           
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
