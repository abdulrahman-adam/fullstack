import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Format time to 24-hour HH:MM:SS
  const formattedTime = time.toLocaleTimeString('en-GB', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="clock-container" style={{ padding: "10px" }}>
      <p className="clock-time">{formattedTime}</p>
    </div>
  );
}

export default Clock;
