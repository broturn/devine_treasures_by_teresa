// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { useStateValue } from "../../reducers/StateProvider"

// function Item({ id, title, image, price, rating}) {
//   const [{ cart }, dispatch] = useStateValue();

//   const addToCart = () => {
//     dispatch({
//       type: 'ADD_TO_CART',
//       item: {
//         id: id,
//         title: title,
//         description: description,
//         price: price,
//         imageUrl: imageUrl,
//       },
//     })
//   }


// return (
//   <div className="item">
//     <div className="item_info">
//       <p>{title}</p>
//     </div>
//   </div>
// )
// }
// export default Item;