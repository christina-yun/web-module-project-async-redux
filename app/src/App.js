import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';

import Search from './components/Search';
import DrinkList from './components/DrinkList';
import Drink from './components/Drink';
import FavoriteDrinksList from './components/FavoriteDrinksList';

function App(props) {

  return (
    <div className="App">
      <div className='fave-display'>
        <Link to='/'><h1>Online Bartender</h1></Link>
        <FavoriteDrinksList />
      </div>
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
