import React from 'react';
import './App.css';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUserAction } from './redux/user/user.actions';

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

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const ref = await createUserProfileDocument(user)
        ref.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
            })
            console.log(snapshot);
        })
      } else {
        setCurrentUser(user)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return <>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>) } />
          <Route exact path='/hats' component={HatsPage} />
          <Route path='/hats/:shapka/:ushanka' component={HatsDetailsPage} />
        </Switch>
    </>
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => {
    return dispatch(setCurrentUserAction(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
