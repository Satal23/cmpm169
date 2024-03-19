let voxels = [];
let angle = 0.01;
let isMousePressed = false;

function setup() {
    createCanvas(1850, 600, WEBGL);

  voxels = [
    // Ears
    { x: 6, y: 1, z: -1, color: color(49, 79, 228) },
    { x: 6, y: 0, z: -1, color: color(49, 79, 228) },
    { x: 6, y: -1, z: -1, color: color(49, 79, 228) },
    { x: 5, y: -1, z: -1, color: color(49, 79, 228) },
    { x: 5, y: 0, z: -1, color: color(0, 0, 0) },
    { x: 5, y: 1, z: -1, color: color(49, 79, 228) },
    { x: 5, y: -1, z: -1, color: color(49, 79, 228) },
    { x: 4, y: -1, z: -1, color: color(49, 79, 228) },
    { x: 4, y: 0, z: -1, color: color(49, 79, 228) },
    { x: 4, y: 1, z: -1, color: color(49, 79, 228) },
    
    { x: -6, y: 1, z: -1, color: color(49, 79, 228) },
    { x: -6, y: 0, z: -1, color: color(49, 79, 228) },
    { x: -6, y: -1, z: -1, color: color(49, 79, 228) },
    { x: -5, y: -1, z: -1, color: color(49, 79, 228) },
    { x: -5, y: 0, z: -1, color: color(0, 0, 0) },
    { x: -5, y: 1, z: -1, color: color(49, 79, 228) },
    { x: -5, y: -1, z: -1, color: color(49, 79, 228) },
    { x: -4, y: -1, z: -1, color: color(49, 79, 228) },
    { x: -4, y: 0, z: -1, color: color(49, 79, 228) },
    { x: -4, y: 1, z: -1, color: color(49, 79, 228) },

    //Head
    { x: -3, y: 1, z: 0, color: color(49, 79, 228) },
    { x: -2, y: 1, z: 0, color: color(49, 79, 228) },
    { x: -1, y: 1, z: 0, color: color(49, 79, 228) },
    { x: 0, y: 1, z: 0, color: color(49, 79, 228) },
    { x: 1, y: 1, z: 0, color: color(49, 79, 228) },
    { x: 2, y: 1, z: 0, color: color(49, 79, 228) },
    { x: 3, y: 1, z: 0, color: color(49, 79, 228) },
    
    { x: -5, y: 2, z: 0, color: color(49, 79, 228) },
    { x: -5, y: 3, z: 0, color: color(49, 79, 228) },
    { x: -5, y: 4, z: 0, color: color(49, 79, 228) },
    { x: -5, y: 5, z: 0, color: color(49, 79, 228) },
    { x: -5, y: 6, z: 0, color: color(49, 79, 228) },
    { x: -4, y: 6, z: 0, color: color(49, 79, 228) },
    { x: -3, y: 6, z: 0, color: color(49, 79, 228) },
    { x: -2, y: 6, z: 0, color: color(49, 79, 228) },
    { x: -2, y: 6, z: 0, color: color(49, 79, 228) },
    { x: -1, y: 6, z: 1, color: color(255, 255, 255) },
    { x: 5, y: 2, z: 0, color: color(49, 79, 228) },
    { x: 5, y: 3, z: 0, color: color(49, 79, 228) },
    { x: 5, y: 4, z: 0, color: color(49, 79, 228) },
    { x: 5, y: 5, z: 0, color: color(49, 79, 228) },
    { x: 5, y: 6, z: 0, color: color(49, 79, 228) },
    { x: 4, y: 6, z: 0, color: color(49, 79, 228) },
    { x: 3, y: 6, z: 0, color: color(49, 79, 228) },
    { x: 2, y: 6, z: 0, color: color(49, 79, 228) },
    { x: 2, y: 6, z: 0, color: color(49, 79, 228) },
    { x: 1, y: 6, z: 1, color: color(255, 255, 255) },
    { x: 0, y: 6, z: 0, color: color(49, 79, 228) },
    
    { x: -4, y: 2, z: 0, color: color(49, 79, 228) },
    { x: -4, y: 3, z: 0, color: color(255,255, 255) },
    { x: -4, y: 4, z: 0, color: color(49, 79, 228) },
    { x: -4, y: 5, z: 0, color: color(49, 79, 228) },
    { x: -4, y: 5, z: 0, color: color(49, 79, 228) },
    
    { x: -3, y: 2, z: 0, color: color(49, 79, 228) },
    { x: -3, y: 3, z: 0, color: color(0, 0, 0) },
    { x: -3, y: 4, z: 0, color: color(49, 79, 228) },
    { x: -3, y: 5, z: 0, color: color(49, 79, 228) },
    { x: -3, y: 5, z: 0, color: color(49, 79, 228) },
    
    
    { x: 4, y: 2, z: 0, color: color(49, 79, 228) },
    { x: 4, y: 3, z: 0, color: color(255,255, 255) },
    { x: 4, y: 4, z: 0, color: color(49, 79, 228) },
    { x: 4, y: 5, z: 0, color: color(49, 79, 228) },
    { x: 4, y: 5, z: 0, color: color(49, 79, 228) },
    
    { x: 3, y: 2, z: 0, color: color(49, 79, 228) },
    { x: 3, y: 3, z: 0, color: color(0, 0, 0) },
    { x: 3, y: 4, z: 0, color: color(49, 79, 228) },
    { x: 3, y: 5, z: 0, color: color(49, 79, 228) },
    { x: 3, y: 5, z: 0, color: color(49, 79, 228) },
    
    { x: 2, y: 2, z: 0, color: color(49, 79, 228) },
    { x: 2, y: 3, z: 0, color: color(49, 79, 228) },
    { x: 2, y: 4, z: 0, color: color(49, 79, 228) },
    { x: 2, y: 5, z: 0, color: color(49, 79, 228) },
    { x: 2, y: 5, z: 0, color: color(49, 79, 228) },
    
    { x: 1, y: 2, z: 0, color: color(49, 79, 228) },
    { x: 1, y: 3, z: 0, color: color(49, 79, 228) },
    { x: 1, y: 4, z: 0, color: color(49, 79, 228) },
    { x: 1, y: 5, z: 1, color: color(255, 255, 255) },
    
    { x: 0, y: 2, z: 0, color: color(49, 79, 228) },
    { x: 0, y: 3, z: 0, color: color(49, 79, 228) },
    { x: 0, y: 4, z: 0, color: color(49, 79, 228) },
    { x: 0, y: 5, z: 1, color: color(255, 155, 155) },
    
    { x: -1, y: 2, z: 0, color: color(49, 79, 228) },
    { x: -1, y: 3, z: 0, color: color(49, 79, 228) },
    { x: -1, y: 4, z: 0, color: color(49, 79, 228) },
    { x: -1, y: 5, z: 1, color: color(255, 255, 255) },

    
    { x: -2, y: 2, z: 0, color: color(49, 79, 228) },
    { x: -2, y: 3, z: 0, color: color(49, 79, 228) },
    { x: -2, y: 4, z: 0, color: color(49, 79, 228) },
    { x: -2, y: 5, z: 0, color: color(49, 79, 228) },
    { x: -2, y: 5, z: 0, color: color(49, 79, 228) },
    
    { x: -4, y: 5, z: 0, color: color(49, 79, 228) },
    { x: -3, y: 5, z: 0, color: color(49, 79, 228) },
    { x: -2, y: 5, z: 0, color: color(49, 79, 228) },
    { x: -2, y: 5, z: 0, color: color(49, 79, 228) },
    
    
    

  ];
}

function draw() {
  background(220);

  // Zoom out the camera
  translate(0, 0, -300);

  rotateX(PI / 4);
  rotateY(angle);
  angle += 0.01;

  if (isMousePressed) {
    // Render each voxel with dynamic color
    for (let i = 0; i < voxels.length; i++) {
      let voxel = voxels[i];
      let hue = map(sin(angle + i * 0.1), -1, 1, 0, 255);
      let colorVal = color(hue, 200, 255);
      fill(colorVal);
      push();
      translate(voxel.x * 40, voxel.y * 40, voxel.z * 40);
      box(40);
      pop();
    }
  } else {
    // Render each voxel with its default color
    for (let i = 0; i < voxels.length; i++) {
      let voxel = voxels[i];
      fill(voxel.color);
      push();
      translate(voxel.x * 40, voxel.y * 40, voxel.z * 40);
      box(40);
      pop();
    }
  }
}

function mousePressed() {
  isMousePressed = true;
}

function mouseReleased() {
  isMousePressed = false;
}
