import React, { useEffect } from 'react';
import { useDispatch } from "react-redux"

import { addToCart } from "../../actions/cartActions";

const ShopCard = (props) => {
  const dispatch = useDispatch()

    useEffect( () => {
        
    }, [])

    return (
        <div className="shop">
          <div className="shop-item__front">
            <div className="top">
              <div className="designs">
                {props.product_id}
                {props.product.imageUrl}
              </div>
            </div>
          </div>
          <div className="shop-item__back">
            <div className="shop-item__back__title">{props.product.title}</div>
            <div className="shop-item__back__description">{props.product.description}</div>
            <div className="shop-item__back__price">${props.product.price}</div>
            <div className="shop-item__back__quantity" quantity={1} />
            <button onClick={() => dispatch(addToCart(props.id))}>
              Add To Cart
            </button>
          </div>
        </div>
    );
};

export default ShopCard;