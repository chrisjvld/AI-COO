import React from 'react';

export default function Header({ currentPage }) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">AI COO</div>
        <ul className="nav-links">
          <li><a href="#home" className={currentPage === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#what-is-ai-coo" className={currentPage === 'what-is-ai-coo' ? 'active' : ''}>What is AI COO?</a></li>
          <li><a href="#feedback" className={currentPage === 'feedback' ? 'active' : ''}>Feedback & Reviews</a></li>
          {/* <li><a href="#pricing" className={currentPage === 'pricing' ? 'active' : ''}>Pricing</a></li> */}
          <li><a href="#dashboard" className={currentPage === 'dashboard' ? 'active' : ''}>Dashboard</a></li>
          <li><a href="#contact" className={currentPage === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
} 