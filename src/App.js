import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup-page.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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

class App extends React.Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const ref = await createUserProfileDocument(user)
        ref.onSnapshot((snapshot) => {
          this.setState({currentUser: {
            id: snapshot.id,
            ...snapshot.data()
            }})
            console.log(this.state);
        })
      } else {
        this.setState({currentUser: user})
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return <>
      <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
          <Route exact path='/hats' component={HatsPage} />
          <Route path='/hats/:shapka/:ushanka' component={HatsDetailsPage} />
        </Switch>
    </>
  }
}

export default App;
