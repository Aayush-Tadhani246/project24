const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1, wall2,wall3;
var ground,ball,can;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	
	
	can = new Trash(1400,660)

	ground = new Ground(800,680,1600,20);

	ball = new Paper(50,500,55);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  can.display();


  
  drawSprites();
 
}


function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})

	}
}



