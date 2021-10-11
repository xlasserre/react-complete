import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import Homepage from './pages/homepage';
import Header from './components/header';
import Shop from './pages/shop';
import Hats from './pages/hats';
import Auth from './pages/auth';

import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    })
    return () => {
      unsubscribeAuth();
    }
  }, [])

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/hats' component={Hats} />
        <Route exact path='/signin' component={Auth} />
      </Switch>
    </div>
  )
}

export default App;
