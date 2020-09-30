import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = ({match}) => {
  return <>
    <h2>Hats Page</h2>
    <Link to={`${match.url}/lob/knob`}>Go to</Link>
  </>

}

const HatsDetailsPage = ({history, match: {params, url}}) => {
  // console.log(history)
  // console.log(params);
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
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route path='/hats/:shapka/:ushanka' component={HatsDetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
