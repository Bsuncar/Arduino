/*
arduino + p5 example
*/
//


var serial;
var portName = "COM10"
var sensorValue;
var road;
var frog;
var car1;
var car2;
var car4;
var log;
var song;
var car1X = 100;
var speed = 5;
var speed2 = 2;
var speed3 = 1.5;
var y = 100;
var z = 525;
var a = 200;
var b = 450;
var pressed = false;

var frogX = 400;
var frogY = 525;
var originX = 400;
var originY = 525;
var hasWon = false;


function preload() {
    road = loadImage("road2.jpg");
    frog = loadImage("frog.png");
    car1 = loadImage("car1.png");
    car2 = loadImage("car2.png");
    car4 = loadImage("car4.png");
    log = loadImage("log.png");




    song = loadSound("ff7.mp3");

}

function setup() {
    createCanvas(794, 614);
    


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

function portOpen() {
    console.log("port open");
}

function portClose() {
    console.log("port closed");

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



function draw() {
    background(250);

    var isDrawing = true;

      frogX = map(sensorValue, 0, 1023, 0, width);
   

    image(road, 0, 0, width, height);
    image(frog, frogX, frogY, 110, 76);

   

    if (keyIsPressed && pressed == false) {
        pressed = true;
        if (keyCode == 38) {

            frogY -= 40;
        } else if (keyCode == 40) {
            frogY += 50;
        }
    }
    if (!keyIsPressed && pressed == true) {
        pressed = false;
    }


    car(car1, car1X, 433, 150);
    car1X += speed;
    if (car1X > width) {
        car1X = 0;
    }

    car(car2, y, 330, 150);
    y -= speed;
    if (y < 0) {
        y = 795;
    }
    car(car4, z, 330, 150);
    z -= speed;
    if (z < 0) {
        z = 795;
    }

    log1(log, a, 100, 400, 100);
    a -= speed3;
    if (a < -200) {
        a = 700;
    }


    log1(log, b, 170, 275, 100);
    b += speed2;
    if (b > width)
        b = 0;
    
    if (frogY < 50 && hasWon == false) {
        hasWon = true;
        console.log("winner");
        song.play();

    }
  
   if (frogY < 0) {
        frogY = 525;
        song.stop();
    }
    
}

function car(img, x, y, s) {
    image(img, x, y, s);


    // detect collision with frog

    noFill();
    noStroke();
    
    var frogX1 = frogX + 30;
    var frogY2 = frogY + 10;


    rect(x, y, img.width , img.height );
   

    if (frogX > x &&
        frogX < x + s / 2 &&
        frogY > y &&
        frogY < y + s / 2) {
        // reset frog
        frogX = 400;
        frogY = 525;
    }

    var _frogX = frogX + 80;
    var _frogY = frogY + 50;

    ellipse(_frogX, _frogY, 5);


    if (_frogX > x &&
        _frogX < x + s / 2 &&
        _frogY > y &&
        _frogY < y + s / 2) {
        // reset frog
        frogX = 400;
        frogY = 525;
    }
    
 
    
}

function log1(img, x, y, s, s2) {
    image(img, x, y, s, s2);


    // detect collision with frog

    noFill();
    noStroke(0);
    
    var frogX1 = frogX + 30;
    var frogY2 = frogY + 10;

    ellipse(frogX1, frogY2, 5);


    if (frogX > x &&
        frogX < x + s / 2 &&
        frogY > y &&
        frogY < y + s / 2) {
        // reset frog
        frogX = 400;
        frogY = 525;
    }

    var _frogX = frogX + 80;
    var _frogY = frogY + 50;

    ellipse(_frogX, _frogY, 5);


    if (_frogX > x &&
        _frogX < x + s / 2 &&
        _frogY > y &&
        _frogY < y + s / 2) {
        // reset frog
        frogX = 400;
        frogY = 525;
    }
    
  
}

