
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImg
var slingshot
var ground
var stone
var chain
var boy

function preload()
{
	//treeImg=loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(1200, 600);
	 
	 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  tree = new Tree(900,750,650,1500)
  boy=new Boy(200,530,250,250)
  Bananna1=new Bananna(880,470,25);
  Bananna2=new Bananna(850,400,25); 
  Bananna3=new Bananna(800,430,25); 
  Bananna4=new Bananna(860,450,25);
  Bananna5=new Bananna(800,460,25);
  Bananna6=new Bananna(850,430,25);
  Bananna7=new Bananna(900,450,25);

  

  stone=new Stone(110,460,50)
  //chain=new Chain(boy.body,stone.body)

  

  //tree.addImage(treeImg)
  ground=new Ground(10,590,1000000,20)

  slingshot=new SlingShot(stone.body,{x:125,y:480})

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //rect(tree.position.x,tree.position.y,10,10)
background(222);

 tree.display()
 stone.display()
 Bananna1.display()
 Bananna2.display()
 Bananna3.display()
 Bananna4.display()
 Bananna5.display()
 Bananna6.display()
 Bananna7.display()
 stone.display()
 //chain.display()

 ground.display()
 boy.display()
 slingshot.display()

  drawSprites();
  detectCollision(stone,Bananna1)
  detectCollision(stone,Bananna2)
  detectCollision(stone,Bananna3)
  detectCollision(stone,Bananna4)
  detectCollision(stone,Bananna5)
  detectCollision(stone,Bananna6)
  detectCollision(stone,Bananna7)
}




function mouseDragged (){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
  slingshot.fly()
  }
  
  function detectCollision(lstone,lbanana){
    bananaBodyPosition=lbanana.body.position
    stoneBodyPosition=lbanana.body.position

    var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,bananaBodyPosition.x,bananaBodyPosition.y)
    if (distance<=lbanana.radius+lstone.radius){
      Matter.Body.setStatic(lbanana.body,false)
    }

  }
  function keyPressed(){
    if (keyCode===32){
      Matter.Body.setPosition(stone.body,{x:110,y:460})
      slingshot.attach(stone.body)
    }
  }



