function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;//start point with grass
var h = 10;//grass height

var flowerX;
var flowerY;

var preDeterminedHeight = 100;

function draw() {
  //draw grass
  stroke(random(60, 70), 100, 90); //grass color
  line(x, height-10, x+random(-10,10), height-10-random(h)); //grass xy
  noStroke();
  
  //flower xy
  flowerX = x;
  flowerY = height-10-random(h);
  
  line(x, height-10, flowerX, flowerY);
  
  //if grass height over 50 show flower
  if(h > 50){
  fill(200, 110, 120, 220);
  ellipse(flowerX, flowerY, 10);
  }
  
  x = x + 10;//distance each of grass  

  //grass grow up route
  if (x > width) {   
    x = random(10);
    h = h + 3;
  }

  //show lawnmower if h == 100
  if (h == preDeterminedHeight) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }

  //land color and shape
  fill(40, 100, 60);
  rect(0, height-10, width, 10);

}
