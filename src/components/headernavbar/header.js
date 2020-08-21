import React, { Component } from 'react';

import { connect } from 'react-redux';
import history from '../../history';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo'>
          <img src ='./assets/images/logos/logo1.png'/>
         </div>
      </div>
    );
  }
}
