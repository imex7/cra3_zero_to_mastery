import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

const HatsPage = ({match}) => {
  return <>
    <h2>Hats Page</h2>
    <Link to={`${match.url}/lob/knob`}>Go to</Link>
  </>

}

const HatsDetailsPage = ({history, match: {params, url}}) => {
  return <>
    <h2>Hats Details Page</h2>
    <p>
      {params.shapka}
    </p>
  </>
}

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/hats/:shapka/:ushanka' component={HatsDetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
