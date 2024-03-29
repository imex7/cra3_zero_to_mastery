import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup-page.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions'

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
    const {checkUserSession} = this.props
    checkUserSession()
    // const {setCurrentUser, collectionsArray} = this.props
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
    //   if (user) {
    //     const ref = await createUserProfileDocument(user)
    //     ref.onSnapshot((snapshot) => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data()
    //         })
    //     })
    //   }
    //   setCurrentUser(user)
    //   let toOnceAddToFirestore = collectionsArray.map(({title, items}) => {
    //     return {
    //       title, items
    //     }
    //   })
    //   addCollectionAndDocuments('Collections', toOnceAddToFirestore)
    // })
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

const mdp = (dispatch) => {
  return {
    checkUserSession: () => {
      return dispatch(checkUserSession())
    }
  }
}

export default connect(mapStateToProps, mdp)(App)
