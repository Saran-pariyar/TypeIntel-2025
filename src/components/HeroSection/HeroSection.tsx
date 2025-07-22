import React from 'react';
import './hero.css';

const HeroSection = () => {
  return (
  <section className='hero-section'>
    <div className="hero-section-container">

      <h1 className='hero-title'>Type Smarter.</h1>
      <h2 className='hero-second-title'>Learn Faster.</h2>
      <p className="hero-desc">Practice typing with frontend intervie questions and web development topics. Boost your typing speed while preparing for your next big opportunity.</p>

      <div className="hero-btn-container">
        <button className="start-typing-btn">Start Typing</button>
        <button className="view-demo-btn">View Demo </button>
      </div>
    </div>
    
  </section>
  );
};

export default HeroSection;