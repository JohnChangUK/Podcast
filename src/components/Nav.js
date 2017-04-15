import React, { Component } from 'react';

export default (props) => {
  
  return (
    <div>
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

