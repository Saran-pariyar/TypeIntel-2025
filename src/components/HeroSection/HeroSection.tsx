import React from 'react';
import './hero.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Gradient overlays */}
      <div className="gradient-overlay-1"></div>
      <div className="gradient-overlay-2"></div>
      
      <div className="container">
        {/* Main Hero Content */}
        <div className="hero-content">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="main-heading">
              Type Smarter.
              <br />
              <span className="green-text">Interview Better.</span>
            </h1>
            
            {/* Description */}
            <p className="description">
              Practice typing with real frontend interview questions. Boost your speed 
              while preparing for your next big opportunity.
            </p>
            
            {/* CTA Buttons */}
            <div className="button-container">
              <button className="primary-button">
                <svg className="button-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Start Typing
              </button>
              
              <button className="secondary-button">
                View Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div className="stats-section">
          <div className="stats-grid">
            {/* Stat 1 */}
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Interview Questions</div>
            </div>
            
            {/* Stat 2 */}
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Topics Covered</div>
            </div>
            
            {/* Stat 3 */}
            <div className="stat-item">
              <div className="stat-number">60%</div>
              <div className="stat-label">Speed Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;