import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <div> Hello React </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
