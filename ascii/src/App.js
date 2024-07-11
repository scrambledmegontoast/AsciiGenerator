// App.js
import React, { useState } from 'react';
import UploadImage from './UploadImage';
import AsciiImage from './AsciiImage';
import asciiConverter from './asciiConverter';

function App() {
  const [asciiData, setAsciiData] = useState('');

  const handleImageUpload = (fileData) => {
    const gridWidth = 80; // Adjust this value to control the width of the ASCII grid

    asciiConverter(fileData, gridWidth)
      .then((ascii) => {
        setAsciiData(ascii);
      })
      .catch((error) => {
        console.error('Error converting image to ASCII:', error);
      });
  };

  const handleClear = () => {
    setAsciiData('');
  };

  return (
    <div className="App">
      <h1>ASCII Image Converter</h1>
      <UploadImage onImageUpload={handleImageUpload} />
      
      {asciiData && (
        <div>
          <button onClick={handleClear}>Clear</button>
          <AsciiImage asciiData={asciiData} />
        </div>
      )}
    </div>
  );
}

export default App;