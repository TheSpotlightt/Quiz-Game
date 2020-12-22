import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/home/home';
import GeneralKnowledge from './pages/general-knowledge';
import Geography from './pages/geography/geography';
import History from './pages/history/history';
import Mythology from './pages/mythology/mythology';
import Books from './pages/Entertainment/books';
import Film from './pages/Entertainment/film';
import Music from './pages/Entertainment/music';

function App() {
  return (
    <Router>
      <Switch>
      
        <Route path='/' component={Home} exact />
        <Route path='/GeneralKnowledge' component={GeneralKnowledge} />
        <Route path='/Geography' component={Geography} />
        <Route path='/History' component={History} />
        <Route path='/Mythology' component={Mythology} />
        <Route path='/Books' component={Books} />
        <Route path='/Film' component={Film} />
        <Route path='/Music' component={Music} />

      </Switch>
    </Router>
  );
}

export default App;
