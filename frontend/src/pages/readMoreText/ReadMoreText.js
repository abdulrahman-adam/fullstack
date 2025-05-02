import React, { useState } from 'react';
import './ReadMoreText.css';

const ReadMoreText = () => {
  const [expanded, setExpanded] = useState(false);

  const fullText = `Innovation is the key to shaping a smarter and more connected future.
Emerging technologies like AI, blockchain, and quantum computing are just the beginning.
The next decade will redefine how we live, work, and interact globally.
I'm particularly inspired by sustainable tech and ethical innovation.
What future innovations are you most excited to see come to life?`;

  const shortText = fullText.split('\n').slice(0, 2).join('\n');

  return (
    <div className="readmore-container">
      <p className="readmore-text">
        {expanded ? fullText : shortText}
        <button className="toggle-button" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Read less' : 'Read more'}
        </button>
      </p>
    </div>
  );
};

export default ReadMoreText;
