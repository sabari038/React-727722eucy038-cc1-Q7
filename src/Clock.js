import React, { useState, useEffect } from 'react';
import './App.css';

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');

    return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className="digital-clock">
      <h2>Digital Clock</h2>
      <p>{formatTime(currentTime)}</p>
    </div>
  );
};

export default DigitalClock;
