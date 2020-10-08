import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Article from './pages/Article';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import 'bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Article} path="/article/:id" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
