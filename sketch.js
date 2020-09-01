var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var package1,ground1;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;
	
	ground1 = new Ground(400,670,800,20);

	package1 = new Package(400, 200, 10);
	console.log(package1);

	Engine.run(engine);
  
}


function draw() {

  background(0);

  Engine.update(engine);

  rectMode(CENTER);
  
  packageSprite.x= package1.x;
  packageSprite.y= package1.y;

  ground1.display();
  package1.display();

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === "32"){

		Body.setStatic(package1,false);
	}	
}







