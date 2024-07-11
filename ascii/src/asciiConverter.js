// asciiConverter.js
const asciiConverter = (fileData) => {
    const image = new Image();
    image.src = fileData;
  
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
  
    const imageData = context.getImageData(0, 0, image.width, image.height).data;
    let asciiData = '';
  
    for (let i = 0; i < imageData.length; i += 4) {
      const red = imageData[i];
      const green = imageData[i + 1];
      const blue = imageData[i + 2];
  
      const brightness = (red + green + blue) / 3;
      const asciiCharacter = getAsciiCharacter(brightness);
  
      asciiData += asciiCharacter;
    }
  
    return asciiData;
  }
  
  const getAsciiCharacter = (brightness) => {
    const asciiCharacters = '@%#*+=-:. ';
    const brightnessRange = 255 / asciiCharacters.length;
    const asciiIndex = Math.floor(brightness / brightnessRange);
  
    return asciiCharacters.charAt(asciiIndex);
  }
  
  export default asciiConverter;