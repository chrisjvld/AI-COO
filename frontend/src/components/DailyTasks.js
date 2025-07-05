import React, { useState } from 'react';
import './DailyTasks.css';

const initialTasks = [
  { id: 1, text: 'Review new leads', done: false },
  { id: 2, text: 'Check follow-ups', done: false },
  { id: 3, text: 'Send daily summary', done: false },
  { id: 4, text: 'Update notes', done: false },
  { id: 5, text: 'Plan tomorrow', done: false }
];

export default function DailyTasks() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleToggle = (id) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const completed = tasks.filter(t => t.done).length;
  const percent = Math.round((completed / tasks.length) * 100);

  return (
    <div className="dashboard-card daily-tasks">
      <h2>Daily Task List</h2>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.done ? 'checked' : ''}>
            <label>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleToggle(task.id)}
              />
              <span className="task-text">{task.text}</span>
            </label>
          </li>
        ))}
      </ul>
      <div className="progress-bar-outer">
        <div
          className={`progress-bar-inner ${percent === 100 ? 'complete' : ''}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="progress-label">{percent}% Complete</div>
    </div>
  );
} 