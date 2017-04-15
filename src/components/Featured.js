import React, { Component } from 'react';

class Featured extends Component {

      render() {
        return (
    <div id="main">
      
      <div id="content" className="main animated fadein">

        <div className="hero-header bg-shop animated fadeindown">
          <h1 className="hero-title">Shop</h1>
        </div>

        <div className="animated fadeinup delay-1">
          <div className="shop-banner animated fadeinup delay-1">
            <a href="category.html">
              <img src="img/banner1.jpg" alt="" />
              <div className="opacity-overlay valign-wrapper">
                <div className="valign center width-100">
                  <h3 className="white-text">New Arrivals</h3>
                  <p className="white-text">SS 2016</p>
                </div>
              </div>
            </a>
          </div>

          <div className="shop-banner animated fadeinup delay-2">
            <a href="category.html">
              <img src="img/banner2.jpg" alt="" />
              <div className="opacity-overlay valign-wrapper">
                <div className="valign center width-100">
                  <h3 className="white-text">Accessories</h3>
                  <p className="white-text">Watches 2016</p>
                </div>
              </div>
            </a>
          </div>

          <div className="shop-banner animated fadeinup delay-3">
            <a href="category.html">
              <img src="img/banner3.jpg" alt="" />
              <div className="opacity-overlay valign-wrapper">
                <div className="valign center width-100">
                  <h3 className="white-text">Shoes</h3>
                  <p className="white-text">50% Sales</p>
                </div>
              </div>
            </a>
          </div>

          <div className="shop-banner-full animated fadeinup delay-3">
            <a href="category.html">
              <img src="img/banner4.jpg" alt="" />
              <div className="opacity-overlay valign-wrapper">
                <div className="valign center width-100">
                  <h3 className="white-text">Sale</h3>
                  <p className="white-text">50% - 70%</p>
                </div>
              </div>
            </a>
          </div>
          
          <div className="clr"></div>
        </div>

        <footer className="page-footer primary-color">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <p className="center-align grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                <div className="center-align">
                  <i className="ion-social-facebook m-10 white-text"></i>
                  <i className="ion-social-twitter m-10 white-text"></i>
                  <i className="ion-social-pinterest m-10 white-text"></i>
                  <i className="ion-social-dribbble m-10 white-text"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="line white"></div>
          <div className="footer-copyright primary-color">
            <div className="container">
            2016 Codnauts
            <a className="grey-text text-lighten-4 right" href="#!">Privacy Policy</a>
            </div>
          </div>
        </footer>

      </div> 

      <div className="menu-trigger z-depth-2"> 
        <div id="menu-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <nav id="menu" className="menu">
        <div className="menu-navigation">
          <ul className="full-menu collapsible">
            <li className="menu-title">Eclipse</li>
            <li>
              <div className="collapsible-header">Home</div>
              <div className="collapsible-body">
                <ul className="collapsible">
                  <li>
                    <a href="index.html">classNameic</a>
                    <a href="index-sliced.html">Sliced</a>
                    <a href="index-slider.html">Slider</a>
                    <a href="index-drawer.html">Drawer</a>
                    <a href="index-walkthrough.html">Walkthrough</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="collapsible-header">Pages</div>
              <div className="collapsible-body">
                <ul className="collapsible">
                  <li>
                    <a href="profile.html">Profile</a>
                    <a href="article.html">Article</a>
                    <a href="event.html">Event</a>
                    <a href="project.html">Project</a>
                    <a href="player.html">Music Player</a>
                    <a href="todo.html">ToDo</a>
                    <a href="category.html">Category</a>
                    <a href="product.html">Product</a>
                    <a href="checkout.html">Checkout</a>
                    <a href="search.html">Search</a>
                    <a href="faq.html">Faq</a>
                    <a href="coming-soon.html">Coming Soon</a>
                    <a href="404.html">404</a>
                    <a href="500.html">500</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="collapsible-header">App</div>
              <div className="collapsible-body">
                <ul className="collapsible">
                  <li>
                    <a href="calendar.html">Calendar</a>
                    <a href="chat.html">Chat</a>
                    <a href="chart.html">Chart</a>
                    <a href="timeline.html">Timeline</a>
                    <a href="login.html">Login</a>
                    <a href="signup.html">Sign Up</a>
                    <a href="lockscreen.html">Lockscreen</a>
                    <a href="forgot.html">Password</a>
                    <a href="notification.html">Notification</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="collapsible-header">Portfolio</div>
              <div className="collapsible-body">
                <ul className="collapsible">
                  <li>
                    <a href="portfolio-filter.html">Filter</a>
                    <a href="portfolio-masonry.html">Masonry</a>
                    <a href="portfolio-card.html">Card</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="collapsible-header">Blog</div>
              <div className="collapsible-body">
                <ul className="collapsible">
                  <li>
                    <a href="blog.html">classNameic</a>
                    <a href="blog2.html">Card</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="collapsible-header">Gallery</div>
              <div className="collapsible-body">
                <ul className="collapsible">
                  <li>
                    <a href="gallery-filter.html">Filter</a>
                    <a href="gallery-masonry.html">Masonry</a>
                    <a href="gallery-card.html">Card</a>
                  </li>
                </ul>
              </div>
            </li>
            <li><a href="shop.html" className="no-child">Shop</a></li>
            <li><a href="news.html" className="no-child">News</a></li>
            <li><a href="video.html" className="no-child">Video</a></li>
            <li><a href="contact.html" className="no-child">Contact</a></li>
          </ul>
        </div>
      </nav> 

    </div>
          );
      }
}

export default Featured;