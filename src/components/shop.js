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
        
        <div className='shop-item__front'>
          <div className="top">
            <div className="designs">
              <img src ='./assets/images/designs/secondpass.jpg'/>
            </div>
            </div>
            {/* <div className='shop-item__front'>
          <div className="top">
            <div className="designs">
              <img src ='./assets/images/designs/welcome.jpg'/>
            </div>
            </div>
            </div> */}
            {/* <div className="shop">
              <div className='shop-item__front'>
                  <div className="designs">
                    <img src ='./assets/images/designs/welcome.jpg'/>
                  </div>
              </div>
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
          </div> */}
        </div>
        <div className='shop-item__back'>
          <div className="shop-item__back__title">
            Test title
          </div>
          <div className="shop-item__back__description">
            Test description
          </div>
          <div className="shop-item__back__price">
            $3.50
          </div>
          <div className="shop-item__back__quantity">
            2
          </div>
          <div className="shop-item__back__add-to-cart">
            Add to Cart
          </div>
        </div>
       </div>
   </div>
    
     );   
  }
}
