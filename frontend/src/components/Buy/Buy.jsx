import React from 'react';
import './Buy.css';
import { Link } from 'react-router-dom';
// import browseIcon from '../assets/browse.svg';
// import addBagIcon from '../assets/addbag.svg';
// import orderIcon from '../assets/order.svg';

const Buy = () => {
  return (
    <section id="how-to-buy">
      <div className="buy-header">
        <h2><span>Buy books</span> in 3 Smart Steps</h2>
        <p>No confusion. No delay. Just a smooth process to get your hands on top-condition used books.</p>
      </div>

      <div className="buy-steps">
        <div className="buy-card" data-aos="zoom-in-up">
          {/* <img src={browseIcon} alt="Browse Books" /> */}
          <h3>1. Discover Books</h3>
          <p>Explore thousands of listings filtered by year, subject, or popularity.</p>
        </div>
        <div className="buy-card" data-aos="zoom-in-up" data-aos-delay="200">
          {/* <img src={addBagIcon} alt="Add to Bag" /> */}
          <h3>2. Add to Bag</h3>
          <p>Add selected books to your bag and view total price instantly.</p>
        </div>
        <div className="buy-card" data-aos="zoom-in-up" data-aos-delay="400">
          {/* <img src={orderIcon} alt="Place Order" /> */}
          <h3>3. Place Order</h3>
          <p>Confirm your order. The seller will contact you to arrange pickup or delivery.</p>
        </div>
      </div>

      <div className="capsule-sell-wrapper">
  <Link to="/buy" className="capsule-sell-btn">
    <span className="glow-text">Start Buying</span>
  </Link>
</div>
    </section>
  );
};

export default Buy;
