import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DailyTasks from '../components/DailyTasks';
import MeetingsCalendar from '../components/MeetingsCalendar';
import WeeklyTrends from '../components/WeeklyTrends';

export default function DashboardPage() {
  // Demo data for follow-ups
  const followUps = [
    {
      name: 'Jamie', gender: 'Female', email: 'jamie@email.com', leadScore: 8, leadClass: 'Hot', aiNotes: 'Interested in product, requested demo.', main: 'Reply to Jamie'
    },
    {
      name: 'Alex', gender: 'Male', email: 'alex@email.com', leadScore: 6, leadClass: 'New', aiNotes: 'Sent proposal, waiting for response.', main: 'Send proposal to Alex'
    }
  ];
  const [selectedFollowUp, setSelectedFollowUp] = useState(null);

  // Demo data for inbox/notes
  const inboxNotes = [
    {
      name: 'Jamie', gender: 'Female', email: 'jamie@email.com', summary: 'Contract sent', date: 'July 3, 2025', message: 'Sent contract, waiting for reply.'
    },
    {
      name: 'Alex', gender: 'Male', email: 'alex@email.com', summary: 'Needs onboarding call', date: 'July 2, 2025', message: 'Needs onboarding call.'
    },
    {
      name: 'Sam', gender: 'Male', email: 'sam@email.com', summary: 'Asked about pricing', date: 'July 1, 2025', message: 'Asked about pricing details.'
    }
  ];
  const [selectedInbox, setSelectedInbox] = useState(null);

  return (
    <div>
      <Header currentPage="dashboard" />
      <main>
        <section className="dashboard-section dashboard-flare-bg">
          <h1 className="dashboard-title">Dashboard</h1>
          <div className="dashboard-grid-sym">
            <DailyTasks />
            <WeeklyTrends thisWeek={23} lastWeek={18} />
            <MeetingsCalendar />
            <div className="dashboard-card align-center">
              <h2>Urgent Follow-ups</h2>
              <div className="followup-cards small-followups">
                {followUps.map((f, i) => (
                  <div className="followup-card" key={i} onClick={() => setSelectedFollowUp(f)} style={{ cursor: 'pointer' }}>
                    <div className="followup-main">{f.main}</div>
                  </div>
                ))}
              </div>
              {selectedFollowUp && (
                <div className="meeting-modal-overlay" onClick={() => setSelectedFollowUp(null)}>
                  <div className="meeting-modal" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                      <h3>{selectedFollowUp.main}</h3>
                      <button className="close-btn" onClick={() => setSelectedFollowUp(null)}>×</button>
                    </div>
                    <div className="modal-content">
                      <p><strong>Name:</strong> {selectedFollowUp.name}</p>
                      <p><strong>Gender:</strong> {selectedFollowUp.gender}</p>
                      <p><strong>Email:</strong> {selectedFollowUp.email}</p>
                      <p><strong>Lead Score:</strong> {selectedFollowUp.leadScore} / 10</p>
                      <p><strong>Lead Class:</strong> {selectedFollowUp.leadClass}</p>
                      <p><strong>AI NOTES:</strong> {selectedFollowUp.aiNotes}</p>
                      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                        <button className="followup-btn contact-lead">Contact Lead</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="dashboard-card align-center">
              <h2>Notes & Inbox Preview</h2>
              <div className="dashboard-notes">
                {inboxNotes.map((n, i) => (
                  <div className="note" key={i} onClick={() => setSelectedInbox(n)} style={{ cursor: 'pointer' }}>
                    {n.name}: {n.message}
                  </div>
                ))}
              </div>
              {selectedInbox && (
                <div className="meeting-modal-overlay" onClick={() => setSelectedInbox(null)}>
                  <div className="meeting-modal" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                      <h3>Inbox Message</h3>
                      <button className="close-btn" onClick={() => setSelectedInbox(null)}>×</button>
                    </div>
                    <div className="modal-content">
                      <p><strong>Name:</strong> {selectedInbox.name}</p>
                      <p><strong>Gender:</strong> {selectedInbox.gender}</p>
                      <p><strong>Email:</strong> {selectedInbox.email}</p>
                      <p><strong>Message summary:</strong> {selectedInbox.summary}</p>
                      <p><strong>Date of action:</strong> {selectedInbox.date}</p>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                        <button className="followup-btn view-content">View Content</button>
                        <button className="followup-btn send-reminder">Send Reminder</button>
                        <button className="followup-btn remove-inbox">Remove from Inbox</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="dashboard-card align-center">
              <h2>Leads Today</h2>
              <div className="dashboard-value">8</div>
              <div className="progress-bar-outer">
                <div className="progress-bar-inner" style={{ width: '80%' }}></div>
              </div>
              <svg width="60" height="32">
                <rect x="0" y="12" width="10" height="20" rx="3" fill="#4F8CFF"/>
                <rect x="12" y="8" width="10" height="24" rx="3" fill="#7DD3FC"/>
                <rect x="24" y="4" width="10" height="28" rx="3" fill="#4F8CFF"/>
                <rect x="36" y="16" width="10" height="16" rx="3" fill="#7DD3FC"/>
                <rect x="48" y="10" width="10" height="22" rx="3" fill="#4F8CFF"/>
              </svg>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 