
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render

var bob1,bob2,bob3,bob4,bob5,roof1,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new bob(200,400,50)
	bob2=new bob(260,400,50)
	bob3=new bob(320,400,50)
	bob4=new bob(380,400,50)
	bob5=new bob(440,400,50)
	roof1=new roof(320,100,330,30)
	rope1= new rope(bob1.body,roof1.body,-115,0)
	rope2= new rope(bob2.body,roof1.body,-60,0)
	rope3= new rope(bob3.body,roof1.body,0,0)
	rope4= new rope(bob4.body,roof1.body,60,0)
	rope5= new rope(bob5.body,roof1.body,120,0)



	//Create the Bodies Here.

	Engine.run(engine);  
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position, {x:100,y:-100} )
	}
}

function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  

  
 
}

