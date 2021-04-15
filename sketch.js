var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, 200);
  bullet = createSprite(50, 200, 50, 50);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  
  var deformation = detectCollision(bullet, weight, speed, wall, thickness);
  if (deformation > 10) {
    wall.shapeColor = color(255, 0, 0);
  } 
  if (deformation < 10) {
    wall.shapeColor = color(3, 255, 3);
  }
  
  drawSprites();
}