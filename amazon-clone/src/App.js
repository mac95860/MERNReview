import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { auth } from './firebase';
import {useStateValue} from'./util/StateProvider';


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //runs once app is loaded
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user  logged in 
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
