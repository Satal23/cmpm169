let angle = 0;
let growthSpeed = 0.05;
let numCubes = 20;
let cubes = [];

function setup() {
    createCanvas(1850, 600, WEBGL);

    //create cubes
    for (let i = 0; i < numCubes; i++) {
        cubes.push(new Cube(i * 40 - (numCubes / 2) * 20, 0, 0));
    }
}

function draw() {
    background(0);

    // Change Camera pos based on Mouse Pos
    let camX = map(mouseX, 0, width, -200, 200);
    let camY = map(mouseY, 0, height, -200, 200);
    camera(camX, camY, 500, 0, 0, 0, 0, 1, 0);

    angle += growthSpeed;

    for (let cube of cubes) {
    cube.update();
    cube.display();
  }
}

class Cube {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.height = 20;
        this.maxHeight = random(100, 300); // A bit of randomness to emulate audio
    }

    update() {
    //increase size of cube
        this.height = sin(angle + this.x * 0.1) * this.maxHeight;
    }

    display() {
        push();
        translate(this.x, this.y, this.z);
        fill(255, 0, 0);
        box(20, this.height, 20);
        pop();
    }
}