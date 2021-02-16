
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone, rubber;
var sand1,sand2,sand3,sand4,sand5;
var iron;
var plane;
var sound;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;
    hammer = new Hammer(100,100);
	stone = new Stone(500,320,70,70);
	plane = new Plane(10,390,1700,20);
	rubber = new Rubber(700,390,50,50);
	sand1 = new Sand(200,300,10,10);
	sand2 = new Sand(300,350,10,10);
	sand3 = new Sand(500,370,10,10);
	sand4 = new Sand(550,330,10,10);
	sand5 = new Sand(600,390,10,10);
	iron = new Iron(700,380,40,60);
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("#add8e6");
  hammer.display();
  stone.display();
  plane.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  iron.display();
  drawSprites();
 
}



