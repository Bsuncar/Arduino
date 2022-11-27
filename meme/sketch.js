/*First Version of my Meme Project.*/


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
    
    image(img, 0, 0, 500, 600);
    image(img2, 500, 0, 500, 300);
    image(img3, 500, 300, 500, 300);
    
    var str1 = "My reaction when Ronald McDonald won the election";
    var str2 = "Really man?";
    
    textSize(30);
    fill(53, 12, 232);
    stroke('black');
    textFont("Impact");
    text(str1, 200, 40);
    
    fill('white');
    text(str2, 800, 500);
    
    
    
}