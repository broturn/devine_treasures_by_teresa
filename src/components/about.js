import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
export default class About extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Navbar/>
        <h1>I am the about page</h1>
      </div>
    );
  }
}
