
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper, ground, dustbin1, dustbin2, dustbin3; 
function preload()
{
  image1=loadImage("dustbingreen.png");
}

function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper = new Paper(100,600, 30);
    ground = new Ground(400,680,800,20);
    dustbin1 = new Dustbin(610,660, 100, 20);
    dustbin2 = new Dustbin(550,620,20,100);
    dustbin3 = new Dustbin(670,620,20,100)
    // db=createSprite(590,610)
    // db.addImage(image1);
    // db.scale=0.5

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background(180);
  imageMode(CENTER)
  //Engine.update(engine);
  paper.display();

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  image (image1,610,610,170,120)

  drawSprites()
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper.body, paper.body.position, {x: 60,y: -50})
    }
  }



