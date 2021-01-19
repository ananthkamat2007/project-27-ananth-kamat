var roof,rope1,bobObject1 ,bobObject2 ,bobObject3 ,bobObject4 ,bobObject5,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload(){

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(350,100,300,30),
   // World.add(World,roof)
	bobObject1=new Bob(250,300);
	bobObject2=new Bob(300,300);
	bobObject3=new Bob(350,300);
	bobObject4=new Bob(400,300);
	bobObject5=new Bob(450,300);
	 
	rope1= new Rope(bobObject1.body,roof.Body);
	//World.add(world,rope1);

	rope2= new Rope(bobObject2.body,roof.Body);
	//World.add(world,rope2);

	rope3= new Rope(bobObject3.body,roof.Body);
	//World.add(world,rope3);

	rope4= new Rope(bobObject4.body,roof.Body);
	
	rope5= new Rope(bobObject5.body,roof.Body);
	//World.add(world,rope5);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



