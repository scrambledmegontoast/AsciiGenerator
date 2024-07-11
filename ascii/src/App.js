import React, { useState } from 'react';
import UploadImage from './UploadImage';
import AsciiImage from './AsciiImage';
import asciiConverter from './asciiConverter';

function App() {
  const [asciiData, setAsciiData] = useState('');

  const handleImageUpload = (fileData) => {
    const ascii = asciiConverter(fileData);
    setAsciiData(ascii);
  };

  return (
    <div className="App">
      <h1>ASCII Image Converter</h1>
      <UploadImage onImageUpload={handleImageUpload} />
      <AsciiImage asciiData={asciiData} />
    </div>
  );
}

export default App;
