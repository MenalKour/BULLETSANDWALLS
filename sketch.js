var bullet;
var wall;
var thickness;
var weight;
var speed;
function setup() {
  createCanvas(1400,400);

  speed=random(223,321);
  weight=random(30,52)
  thickness=random(23,83)
 bullet=createSprite(50, 200, 50, 5);
 bullet.velocityX=speed;
 bullet.shapeColor=color(255)

 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0); 
if(hasCollided(bullet,wall)){
  
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  bullet.velocityX=0;
  if(damage>10){
    wall.shapeColor=color(255,0,0);
   text("NOT EFFECTIVE AGAINST THE BULLET",200,200)
   text("MATERIAL REJECTED",200,215)
    
  }
 
  if(damage<10){
    wall.shapeColor=color(0,255,0)
    text("EFFECTIVE AGAINST THE BULLET",200,200)
    text("MATERIAL ACCEPTED",200,215)
  }
}
  drawSprites();
}
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}