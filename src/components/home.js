import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
          <Header />
        <Navbar/>
        <h1>I am the Home page</h1>
      </div>
    );
  }
}