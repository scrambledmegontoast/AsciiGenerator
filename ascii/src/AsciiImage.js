// AsciiImage.js
import React from 'react';

function AsciiImage({ asciiData }) {
    console.log('ASCII Data:', asciiData);
  return (
    <div className="AsciiImage">
      <h2>ASCII Image</h2>
      <pre>{asciiData}</pre>
    </div>
  );
}

export default AsciiImage;