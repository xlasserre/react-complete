import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage';
import Header from './components/header';
import Shop from './pages/shop';
import Hats from './pages/hats';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/hats' component={Hats} />
      </Switch>
    </div>
  )
}

export default App;
