import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path = "/login">
            <h1>Login page</h1>
          </Route>
          <Route path="/checkout">           
            <Checkout/>
          </Route>
          <Route path="/">           
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
