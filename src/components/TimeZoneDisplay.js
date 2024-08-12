// src/components/TimeZoneDisplay.js
import React from 'react';
import moment from 'moment-timezone';

const TimeZoneDisplay = ({ timeZone, currentTime, onDelete }) => {
  const localTime = moment.tz(currentTime, timeZone).format('HH:mm');

  return (
    <div className="timezone-display">
      <span>{timeZone}: {localTime}</span>
      <button onClick={onDelete}>✖</button>
    </div>
  );
};

export default TimeZoneDisplay;
