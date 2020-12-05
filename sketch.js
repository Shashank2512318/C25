const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myengine, myworld;
var box1, box2, box3, box4, box5;
var ground1;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;
var back;

function preload() {
back= loadImage("sprites/bg.png");


}


function setup() {
  createCanvas(1000,600);

  myengine=Engine.create();
  myworld=myengine.world;

  box1= new box(700, 500, 80, 80); 
  box2= new box(900, 500, 80, 80);
  box3= new box(700, 400, 80, 80); 
  box4= new box(900, 400, 80, 80);
  box5= new box(800, 300, 80, 80);
  
  ground1= new ground(500, 590, 1000, 20);
 
  pig1= new Pig(800, 500);
  pig2= new Pig(800, 400);

  log1= new Log(800, 460, 300, PI/2);
  log2= new Log(800, 360, 300, PI/2);
  log3= new Log(750, 300, 150, PI/4);
  log4= new Log(850, 300, 150, 2*PI/3);

  bird= new Bird(100, 200);

}

function draw() {
  background(0); 
  Engine.update(myengine);

  imageMode(CENTER)
  image(back, 500, 300, 1000, 600)

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground1.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird.display();
  

drawSprites();

}
