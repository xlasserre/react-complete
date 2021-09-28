import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage';
import Header from './components/header';
import Shop from './pages/shop';
import Hats from './pages/hats';
import Auth from './pages/auth';

import './App.css';

const App = () => {
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

export default App;
