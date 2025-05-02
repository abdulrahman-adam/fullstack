import React, { useEffect, useState } from 'react';
import './Random.css';

const messages = [
  "! سوف نكون هنا قريبا",
  "! قريبًا - ترقبوا",
  "! هناك شيء مثير في الطريق",
  "! تمسك جيدًا، نحن جاهزون تقريبًا"
];
const Random = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Function to select a random message
    const getRandomMessage = () => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      return messages[randomIndex];
    };

    // Set an initial random message
    setMessage(getRandomMessage());

    // Update the message every 5 seconds
    const intervalId = setInterval(() => {
      setMessage(getRandomMessage());
    }, 1000); // 5000 milliseconds = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="random-message-container" alt="rtl">
      <p className="random-message-text" alt="rtl">{message}</p>

    </div>
  );


}

export default Random;