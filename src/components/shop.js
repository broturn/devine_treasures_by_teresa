import React, { Component } from "react";

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';

export default class Shop extends Component {
  render() {
    return (
      <div className="app">
       <Header />
        <Navbar/>

     
      <div className="shop">
        <h1>I am the shop page</h1>
      </div>
      </div>
      
    );
  }
}
