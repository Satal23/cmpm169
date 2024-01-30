let rows = 100;
let cols = 50;
let cubeSize = 6;
let cubes = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  setupCubes();
}

function setupCubes() {
  //grid for cubes
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      cubes.push(new Cube(i * cubeSize * 2, j * cubeSize * 2));
    }
  }
}

function draw() {
  background(220);

  for (let cube of cubes) {
    cube.move();
    cube.display();
  }
}

class Cube {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.zOffset = random(1000);
  }

  move() {
    //perlin noise to move cubes up and down
    let noiseVal = noise(this.x * 0.01, this.y * 0.01, frameCount * 0.01);
    this.z = map(noiseVal, 0, 1, -100, 100);

    //find mouse proximity and change the height of the cubes depending on the mouse position
    let mouseDist = dist(this.x, this.y, mouseX - width / 2, mouseY - height / 2);
    let zChange = map(-mouseDist, 0, sqrt(sq(width) + sq(height)), 0, 100);
    this.z += zChange;
  }

  display() {

    push();
    translate(this.x - width / 2, this.y - height / 2, this.z);
    //change color depending on mouse position
    fill(mouseX, mouseY, (mouseX-mouseY)*2);
    box(cubeSize);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setupCubes();
}
s