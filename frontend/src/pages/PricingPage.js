import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PricingPage() {
  return (
    <div>
      <Header currentPage="pricing" />
      <main>
        <section className="pricing-section">
          <h1>Simple, Transparent Pricing</h1>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <h2>Starter</h2>
              <div className="price">$29<span>/month</span></div>
              <ul>
                <li>Up to 50 leads/month</li>
                <li>Basic task automation</li>
                <li>Email support</li>
                <li>Weekly reports</li>
              </ul>
              <a href="#dashboard" className="cta">Start Free Trial</a>
            </div>
            
            <div className="pricing-card featured">
              <h2>Professional</h2>
              <div className="price">$79<span>/month</span></div>
              <ul>
                <li>Up to 200 leads/month</li>
                <li>Advanced automation</li>
                <li>Priority support</li>
                <li>Daily reports & insights</li>
                <li>Custom integrations</li>
              </ul>
              <a href="#dashboard" className="cta">Start Free Trial</a>
            </div>
            
            <div className="pricing-card">
              <h2>Enterprise</h2>
              <div className="price">$199<span>/month</span></div>
              <ul>
                <li>Unlimited leads</li>
                <li>Full automation suite</li>
                <li>24/7 phone support</li>
                <li>Real-time analytics</li>
                <li>Custom workflows</li>
                <li>Dedicated account manager</li>
              </ul>
              <a href="#contact" className="cta">Contact Sales</a>
            </div>
          </div>
          
          <div className="pricing-footer">
            <p>All plans include a 14-day free trial. No credit card required.</p>
            <p>Need a custom solution? <a href="#contact">Contact us</a> for enterprise pricing.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 