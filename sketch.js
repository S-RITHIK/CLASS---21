var fr;
var mr;
var r1;
var r2;
var o1, o2, o3, o4; 



function setup() {
  createCanvas(800,1200);

fr = createSprite(200, 400, 50, 80)
fr.shapeColor = "red";

mr = createSprite(400, 400, 80, 30);
mr.shapeColor = "red";
fr.velocityX = +2;
mr.velocityX = -2;
 
r1 = createSprite(500, 100, 50, 50);
r1.velocityY = +2;


r2 = createSprite(500, 500, 70, 70);
r2.velocityY = -2;


o1 = createSprite(50, 280, 70, 90);
o1.velocityX = 2;
o1.shapeColor = "pink";


o2 = createSprite(350, 280, 70, 90);
o2.velocityX = -2;
o2.shapeColor = "black";

}

function draw() {
  background("yellow"); 
  //mr.x = World.mouseX;
  //mr.y = World.mouseY;

  bounceOff(o1, o2);
  bounceOff(r1, r2);
  bounceOff(mr, fr);

  if(isTouching(mr, fr)) {
    mr.shapeColor = "blue";
    fr.shapeColor = "blue";
  }
   
  





  
     
  drawSprites();
}



