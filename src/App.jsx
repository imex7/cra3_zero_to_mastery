import React from 'react';
import './App.css';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import { setCurrentUserAction } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup-page.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';

const HatsPage = ({history, match}) => {
  return <>
    <h2>Hats Page</h2>
    <button onClick={() => { history.push('/checkout') }}>Переход</button>
    <Link to={`${match.url}/lob/knob`}>Go to</Link>
  </>
}

const HatsDetailsPage = ({history, match: {params, url}}) => {
  return <>
    <h2>Hats Details Page</h2>
    <p>
      {params.shapka}
    </p>
    <p>
      {params.ushanka}
    </p>
  </>
}

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser, collectionsArray} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const ref = await createUserProfileDocument(user)
        ref.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
            })
        })
      }
      setCurrentUser(user)
      let toOnceAddToFirestore = collectionsArray.map(({title, items}) => {
        return {
          title, items
        }
      })
      addCollectionAndDocuments('Collections', toOnceAddToFirestore)
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
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>) } />
          <Route exact path='/hats' component={HatsPage} />
          <Route path='/rats/:shapka/:ushanka' component={HatsDetailsPage} />
        </Switch>
    </>
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => {
    return dispatch(setCurrentUserAction(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
