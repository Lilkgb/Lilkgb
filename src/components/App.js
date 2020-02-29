import React from 'react';
import './App.scss';
import Error404 from './Error404';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import AOS from 'aos';

function App() {

  AOS.init();
  AOS.refresh();

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
