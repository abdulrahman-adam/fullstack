import React, { useEffect, useState } from 'react';
import './Educations.css';
import ReadMoreText from '../readMoreText/ReadMoreText';

const messages = [
  "We will be here soon!",
  "Coming soon — stay tuned!",
  "Launching shortly!",
  "Something exciting is on the way!",
  "Hang tight, we're almost ready!"
];
const Educations = () => {
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
    }, 2000); // 5000 milliseconds = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="random-message-container">
        <p className="random-message-text">{message}</p>
      </div>

      <div><ReadMoreText/></div>
    </div>
  );
}

export default Educations;