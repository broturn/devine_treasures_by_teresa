import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Navbar/>
        <div className='home'>
            Welcome to Devine Treasure by me, Mrs. Teresa Morrow. Everything here is custom made by myself.
        </div>
      </div>
    );
  }
}