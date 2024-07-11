import React, { useState } from 'react';

function UploadImage({ onImageUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="UploadImage">
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Convert to ASCII</button>
    </div>
  );
}

export default UploadImage;
