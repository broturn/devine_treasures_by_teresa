import React from 'react'
import Header from '../headernavbar/header';
import Navbar from '../headernavbar/navbar';

function Cart() {
    return (
        <div className='app'>
        <Header />
        <Navbar/>
        <div className="cart">
            I am the cart
        </div>
        </div>
    )
}

export default Cart
