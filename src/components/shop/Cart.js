import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { useStateValue } from "../../reducers/StateProvider"

import Header from '../headernavbar/header';
import Navbar from '../headernavbar/navbar';

  function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
      <div className='app'>
          <Header />
          <Navbar/>
          <div className='Cart'>
          </div>
        </div>
    )
  }
      // this.props.cart.map(item => total += item.product.price * item.quantity);
      
        

    
export default Cart;