import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reducer from './reducers/index';

import './index.css';

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,
  document.getElementById('root')
);