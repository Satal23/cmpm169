// sketch.js - purpose and description here
// Author: Atal Kakar
// Date: 2/20/2024

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
let img;

function preload() {
  // Load an image
  img = loadImage('https://as1.ftcdn.net/v2/jpg/02/95/94/94/1000_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0); // Display the original image
  loadPixels();

  // each pixel in the image
  for (let y = 0; y < img.height; y += 8) {
    for (let x = 0; x < img.width; x += 6) {
      let index = (x + y * img.width) * 4;
      let r = pixels[index];
      let g = pixels[index + 1];
      let b = pixels[index + 2];

      // Convert RGB values to brightness
      let brightness = (r + g + b) / 3;

      // brightness to ASCII characters
      let ascii = map(brightness, 0, 255, 0, 9);
      let asciiChar = '';

      // character based on brightness
      switch (ascii) {
        case 0:
          asciiChar = ' ';
          break;
        case 1:
          asciiChar = '.';
          break;
        case 2:
          asciiChar = ':';
          break;
        default:
          asciiChar = '#';
          break;
      }

      fill(r, g, b);
      text(asciiChar, x, y);
    }
  }
}
