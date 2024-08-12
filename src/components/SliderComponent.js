// src/components/SliderComponent.js
import React from 'react';

const SliderComponent = ({ currentTime, onTimeChange }) => {
  const handleChange = (e) => {
    const newTime = currentTime.clone().startOf('day').add(e.target.value, 'minutes');
    onTimeChange(newTime);
  };

  return (
    <div className="slider-component">
      <input
        type="range"
        min="0"
        max="1439"
        value={currentTime.diff(currentTime.clone().startOf('day'), 'minutes')}
        onChange={handleChange}
      />
      <div className="time-display">
        {currentTime.format('HH:mm')}
      </div>
    </div>
  );
};

export default SliderComponent;
