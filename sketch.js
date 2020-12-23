var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=Math.random(400,1500);
  weight=Math.random(55,90);
  car=createSprite(50,200, 50, 50);
  wall=createSprite(1500,200,50,height/2);
  wall.shapeColor="blue";
}

function draw() {
  background("black");  
  car.velocityX=speed;
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation;
    deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow"
    }
    if(deformation<100){
      car.shapeColor="green";
    }
  }
  drawSprites();
}