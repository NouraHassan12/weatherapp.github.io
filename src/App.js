import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Components/nav';
import Home from './Components/Home';
import Weather from './Components/Weather'

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div className="">
        
        <Nav />
       
        <Route exact path="/" component={Home} />
        <Route exact path="/Weather" component={Weather} />

      </div>
    </Router>
   
    )
  }

}
