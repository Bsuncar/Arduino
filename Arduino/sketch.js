/*
Arduino + p5 example
*/

var serial;
var portName = "/dev/cu.usbmodem1411";
var sensorValue;

function setup() {
    createCanvas(640, 360);
    
    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);
    
    serial.open(portName);
}

function serverConnected() {
    console.log("connected");
}
function portClose() {
    console.log("port close");
}

function portOpen() {
    console.log("port open");
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
}

function preload() {
    img = loadImage("palm.png");
}

var img;

function draw() {
   var c = map(sensorValue, 0, 1023, 0, 255);
    
    // sky
    background(c, c, c + 55);
    
    var y = map(sensorValue, 0, 1023, height, 0);
    var u = map(sensorValue, 0, 1023, height, 0);
    
    // sun
    noStroke();
    fill('gold');
    ellipse(u, y, 150);
    
    // sand
    noStroke();
    fill(237, 201, 175);
    ellipse(500, 450, 500)
    
    // palm tree 
   image(img, 400, 130, 100, 100);
    
    // water
    fill(105, 144, 250);
    ellipse(200, 400, 200);
    ellipse(50, 380, 200);
    fill(100, 70, 250);
    ellipse(150, 380, 170);
    
    
    
}