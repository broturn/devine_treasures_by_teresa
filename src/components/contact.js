import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';

export default class Contact extends Component {
  render() {
    return (
      
      <div className='app'>
         <Header />
        <Navbar/>
        
        <div className='contact'>
          <div className='contact-name'>
            Teresa Morrow
          </div>
          <div className='contact-email'>
              teresamorrow1966@gmail.com
          </div>
        </div>
      </div>
      
    );
  }
}
