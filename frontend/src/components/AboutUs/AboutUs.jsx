import React, { useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const handleScroll = () => {
      revealElements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger once

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about" id="About">
      <div className="about_main">
        <div className="about_text reveal">
          <h1><span>About Us</span></h1>
          <h3>Why Choose Us?</h3>
          <p>
            At our platform, we're creating a smart way for students to <strong>save money and support each other</strong>.
          </p>
          <ul className="about_points">
            <li><strong>Seniors</strong> can pass on their books — and even share tips on how to crack those tricky subjects.</li>
            <li><strong>Juniors</strong> get the same books at <strong>50% off</strong>, right from their own college network.</li>
          </ul>
          <p className="about_bottom">
            This isn’t just a book resale site. It’s a <strong>student-powered circle</strong> of learning, advice, and affordable access — all built <strong>by students, for students</strong>.
          </p>
        </div>
        <div className="image reveal">
          <img src="/image/about.png" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
