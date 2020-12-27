import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import Payment from './pages/Payment/Payment';
import Orders from './pages/Orders/Orders';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { auth } from './firebase';
import {useStateValue} from'./util/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51Hxz9XLEq0ZvTanT8yRhuBnsepLU0rqmf5LGSImsratiZlCs3pTysWthVt6E9WDWyWNcI00fueSIBAWqWYZEuE4e00Y8KWHMmJ');

function App() {
  const [{}, dispatch] = useStateValue();
  console.log(dispatch);

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
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
        {/* test comment */}
        <Switch>
          <Route path = "/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path = "/login">
            <Login/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe = {promise}>
              <Payment/>
            </Elements>
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
