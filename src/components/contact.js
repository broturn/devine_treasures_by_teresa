import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';

export default class Contact extends Component {
  render() {
    return (
      
      <div className='app'>
         <Header />
        <Navbar/>
        <div>
        <h1>I am the contact page</h1>
        </div>
      </div>
      
    );
  }
}
