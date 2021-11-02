const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var beanSadImg, bean, beanStandingImg, beanWithTeddyImg, backgroundImg, teddyImg, teddy;
var engine; 
var fruit;
var ground;
var rope, teddy_con; 
function preload(){
beanSadImg = loadImage("bean_sad.jpg");
beanStandingImg = loadImage("bean_standing.png");
beanWithTeddyImg = loadImage("bean_with_teddy.jpg");
backgroundImg = loadImage("Background.jpg");
teddyImg = loadImage("Teddy.png");
}

function setup(){
createCanvas(1000,900);

engine = Engine.create();
world = engine.world;
ground = new Ground(500, 890, 1000, 20);
rope = new Rope(6, {x: 245, y: 30});

teddy = Bodies.circle(500, 200, 50);
Matter.Composite.add(rope.body, teddy);

teddy_con = new Link(rope, teddy);
rectMode(CENTER);
ellipseMode(RADIUS);
imageMode(CENTER);

}

function draw(){
  background("black");
  image(backgroundImg, width/2, height/2, 1000, 900);

    bean = createSprite(500, 750, 50,50);
    bean.addImage(beanStandingImg);
    bean.scale = 0.5;

    ground.show();
    rope.show();
   //image(teddyImg, teddy.position.x, teddy.position.y, 60, 60);
   ellipse(teddy.position.x, teddy.position.y, 30, 30);
    Engine.update(engine);
  drawSprites();

}