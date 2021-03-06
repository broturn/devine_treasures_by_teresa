import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './home';
import Shop from './shop/Shop';
import About from './about';
import Contact from './contact';
import Cart from './shop/Cart';
import Login from './Login';

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
            <Route path="/Cart" component={Cart}/>
            <Route path="/Login" component={Login}/>
          </Switch>
        </Router>
      </div>
      
    );
  }
}
