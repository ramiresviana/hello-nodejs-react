import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Article from './pages/Article';
import New from './pages/New';
import Remove from './pages/Remove';
import Login from './pages/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import 'bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Article} path="/article/:id" />
        <Route component={New} path="/new" />
        <Route component={Remove} path="/remove/:id" />
        <Route component={Login} path="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
