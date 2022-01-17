
const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
var world,engine
var snow
var snowlist = []

var bgImg
function preload (){
  bgImg = loadImage("snow3.jpg")

}



function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
snow= new Snow (200,10,30)
snow.scale=0.2;
  createSprite(400, 200, 50, 50);
  for (var j = 0; j <=1000; j=j+1) 
  {
     snowlist.push(new Snow(random(1,800),10,30));
  }
}

function draw() {
  background(bgImg);
  Engine.update(engine);
  snow.display();
  for (var i = 0; i < snowlist.length; i++) {
     
    snowlist[i].display();
    
  }  
  drawSprites();
}