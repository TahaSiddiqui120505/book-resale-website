import React from 'react';
import './Sell.css';
import { Link } from 'react-router-dom';

const Sell = () => {
  return (
    <section id="how-to-sell">
      <div className="sell-header">
        <h2><span>Sell your books</span> in 3 Easy Steps</h2>
        <p>Turn your used books into money by following these super-simple steps. Quick, secure & student-friendly!</p>
      </div>

      <div className="sell-steps">
        <div className="sell-card" data-aos="fade-up" data-aos-delay="100">
          <div className="icon-box">
            <img src="assets/post-ad.svg" alt="Post Ad" />
          </div>
          <h3>Post Your Book</h3>
          <p>Upload book details, condition, and photos. More details mean quicker sales!</p>
        </div>

        <div className="sell-card" data-aos="fade-up" data-aos-delay="200">
          <div className="icon-box">
            <img src="assets/price.svg" alt="Set Price" />
          </div>
          <h3>Set a Price</h3>
          <p>Decide a fair price. You can always update it later from your dashboard.</p>
        </div>

        <div className="sell-card" data-aos="fade-up" data-aos-delay="300">
          <div className="icon-box">
            <img src="assets/payment.svg" alt="Get Paid" />
          </div>
          <h3>Get Paid</h3>
          <p>Once the book is sold, receive payment directly to your UPI or bank account.</p>
        </div>
      </div>

      <div className="capsule-sell-wrapper">
          <Link to="/sell" className="capsule-sell-btn">
            <span className="glow-text">Start Selling</span>
          </Link>
      </div>

      <div className="buy-sell-section">
        <div className="blob3"></div>
      </div>
    </section>
  );
};
export default Sell;
