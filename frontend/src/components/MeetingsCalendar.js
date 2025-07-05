import React, { useState } from 'react';
import './MeetingsCalendar.css';

const meetings = [
  { id: 1, time: 'Mon 10:00', desc: 'Demo with Jamie', type: 'Sales Demo', client: 'TechCorp', platform: 'Zoom' },
  { id: 2, time: 'Wed 14:00', desc: 'Team Sync', type: 'Internal', client: 'Team', platform: 'Slack' },
  { id: 3, time: 'Fri 09:30', desc: 'Client Call', type: 'Follow-up', client: 'StartupX', platform: 'Teams' },
  { id: 4, time: 'Mon 15:00', desc: 'Product Review', type: 'Review', client: 'BigClient', platform: 'Google Meet' },
  { id: 5, time: 'Thu 11:00', desc: 'Strategy Session', type: 'Planning', client: 'Internal', platform: 'In-person' }
];

export default function MeetingsCalendar() {
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const handleMeetingClick = (meeting) => {
    setSelectedMeeting(meeting);
  };

  const closeModal = () => {
    setSelectedMeeting(null);
  };

  return (
    <div className="dashboard-card meetings-calendar">
      <h2>Meetings Calendar</h2>
      <ul className="meeting-list">
        {meetings.map((meeting) => (
          <li key={meeting.id} onClick={() => handleMeetingClick(meeting)} className="meeting-item">
            <span className="meeting-time">{meeting.time}</span>
            <span className="meeting-desc">{meeting.desc}</span>
          </li>
        ))}
      </ul>
      
      {selectedMeeting && (
        <div className="meeting-modal-overlay" onClick={closeModal}>
          <div className="meeting-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedMeeting.desc}</h3>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            <div className="modal-content">
              <p><strong>Type:</strong> {selectedMeeting.type}</p>
              <p><strong>Client:</strong> {selectedMeeting.client}</p>
              <p><strong>Time:</strong> {selectedMeeting.time}</p>
              <p><strong>Platform:</strong> {selectedMeeting.platform}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 