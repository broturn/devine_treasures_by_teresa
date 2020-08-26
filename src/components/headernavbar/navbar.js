import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { NavLink } from "react-router-dom";

const Navbar = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className='nav-link-wrapper'>
        <NavLink to={route} activeClassName='nav-link-active'>
          {linkText}
        </NavLink>
      </div>
    )
  }


return (
  <div className='nav-wrapper'>
    <div className='left-side'>
      <div className='nav-link-wrapper'>
        <NavLink exact to="/" activeClassName='nav-link-active'>
          Home
        </NavLink>
      </div>
      <div className='nav-link-wrapper'>
        <NavLink exact to='/shop' activeClassName='nav-link-active'>
          Shop
        </NavLink>
      </div>
    </div>
  <div className='right-side'>
    <div className='nav-link-wrapper'>
      <NavLink exact to='/contact'>
        Contact
      </NavLink>
    </div>
    <div className='nav-link-wrapper'>
      <NavLink exact to='/about'>
        About
      </NavLink>
    </div>
  </div>
  </div>
)
}
export default withRouter(Navbar)