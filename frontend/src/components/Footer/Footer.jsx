import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer_main">

        <div className="footer_tag">
          <h2>Location</h2>
          <p>Sri Lanka</p>
          <p>USA</p>
          <p>India</p>
          <p>Japan</p>
          <p>Italy</p>
        </div>

        <div className="footer_tag">
          <h2>Quick Link</h2>
          <p>Home</p>
          <p>About</p>
          <p>Menu</p>
          <p>Gallery</p>
          <p>Order</p>
        </div>

        <div className="footer_tag">
          <h2>Contact</h2>
          <p>+94 12 3456 789</p>
          <p>+94 25 5568456</p>
          <p>johndeo123@gmail.com</p>
          <p>foodshop123@gmail.com</p>
        </div>

        <div className="footer_tag">
          <h2>Our Service</h2>
          <p>Fast Delivery</p>
          <p>Easy Payments</p>
          <p>24 x 7 Service</p>
        </div>

        <div className="footer_tag">
          <h2>Follows</h2>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>

      </div>

      <p className="end">
        Design by <span><i className="fa-solid fa-face-grin"></i> WT Master Code</span>
      </p>
    </footer>
  );
};

export default Footer;
