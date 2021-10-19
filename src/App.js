import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import Homepage from './pages/homepage';
import Header from './components/header';
import Shop from './pages/shop';
import Hats from './pages/hats';
import Auth from './pages/auth';

import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

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
