import React, { Component } from "react";

import Header from "./headernavbar/header";
import Navbar from "./headernavbar/navbar";
import ShopCard from "./shopCard"

// import shopProducts from "./shopItems";

export default class Shop extends Component {



  componentDidMount() {
    //axios call, bring in data from backend, set that to a piece of state
  }



  render() {

    const shopProducts =
    [
          {
            _id: 0,
            title: "Patriotic Doves",
            description: "The stars and strips sparkle.",
            price: 50,
            imageUrl: <img src="./assets/images/designs/secondpass.jpg" />,
          },
          {
            _id: 1,
            title: "Welcome",
            description: "A wreath sending a warm and welcoming message",
            price: 50,
            imageUrl: <img src="./assets/images/designs/welcome.jpg" />,
          },
          {
            _id: 2,
            title: "God Bless the USA",
            description: "Show your patriotism with this wreath",
            price: 50,
            imageUrl: <img src="./assets/images/designs/patriotic.jpg" />,
          },
          {
            title: "Test",
            description: "Test",
            price: 50,
            imageUrl: <img src="./assets/images/designs/buck.jpg" />,
          },
          {
            title: "Test",
            description: "Test",
            price: 50,
            imageUrl: <img src="./assets/images/designs/doe.jpg" />,
          },
          {
            title: "Test",
            description: "Test",
            price: 50,
            imageUrl: <img src="./assets/images/designs/sunflower.jpg" />,
          }
        ]
    
    const { _id, title, description, price, imageUrl } = this.props;
    // Map(props)
    return (
      <div className="app">
        <Header />
        <Navbar />
      <div className="wrapper">
        { shopProducts.map( product => (
          <ShopCard product={product} />
        )) }
        </div>
      </div>
    );
  }
}
