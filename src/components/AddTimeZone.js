// src/components/AddTimeZone.js
import React, { useState } from 'react';

const AddTimeZone = ({ onAdd }) => {
  const [selectedZone, setSelectedZone] = useState('');

  const timeZones = [
    'UTC',
    'Asia/Kolkata',
    'America/New_York',
    'America/Los_Angeles',
    'Europe/London',
    // Add more time zones as needed
  ];

  const handleAdd = () => {
    if (selectedZone && !timeZones.includes(selectedZone)) {
      onAdd(selectedZone);
      setSelectedZone(''); // Clear the selection after adding
    }
  };

  return (
    <div className="add-timezone">
      <select
        value={selectedZone}
        onChange={(e) => setSelectedZone(e.target.value)}
      >
        <option value="" disabled>
          Select Time Zone
        </option>
        {timeZones.map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
      <button onClick={handleAdd} disabled={!selectedZone}>
        Add Time Zone
      </button>
    </div>
  );
};

export default AddTimeZone;
