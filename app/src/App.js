import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';

import Search from './components/Search';
import DrinkList from './components/DrinkList';
import Drink from './components/Drink';

function App(props) {

  return (
    <div className="App">
      <Link to='/'><h1>Online Bartender</h1></Link>
      <Search />
      <div className='container'>
        <Switch>
          <Route path='/drinks/:id'>
            <Drink />
          </Route>
          <Route path='/drinks'>
            <DrinkList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
