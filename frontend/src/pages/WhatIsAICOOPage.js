import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WhatIsAICOOPage() {
  return (
    <div>
      <Header currentPage="what-is-ai-coo" />
      <main>
        <section className="aboutus-section">
          <h1>What is AI COO?</h1>
          <p>AI COO is your virtual Chief Operating Officer, designed specifically for solopreneurs and small teams who need operational support without the overhead.</p>
          
          <h2>How It Works</h2>
          <div className="feature-list">
            <div className="feature-box">
              <h3>Lead Management</h3>
              <p>Automatically sort and prioritize incoming leads based on your criteria. Never miss a hot prospect again.</p>
            </div>
            <div className="feature-box">
              <h3>Task Automation</h3>
              <p>Smart task scheduling and reminders keep you on track with daily operations and follow-ups.</p>
            </div>
            <div className="feature-box">
              <h3>AI Insights</h3>
              <p>Get weekly reports and actionable insights to optimize your business operations.</p>
            </div>
          </div>

          <h2>Perfect For</h2>
          <ul>
            <li>Solopreneurs managing multiple clients</li>
            <li>Small teams without dedicated operations staff</li>
            <li>Consultants juggling leads and projects</li>
            <li>Anyone who wants to automate repetitive tasks</li>
          </ul>

          <div className="cta-section">
            <a href="#pricing" className="cta">Get Started Today</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 