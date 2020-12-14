
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var constrainlog;
var chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   box1=new Box(250,300,20,40)
   constrainlog = new Rope(230,180,150,PI/2);
   chain= new Chain(box1.body,constrainlog.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display();
  constrainlog.display();
  chain.display();
}



