import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Article from './pages/Article';
import New from './pages/New';
import Edit from './pages/Edit';
import Remove from './pages/Remove';
import Login from './pages/Login';

import AppContext from './context'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import 'bootstrap';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <AppContext.Provider value={[auth, setAuth]}>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Article} path="/article/:id" />
          <Route component={New} path="/new" />
          <Route component={Edit} path="/edit/:id" />
          <Route component={Remove} path="/remove/:id" />
          <Route component={Login} path="/login" />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
