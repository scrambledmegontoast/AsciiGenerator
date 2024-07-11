
const asciiConverter = (fileData, width) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = fileData;
  
      image.onload = () => {
        console.log("Image loaded successfully"); // Debugging line
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);
  
        const imageData = context.getImageData(0, 0, image.width, image.height).data;
        const asciiData = generateAsciiGrid(imageData, image.width, width);
  
        resolve(asciiData);
      };
  
      image.onerror = (error) => {
        reject(error);
      };
    });
  };
  
  const generateAsciiGrid = (imageData, imageWidth, gridWidth) => {
    const asciiCharacters = '@%#*+=-:. ';
    const brightnessRange = 255 / asciiCharacters.length;
    const aspectRatio = 20; // Adjust this value to control the aspect ratio of the ASCII image
  
    const pixelWidth = Math.ceil(imageWidth / gridWidth);
    const pixelHeight = Math.ceil(pixelWidth * aspectRatio);
  
    let asciiData = '';
  
    for (let y = 0; y < imageData.height; y += pixelHeight) {
      for (let x = 0; x < imageData.width; x += pixelWidth) {
        let totalBrightness = 0;
  
        for (let j = 0; j < pixelHeight; j++) {
          for (let i = 0; i < pixelWidth; i++) {
            const pixelIndex = ((y + j) * imageData.width + (x + i)) * 4;
            const red = imageData[pixelIndex];
            const green = imageData[pixelIndex + 1];
            const blue = imageData[pixelIndex + 2];
            const brightness = (red + green + blue) / 3;
            totalBrightness += brightness;
          }
        }
  
        const averageBrightness = totalBrightness / (pixelWidth * pixelHeight);
        const asciiIndex = Math.floor(averageBrightness / brightnessRange);
        const asciiCharacter = asciiCharacters.charAt(asciiIndex);
  
        asciiData += asciiCharacter;
      }
  
      asciiData += '\n';
    }
  
    return asciiData;
  };
  
  export default asciiConverter;