import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userActions';
import Homepage from './pages/homepage';
import Header from './components/header';
import Shop from './pages/shop';
import Hats from './pages/hats';
import Auth from './pages/auth';

import './App.css';

const App = ({ setCurrentUser }) => {

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        })
      }

      setCurrentUser(userAuth);
    })


    return () => {
      unsubscribeAuth();
    }
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/hats' component={Hats} />
        <Route exact path='/signin' component={Auth} />
      </Switch>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
