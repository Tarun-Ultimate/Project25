
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Rectangle1
var DustbinObject
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world,ground)
  //Create the Bodies Here.
  DustbinObject = new Dustbin(1020,640);
 
 

   paper = new Paper(50,630,60);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
DustbinObject.display();
paper.display();
  drawSprites();
 fill("yellow"); 
 rectMode(CENTER);
 rect(this.ground.position.x,this.ground.position.y,1200,10);
}

 function keyPressed(){
   if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
   }
 } 

