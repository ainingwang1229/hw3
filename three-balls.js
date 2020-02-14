var ballY = 0;
var ballY1 = 0;
var ballY2 = 0;
var ballSpeed = 9;



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  ellipse(100, ballY, 30);
  ellipse(300, ballY1, 50);
  ellipse(500, ballY2, 70);
  
  ballY = ballY + ballSpeed;
  ballY1 = ballY1 + ballSpeed;
  ballY2 = ballY2 + ballSpeed;


  if (ballY > height){
    ballSpeed = -ballSpeed; 
  }
  
  if (ballY == 0){
    ballSpeed = -ballSpeed;
  }
  
  

  if (ballY1 > height){
    ballSpeed = -ballSpeed; 
  }
  
  if (ballY1 == 0){
    ballSpeed = -ballSpeed;
  }
  
  

  if (ballY2 > height){
    ballSpeed = -ballSpeed; 
  }
  
  if (ballY2 == 0){
    ballSpeed = -ballSpeed;
  }
}
