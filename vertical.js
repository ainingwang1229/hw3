var ballY = 0;
var ballSpeed = 9;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  ellipse(300, ballY, 50);
  ballY = ballY + ballSpeed;
  
  if (ballY > height){
    ballSpeed = -ballSpeed; 
  }
  
  if (ballY == 0){
    ballSpeed = -ballSpeed;
  }
}
