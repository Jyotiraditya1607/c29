const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1=new Box(300, 200, 50, 50);
  
}

function draw() {
  background("White");  
  box1.display();
  drawSprites();
}

