import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FeedbackPage() {
  const [reviews, setReviews] = useState([]);
  const [feedback, setFeedback] = useState([]);
  
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    rating: 5,
    text: ''
  });

  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    type: 'Feature Request',
    text: ''
  });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      ...reviewForm
    };
    setReviews([...reviews, newReview]);
    setReviewForm({ name: '', email: '', rating: 5, text: '' });
    alert('Thank you for your review!');
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      id: feedback.length + 1,
      ...feedbackForm
    };
    setFeedback([...feedback, newFeedback]);
    setFeedbackForm({ name: '', email: '', type: 'Feature Request', text: '' });
    alert('Thank you for your feedback!');
  };

  const renderStars = (rating, interactive = false, onChange = null) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`star ${i < rating ? 'filled' : ''} ${interactive ? 'interactive' : ''}`}
        onClick={interactive ? () => onChange(i + 1) : undefined}
      >
        ★
      </span>
    ));
  };

  return (
    <div>
      <Header currentPage="feedback" />
      <main>
        <section className="feedback-section">
          <h1>Feedback & Reviews</h1>
          <p>Help us improve AI COO and share your experience with other users.</p>

          <div className="feedback-grid">
            <div className="feedback-form-container">
              <h2>Leave a Review</h2>
              <form className="review-form" onSubmit={handleReviewSubmit}>
                <div className="form-group">
                  <label htmlFor="review-name">Name</label>
                  <input
                    type="text"
                    id="review-name"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="review-email">Email</label>
                  <input
                    type="email"
                    id="review-email"
                    value={reviewForm.email}
                    onChange={(e) => setReviewForm({...reviewForm, email: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Rating</label>
                  <div className="rating-input">
                    {renderStars(reviewForm.rating, true, (rating) => setReviewForm({...reviewForm, rating}))}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="review-text">Your Review</label>
                  <textarea
                    id="review-text"
                    rows="4"
                    value={reviewForm.text}
                    onChange={(e) => setReviewForm({...reviewForm, text: e.target.value})}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="cta">Submit Review</button>
              </form>
            </div>

            <div className="feedback-form-container">
              <h2>Send Feedback</h2>
              <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
                <div className="form-group">
                  <label htmlFor="feedback-name">Name</label>
                  <input
                    type="text"
                    id="feedback-name"
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="feedback-email">Email (optional)</label>
                  <input
                    type="email"
                    id="feedback-email"
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="feedback-type">Type</label>
                  <select
                    id="feedback-type"
                    value={feedbackForm.type}
                    onChange={(e) => setFeedbackForm({...feedbackForm, type: e.target.value})}
                  >
                    <option value="Feature Request">Feature Request</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="General Feedback">General Feedback</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="feedback-text">Your Feedback</label>
                  <textarea
                    id="feedback-text"
                    rows="4"
                    value={feedbackForm.text}
                    onChange={(e) => setFeedbackForm({...feedbackForm, text: e.target.value})}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="cta">Send Feedback</button>
              </form>
            </div>
          </div>

          <div className="reviews-display">
            <h2>Recent Reviews</h2>
            <div className="reviews-grid">
              {reviews.map(review => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <strong>{review.name}</strong>
                    <div className="rating">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p>{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="feedback-display">
            <h2>Recent Feedback</h2>
            <div className="feedback-grid">
              {feedback.map(item => (
                <div key={item.id} className="feedback-card">
                  <div className="feedback-header">
                    <strong>{item.name}</strong>
                    <span className="feedback-type">{item.type}</span>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 