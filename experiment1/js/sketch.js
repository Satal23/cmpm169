// sketch.js - purpose and description here
// Author: Atal Kakar (some code borrowed from http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_0_01) 
// Date: 1/22/2023

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
    // create an instance of the class
    myInstance = new MyClass(VALUE1, VALUE2);

    var centerHorz = windowWidth / 2;
    var centerVert = windowHeight / 2;
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(mouseY/2, 150, mouseX/2);
    translate(width / 2, height / 2);


    fill(mouseX/2, 100, mouseY/2);
    var circleResolution = int(map(mouseY/2, 0, height, 2, 80));
    //var radius = (mouseX)/2 - 100- width / 2;

    //Centered the shape
    var radius = (mouseX)/2 - 100- width/2;

    //if condition so that after a mouseX position of less than 1000
    //the radius decreases linearly
    //presents a sphere shape
    if(mouseX < 1000) {
        radius = ((mouseX/2) + (1000 - mouseX) - 100) - width/2;
        //radius = 500;
    }
    var angle = TAU / circleResolution;

    strokeWeight(mouseY / 35);

    for (var i = 0; i <= circleResolution*2; i++) {
    var x = cos(angle * i) * radius;
    var y = sin(angle * i) * radius;

    //Changed some values so that that changes in radius are continuous across the background.
    //also creates the illusion that the top of the cone is following the mouse.
    line((mouseX) - 913, mouseY/1 - +300, x, y, 0);
    fill(234, 31, 81);
    }
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}