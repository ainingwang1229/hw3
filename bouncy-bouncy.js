var ballX = 0;
var ballX1 = 600;

var ballY = 0;
var ballY1 = 400;

var SpeedX = 9;
var SpeedX1 = 9;
var SpeedY = 9;
var SpeedY1 = 9;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200, 110, 120, 220);
  ellipse(ballX, 100, 50);
  ellipse(ballX1, 300, 50);
  ellipse(200, ballY, 50);
  ellipse(400, ballY1, 50);
  noFill();
  strokeWeight(4);

  ballX = ballX + SpeedX;
  ballX1 = ballX1 - SpeedX1;

  ballY = ballY + SpeedY;
  ballY1 = ballY1 - SpeedY1;


  if (ballX > width) {
    SpeedX = -SpeedX;
  }

  if (ballX < 0) {
    SpeedX = -SpeedX;
  }

  if (ballX1 > width) {
    SpeedX1 = -SpeedX1;
  }

  if (ballX1 < 0) {
    SpeedX1 = -SpeedX1;
  }


  if (ballY > height) {
    SpeedY = -SpeedY;
  }

  if (ballY < 0) {
    SpeedY = -SpeedY;
  }

  if (ballY1 > height) {
    SpeedY1 = -SpeedY1;
  }

  if (ballY1 < 0) {
    SpeedY1 = -SpeedY1;
  }

}
