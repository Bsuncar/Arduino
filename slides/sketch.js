var slide = 0;

var frogger;

function preload() {
    frogger = loadImage("frogger.jpeg");
}

function setup() {
    createCanvas(windowWidth, 500);
    textFont('monospace');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}

function draw() {
    background(33);
    
    if (slide == 0) {
        fill(250);
        textSize(100);
        text("Final Project Idea", width/2, height/2);
        textSize(30);
        text("Lizzette Graham and Bryan Suncar", width/2, 350);
    } else if (slide == 1) {
        textSize(30);
        text("The potentiometer will be used to", width/2, 100);
        text("maneuver the character left and right", width/2, 130);
        text("and the button will be used to make the character go forward.", width/2, 160);
    } else if (slide == 2) {
        text("theme: Frogger", 200, 20);
        text("We want to create an interactive game where the user can use 2 ", width/2, 80);
        text("different sensors. We want to recreate Frogger, where the user ", width/2, 110);
        text("will have to interact with these sensors to get passed the moving", width/2, 140);
        text("objects and cross the stage", width/2, 170);
        image(frogger, width/2, 200, 222, 227);
    }
}

function mousePressed() {
    if (mouseX > width/2) {
        if (slide <3) {
            slide++;
        }
    }   else {
        if (slide > 0) {
            slide--;
        }
    }
    
}