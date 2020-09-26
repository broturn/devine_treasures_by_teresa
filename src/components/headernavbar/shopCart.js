import React, { Component } from 'react';

import { connect } from 'react-redux';

import history from '../../history';

function CartContent({className, products}) {
    let count = products.length;
    let productsJSX = products.map(product => <CartProduct {...product}key={product._id}/>);
    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
                Cart ({count})
            </div>
            <div className='cart-content__products'>
                {productsJSX}
            </div>
            <CartFooter className='cart-content__footer' products={products}/>
        </div>
    )
}

function CartFooter({className, products}) {
    let subtotal =0;
    products.map(cartProduct => {
        subtotal += cartProduct.quantity * cartProduct.product.price
    })
    return (
        <div className={`${className} cart-footer`}>
            Checkout
            < div className='cart-footer__subtotal'>
                Subtotal
            </div>
            <div className='cart-footer__price'>
                ${subtotal}
            </div>
        </div>
    )
}

export default class ShopCart extends Component {
    render() {
        const { className } = this.props;
        return (
            <div id='shop-cart' className={`${className} shop-cart cart-hidden`}>
                <CartButton className='shop-cart__toggle' icon='fas fa-times' onClick={this.handleAddToCart}/>
                <CartContent className='shop-cart__content' products={this.props.cartProducts}/>
            </div>
        )
    }
}