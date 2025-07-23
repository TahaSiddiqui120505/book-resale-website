import React, { useContext, useState } from 'react';
import './Navbar.css';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("hero-wrapper")
    const {getTotalCartAmount, token, setToken} = useContext(StoreContext)
    const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
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
          <Link to='/cart'><FaShoppingCart className="nav-icon" title="Cart" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
         {!token?<button className='signbutton' onClick={()=>setShowLogin(true)}>sign in</button>
            :<div className='navbar-profile'>
              <img src={assets.profile_icon} className='white-filter' alt="" />
              <ul className="nav-profile-dropdown">
                <li ><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
              </div>}
      </div>
    </div>
  );
};

export default Navbar;
