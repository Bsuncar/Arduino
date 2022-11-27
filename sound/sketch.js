/*
    Sound Exmaple
    11.20.2018
*/

var chickens;
var coin;
var music;

var x = 100;
var y = 100;
var s = 100;
var r = 0;
var g = 100;
var b = 50;

function preload() {
    chickens = loadSound("lobo.mp3");
    coin = loadSound("lobo.mp3");
    music = loadSound("lobo.mp3");
}

function setup () {
    createCanvas(640, 360);
}

function draw () {
    background(0);
    fill(r, g, b);
    ellipse(x, y, s);
}

function mousePressed() {
    if(chickens.isPlaying()) {
        chickens.pause();
    }   else{
        chickens.play();
    }
    
    var d = dist(x, y, mouseX, mouseY);
    if (d < s/2) {
        r = random(255);
        g = random(255);
        b = random(255);
        coin.play();
    }
}