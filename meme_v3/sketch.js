/*Third Version of my Meme Project. Conditional Logic.*/


function setup() {
    createCanvas(1000, 600);
}

function preload() {
    img = loadImage("donaldvshillary.jpg");
    img2 = loadImage("trap.jpg");
    img3 = loadImage("card.jpg");
    img4 = loadImage("finalform.jpg");
    img5 = loadImage("fight.jpg");
    img6 = loadImage("head.png");
    img7 = loadImage("head2.png");
    img8 = loadImage("head3.png");
}

    //Variable for Animation
    var speed = 5;
    var speed2 = 8
    var x = 100;
    var y = 100;

function draw() {
    background(220);
    
    var sizeT = 30 // Text Size
    var fillT = 250 // Text Color
    var xy = 0 // X and Y position for image
    var positionTx = 200 // X position for text
    var positionTy = 40 // Y position for text
    
    var str1 = "Are you ready Burger King to lose in 2020?";
    

    
    if (mouseX > 1) {
        image(img, xy, xy, width, height);
        textSize(sizeT);
        fill(fillT);
        stroke('black');
        textFont("Impact");
        text(str1, positionTx, positionTy);
        
    } 
    
    
    

    
    var imgW2 = 600 // Width for img2
    var imgH2 = 450 // Height for img2
    
    if (mouseX > 500) {
        image(img2, xy, xy, imgW2, imgH2);
    }
    
    var y3 = 250 // Y axis for img3
    var imgW3 = 500 // Width for img3
    
    if ( mouseY > height / 2 ) {
        background(fillT); // I use fillT variable because is the same color that I want.
        image(img3, y3, xy, imgW3, height);
    }
    
    var str2 = "Are you ready for my final form Hillary?";
    
    if ( mouseY > height / 2 && mouseX > 500) {
        image(img4, xy, xy, width, height);
        textSize(sizeT);
        fill(fillT);
        stroke('black');
        textFont("Impact");
        text(str2, positionTx, positionTy);
    }
    

    
    image(img6, x, 300, 150, 206);
    x += speed;
    	if (x > width) {
		x = 0;
	}
    
    image(img7, 100, y, 90, 128.75);
    y += speed2;
        if (y > height) {
            y = 0;
        }
    
    var r = frameCount / 500 * PI;
    shearX(r);

    image(img5, 500, 150);
    
  
  
    

}