import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-bg">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
      </div>

      <div className="hero-content" id="center">
        <div className="hero" id="hero1">
          <h1>We Sell Used</h1>
        </div>
        <div className="hero" id="hero2">
          <h1><span>Engineering</span></h1>
        </div>
        <div className="hero" id="hero3">
          <h2>Books</h2>
          <span>/</span>
          <h2>Notes</h2>
        </div>
        <div className="hero" id="hero4">
          <h1>From Seniors</h1>
        </div>

        <p className="subtext typewriter">Affordable. Trusted. Fast.</p>

        <div className="scroll-down">
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
