/*Self Portrait Project Version 2. In this second version, I am adding Variables to my code.*/

function setup() {
    createCanvas(940, 560);
}

function draw() {
    background(220);
    
    var colorBack = 250;
    var colorWhite = 0;
    var earsX = 370;
    var earsX2 = 570;
    var earsY = 120;
    var earsSize = 150;
    var earsSize2 = 240;
    
    
    //EARS
    stroke(colorBack);
    fill(colorWhite);
    ellipse(earsX, earsY, earsSize, earsSize2);
    ellipse(earsX2, earsY, earsSize, earsSize2);
    
    var strokeR = 159;
    var strokeG = 26;
    var strokeB = 31;
    var fillR = 159;
    var fillG = 26;
    var fillB = 31;
    var headX = 470;
    var headY = 280;
    var headSize = 330;
    
    //HEAD
    stroke(strokeR, strokeG, strokeB);
    fill(fillR, fillG, fillB);
    ellipse(headX, headY, headSize);
    
    //TEARS
   
    
    var eyeXright = 588;
    var eyeYright = 240;
    var eyeSize = 80;
    var eyeXleft = 352;
    var eyeYleft = 240;
    
    //EYE
    fill(colorBack);
    ellipse(eyeXright, eyeYright, eyeSize);
    ellipse(eyeXleft, eyeYleft, eyeSize);
    
    var mouthX = 470;
    var mouthY = 310;
    var mouthSize = 300;
    var mouthSize2 = 260;
    var mouthSize3 = 0;
    var teethX = 355;
    var teethY = 310;
    var teethS1 = 230;
    var teethS2 = 50;
    var teethS3n4 = 0;
    var teethS5n6 = 90;
    
    //MOUTH
    fill(colorWhite);
    arc(mouthX, mouthY, mouthSize, mouthSize2, mouthSize3, PI);
    fill(colorBack, colorBack, colorBack);
    stroke(colorWhite, colorWhite, colorWhite);
    rect(teethX, teethY, teethS1, teethS2, teethS3n4, teethS3n4, teethS5n6,teethS5n6);
    
    
}