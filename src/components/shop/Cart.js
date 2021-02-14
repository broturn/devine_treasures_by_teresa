import React from 'react'
import Header from '../headernavbar/header';
import Navbar from '../headernavbar/navbar';

function Cart() {
    return (
        <div className='app'>
        <Header />
        <Navbar/>
        <div className="cart">
           <h2>Your shopping cart</h2>
        </div>
        </div>
    )
}

export default Cart
