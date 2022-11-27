/*Second Version of my Meme Project. Conditional Logic.*/


function setup() {
    createCanvas(1000, 600);
}

function preload() {
    img = loadImage("donaldtrump.jpg");
    img2 = loadImage("reaction.png");
    img3 = loadImage("reaction2.jpg");
}

function draw() {
    background(220);
    
    image(img, 0, 0, width, height);
    if (mouseX > width / 2) {
    image(img2, 500, 0, 500, 600);
    }
    else {
    image(img3, 0, 0, 500, 600);
    }
    
    var str1 = "My reaction when Ronald McDonald won the election";
    
    textSize(30);
    fill(250);
    stroke('black');
    textFont("Impact");
    text(str1, 200, 40);
    
}