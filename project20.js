var car,wall;
var speed,weight;




function setup() {
  createCanvas(800,400);
  
  speed=random(55,90)

  weight=random(400,1500)

  var wall=createSprites(50,200,50,50);
  wall.shapeColour=color(80,80,80)
  
  var car=createSprites(1500,200,60,height/2);
car.velocityX=speed
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x<(wall.width/2-car.width/2)){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed;
   if(deformation>180){
    car.shapeColour=color(255,0,0)
  }

  if(deformation<180 && deformation >100){
    car.shapeColour=color(230,230,0)
  }
 
  if(deformation<100){
    car.shapeColour=color(0,255,0)
  }
  }

  
  
  
  
  
  
  
  
  
  drawSprites();
}