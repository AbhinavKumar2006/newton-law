
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var plain;
var ball1,ball2,ball3,ball4,ball5;
var string1,string2,string3,string4,string5,

function preload(){
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	plain = Bodies.rectangle(400,100,100,20);
	//Create the Bodies Here.
	ball1 = new Bob(300,500);
	ball2 = new Bob(350,500);
	ball3 = new Bob(400,500);
	ball4 = new Bob(450,500);
	ball5 = new Bob(500,500);

  string1 = new Chain(ball1.body,{x:300,y:100});
  string2 = new Chain(ball2.body,{x:350,y:100});
  string3 = new Chain(ball3.body,{x:400,y:100});
  string4 = new Chain(ball4.body,{x:450,y:100});
  string5 = new Chain(ball5.body,{x:500,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red");
  rectMode(CENTER);
  rect(plain.position.x,plain.position.y,400,20);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  drawSprites();
 
}



