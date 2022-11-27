/*First version of my Self Portrait Project*/

function setup() {
    createCanvas(940, 560);
}

function draw() {
    background(220);
    
    //EARS
    stroke(0, 0, 0);
    fill(0, 0, 0);
    ellipse(370, 120, 150, 240);
    ellipse(570, 120, 150, 240);
    
    //HEAD
    stroke(159, 26, 31);
    fill(159, 26, 31);
    ellipse(470, 280, 330);
    
    //TEARS
    
    //EYE
    fill(250, 250, 250);
    ellipse(588, 240, 80);
    ellipse(352, 240, 80);
    
    //MOUTH
    fill(0, 0, 0);
    arc(470, 310, 300, 260, 0, PI);
    fill(250, 250, 250);
    stroke(0, 0, 0);
    rect(355, 310, 230, 50, 0, 0, 90,90);
    
    
}