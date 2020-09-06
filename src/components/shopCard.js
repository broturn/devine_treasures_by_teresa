import React, { useEffect } from 'react';




const ShopCard = (props) => {

    useEffect( () => {
        
    }, [])

    return (
        // <div className="wrapper">
            
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
            <div className="shop-item__back__add-to-cart">Add to Cart</div>
          </div>
        </div>
        // </div>
    );
};

export default ShopCard;