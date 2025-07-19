import React, { useState } from 'react';
import './Navbar.css';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {

  const [menu,setMenu] = useState("hero-wrapper")

  return (
    <div id="nav">
      {/* Left: Logo + Name */}
      <div id="nav-left">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="name">
          <h3>Book Resale</h3>
        </div>
      </div>

      {/* Middle: Links */}
      <div id="nav-middle">
        <ul>
          <li className={menu === "hero-wrapper" ? "active" : ""}>
  <ScrollLink
    to="hero-wrapper"
    smooth={true}
    duration={500}
    onClick={() => setMenu("hero-wrapper")}
  >
    Home
  </ScrollLink>
</li>

<li className={menu === "buy" ? "active" : ""}>
  <ScrollLink
    to="how-to-buy"
    smooth={true}
    duration={500}
    onClick={() => setMenu("buy")}
  >
    Buy
  </ScrollLink>
</li>

<li className={menu === "sell" ? "active" : ""}>
  <ScrollLink
    to="how-to-sell"
    smooth={true}
    duration={500}
    onClick={() => setMenu("sell")}
  >
    Sell
  </ScrollLink>
</li>

<li className={menu === "about" ? "active" : ""}>
  <ScrollLink
    to="about"
    smooth={true}
    duration={500}
    onClick={() => setMenu("about")}
  >
    About Us
  </ScrollLink>
</li>

<li className={menu === "members" ? "active" : ""}>
  <ScrollLink
    to="Members"
    smooth={true}
    duration={500}
    onClick={() => setMenu("members")}
  >
    Reviews
  </ScrollLink>
</li>


        </ul>
      </div>

      {/* Right: Icons and Login */}
      <div id="nav-right">
        <FaSearch className="nav-icon" title="Search" />
        <div className='nav-cart'>
          <FaShoppingCart className="nav-icon" title="Cart" />
          <div className='dot'></div>
        </div>
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
