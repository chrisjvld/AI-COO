import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Header currentPage="home" />
      <main>
        <section className="hero">
          <h1>Your AI-Powered COO for Solopreneurs & Microteams</h1>
          <p className="subheadline">Automate lead sorting, daily operations, and follow-ups — without the overwhelm.</p>
          <a href="#pricing" className="cta">Try it Free</a>
        </section>
        <section className="features">
          <h2>Features</h2>
          <div className="feature-list">
            <div className="feature-box">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#222"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="Inter" dy=".3em">Inbox</text></svg>
              </div>
              <h3>Lead Inbox</h3>
              <p>All your leads, sorted and prioritized automatically.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#222"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="Inter" dy=".3em">Tasks</text></svg>
              </div>
              <h3>Task Manager</h3>
              <p>Stay on top of daily operations with smart task tracking.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#222"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="Inter" dy=".3em">AI</text></svg>
              </div>
              <h3>Smart Summaries</h3>
              <p>Get daily summaries and actionable insights, powered by AI.</p>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <h2>What Our Users Say</h2>
          {/* No fake testimonials shown */}
        </section>
      </main>
      <Footer />
    </div>
  );
} 