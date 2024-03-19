// sketch.js - purpose and description here
// Author: Atal Kakar
// Date: 2/26/2024

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
let data = [10, 8, 15, 20, 47]; // Sample data (EU4 estate control)
let angles = []; // angles
let interval = 2000; // Time interval in milliseconds

function setup() {
  createCanvas(800, 400);

  //find angles
  calculateAngles();

  // Update data intervals
  setInterval(updateData, interval);
}

function draw() {
  background(220);

  //piechart
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let label = 'Estate ' + (i + 1);
    let color = getColor(i);
    drawPieSlice(width / 4, height / 2, 200, lastAngle, lastAngle + angles[i], color);
    drawLegend(label, color, width / 2, 100 + i * 20);
    lastAngle += angles[i];
  }

  endShape();
}

function drawPieSlice(x, y, diameter, startAngle, endAngle, color) {
  fill(color);
  arc(x, y, diameter, diameter, startAngle, endAngle, PIE);
}

function drawLegend(label, color, x, y) {
  fill(color);
  noStroke();
  ellipse(x - 10, y, 10, 10);
  fill(0);
  textAlign(LEFT, CENTER);
  text(label, x, y);
}

function getColor(index) {
  let colors = ['red', 'green', 'blue', 'orange', 'purple'];
  return colors[index % colors.length];
}

function calculateAngles() {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i];
  }
  angles = [];
  for (let i = 0; i < data.length; i++) {
    angles.push(TWO_PI * data[i] / total);
  }
}

function updateData() {
  for (let i = 0; i < data.length; i++) {
    // Update each data point randomly
    data[i] = Math.floor(Math.random() * 50) + 1; // Random number between 1 and 50
  }
  calculateAngles();
  redraw(); // Redraw 
}
