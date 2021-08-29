const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  button1=createImg("right.png")
  button1.position(220,50)
  button1.size(50,50)
  button1.mouseClicked(hForce)

  button2=createImg("up.png")
  button2.position(50,50)
  button2.size(50,50)
  button2.mouseClicked(vForce)

  ground =new Ground(200,370,400,40);
  right = new Ground(370,200,40,400);
  left = new Ground(30,200,40,400);
  top_wall = new Ground(200,30 ,400,40);
  var option= {
    restitution:0.95
  }
  ball=Bodies.circle(200,200,20,option);
  World.add(world,ball)


 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20,20)
  Engine.update(engine);
  
}
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

