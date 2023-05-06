import React from 'react'
import { useState } from 'react';
const Team = () => {
  const [showFullText, setShowFullText] = useState(false);

  // The full text of the paragraph
  const fullText = "This is the full text of the paragraph that will be hidden behind the read more button. It can be as long or as short as you like.";

  // The truncated text that will be visible initially
  const truncatedText = showFullText ? fullText : `${fullText.slice(0, 100)}...`;
  return (
    <div>
      <p className="text-gray-700 leading-relaxed">{truncatedText}</p>
      {!showFullText && (
        <button className="text-blue-500 hover:text-blue-700" onClick={() => setShowFullText(true)}>
          Read more
        </button>
      )}
    </div>
  );
}

export default Team
