import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
export default class About extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Navbar/>
        
        <div className="about">
        After a thirty year career at the Lincoln parish highway department I am selling things 
        to add some beauty to your home.
        </div>
      </div>
    );
  }
}
