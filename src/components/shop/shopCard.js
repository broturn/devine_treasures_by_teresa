import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useStateValue } from "../../reducers/cartReducer";

// import { addToCart } from "../../actions/cartActions";

function Item({ id, title, description, price, imageUrl}) {
  const [{ basket }, dispatch] = useStateValue();
}
const addToCart = () => {
  dispatch({
    type: "ADD_TO_CART",
    item: {
      id: id,
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
    },
  });
};
const ShopCard = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

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
        <div className="shop-item__back__description">
          {props.product.description}
        </div>
        <div className="shop-item__back__price">${props.product.price}</div>
        <div className="shop-item__back__quantity" quantity={1} />
        <button onClick={() => console.log(dispatch(addToCart(props.id)))}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
