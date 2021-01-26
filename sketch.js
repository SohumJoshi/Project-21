var bullet;
var wall;

var speed, weight;
var thickness, damage;


function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);

  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background("black");

  bulletCollide();

  drawSprites();
}

function bulletCollide() {
  if (bullet.collide(wall)) {
    damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
  }

  if (damage > 10) {
    bullet.shapeColor = "red";
  } else if (damage > 0 && damage < 10) {
    bullet.shapeColor = "green";
  }
}