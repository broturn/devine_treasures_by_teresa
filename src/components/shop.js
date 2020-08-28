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
        <div className="top">
          <div className="designs">
            <img src ='./assets/images/designs/edit1.png'/>
          </div>
          <div className="designs">
              <img src ='./assets/images/designs/welcome.jpg'/>
          </div>
          <div className="designs">
              <img src ='./assets/images/designs/patriotic.jpg'/>
          </div>
        </div>
       </div>
      
   
    </div>
     );   
  }
}
