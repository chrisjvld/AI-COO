import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import './WeeklyTrends.css';

const weeklyData = [
  { day: 'Mon', thisWeek: 4, lastWeek: 3 },
  { day: 'Tue', thisWeek: 6, lastWeek: 5 },
  { day: 'Wed', thisWeek: 5, lastWeek: 4 },
  { day: 'Thu', thisWeek: 4, lastWeek: 3 },
  { day: 'Fri', thisWeek: 3, lastWeek: 2 },
  { day: 'Sat', thisWeek: 2, lastWeek: 2 },
  { day: 'Sun', thisWeek: 1, lastWeek: 1 }
];

export default function WeeklyTrends({ thisWeek = 23, lastWeek = 18 }) {
  const percentDiff = lastWeek === 0 ? 100 : Math.round(((thisWeek - lastWeek) / lastWeek) * 100);
  const [isExpanded, setIsExpanded] = useState(false);

  // Compact chart config
  const compactChart = (
    <div
      className="trend-chart-container compact"
      onClick={() => setIsExpanded(true)}
      title="Click to expand"
      style={{
        cursor: 'pointer',
        width: '95%',
        maxWidth: 420,
        minWidth: 260,
        height: 140,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ResponsiveContainer width="100%" height={100}>
        <LineChart
          data={weeklyData}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <CartesianGrid stroke="#23242b" strokeDasharray="4 4" />
          <XAxis
            dataKey="day"
            tick={{ fill: '#B0B3B8', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            dy={6}
            interval={0}
            padding={{ left: 8, right: 8 }}
          />
          <YAxis hide domain={[0, 'dataMax+1']} />
          <Tooltip
            contentStyle={{ background: '#23242b', border: '1px solid #4F8CFF', color: '#7DD3FC', fontSize: 12 }}
            labelStyle={{ color: '#7DD3FC' }}
            itemStyle={{ color: '#7DD3FC' }}
          />
          <Line
            type="monotone"
            dataKey="thisWeek"
            stroke="#4F8CFF"
            strokeWidth={3}
            dot={{ r: 5, fill: '#4F8CFF', stroke: '#181A20', strokeWidth: 2 }}
            activeDot={{ r: 7, fill: '#7DD3FC', stroke: '#4F8CFF', strokeWidth: 3 }}
            name="This Week"
          />
        </LineChart>
      </ResponsiveContainer>
      <span
        className="trend-diff up"
        style={{ fontSize: 17, marginTop: 8, display: 'inline-block', fontWeight: 600 }}
      >
        +{percentDiff}% vs. last week
      </span>
    </div>
  );

  // Expanded modal chart config
  const expandedChart = (
    <div className="fullscreen-overlay" onClick={() => setIsExpanded(false)}>
      <div className="fullscreen-chart" onClick={e => e.stopPropagation()} style={{ maxWidth: 800, width: '95%' }}>
        <div className="fullscreen-header">
          <h3>Weekly Trends - Detailed View</h3>
          <button className="close-btn" onClick={() => setIsExpanded(false)}>×</button>
        </div>
        <div className="fullscreen-content">
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={weeklyData} margin={{ top: 30, right: 30, left: 10, bottom: 30 }}>
              <CartesianGrid stroke="#23242b" strokeDasharray="4 4" />
              <XAxis dataKey="day" tick={{ fill: '#B0B3B8', fontSize: 15 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#B0B3B8', fontSize: 15 }} axisLine={false} tickLine={false} domain={[0, 'dataMax+1']} />
              <Tooltip contentStyle={{ background: '#23242b', border: '1px solid #4F8CFF', color: '#7DD3FC' }} labelStyle={{ color: '#7DD3FC' }} itemStyle={{ color: '#7DD3FC' }} />
              <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ color: '#4F8CFF' }} />
              <Line type="monotone" dataKey="thisWeek" stroke="#4F8CFF" strokeWidth={4} dot={{ r: 8, fill: '#4F8CFF', stroke: '#181A20', strokeWidth: 3, filter: 'drop-shadow(0 0 8px #4F8CFF)' }} activeDot={{ r: 10, fill: '#7DD3FC', stroke: '#4F8CFF', strokeWidth: 4 }} name="This Week" />
              <Line type="monotone" dataKey="lastWeek" stroke="#7DD3FC" strokeWidth={2} dot={{ r: 6, fill: '#7DD3FC', stroke: '#181A20', strokeWidth: 2 }} name="Last Week" />
            </LineChart>
          </ResponsiveContainer>
          <div className="trend-summary">
            <p><strong>This Week Total:</strong> {thisWeek} leads</p>
            <p><strong>Last Week Total:</strong> {lastWeek} leads</p>
            <p className={`trend-change ${percentDiff >= 0 ? 'positive' : 'negative'}`}><strong>Change:</strong> {percentDiff >= 0 ? '+' : ''}{percentDiff}%</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashboard-card weekly-trends">
      <h2>Weekly Trends</h2>
      {compactChart}
      {isExpanded && expandedChart}
    </div>
  );
} 