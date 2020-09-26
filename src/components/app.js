import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from './home';
import Shop from './shop/shop';
import About from './about';
import Contact from './contact';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </Router>
      </div>
      
    );
  }
}
