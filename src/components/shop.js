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
        <div className='front'>
          <div className="top">
            <div className="designs">
              <img src ='./assets/images/designs/secondpass.jpg'/>
            </div>
            <div className="designs">
                <img src ='./assets/images/designs/welcome.jpg'/>
            </div>
            <div className="designs">
                <img src ='./assets/images/designs/patriotic.jpg'/>
            </div>
          </div>
          <div className="bottom">
          <div className="designs">
              <img src ='./assets/images/designs/buck.jpg'/>
            </div>
            <div className="designs">
                <img src ='./assets/images/designs/doe.jpg'/>
            </div>
            <div className="designs">
                <img src ='./assets/images/designs/sunflower.jpg'/>
            </div>
          </div>
        </div>
        <div className='back'>
          <h1>Hi I am the back</h1>
        </div>
       </div>
   
    </div>
     );   
  }
}
