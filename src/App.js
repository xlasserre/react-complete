import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage';
import Shop from './pages/shop';
import Hats from './pages/hats';

import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/hats' component={Hats} />
      </Switch>
    </div>
  )
}

export default App;
