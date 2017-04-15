import React, { Component } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Podcasts from './Podcasts';

class Featured extends Component {

      render() {
        return (
    <div id="main">
      
      <div id="content" className="main animated fadein">

        <div className="hero-header bg-shop animated fadeindown">
          <h1 className="hero-title">Shop</h1>
        </div>

        <div className="animated fadeinup delay-1">
          <Podcasts />
          
          <div className="clr"></div>
        </div>
        <Footer />
      </div>        
        <Nav />
    </div>
          );
      }
}

export default Featured;