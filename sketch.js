const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyImg;
function preload(){
	boyImg = loadImage("boy.png");
}

function setup(){
	createCanvas(1350, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(675, 665, 1350, 20);
	tree1 = new tree(1050, 350, 450, 650);
	stone1 = new stone(150, 550);
	mango1 = new mango(1500, 600);
	Engine.run(engine);
}


function draw(){
	rectMode(CENTER);
	background(0);
	
	tree1.display();
	stone1.display();
	mango1.display();
	boy = createSprite(200, 600, 50, 50);
	boy.addImage(boyImg);
	boy.scale = 0.099;
	ground.display();
	drawSprites();
}



