import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Search from './components/Search';
import DrinkList from './components/DrinkList';
import Drink from './components/Drink';

function App(props) {

  return (
    <div className="App">
      <h1>Drink App</h1>
      <Search />
      <div className='container'>
        <Switch>
          <Route path='/drinks/:id'>
            <Drink />
          </Route>
          <Route path='/drinks'>
            <DrinkList />
          </Route>
          {/* <Route path='/'>
            <Redirect to='/drinks'/>
          </Route> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
