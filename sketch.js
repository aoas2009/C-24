
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let angle=60;

let ground;
let b1,b2,b3,b4;
let top_wall;
let ball,rock;
let LWall, RWall; 
let teto;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   
  var ground_options ={
    isStatic: true
  };
 
  var ball_options = {
    restitution: 1,
  }

  var rock_options = {
    restitution: 0.2,
  }
   
  btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(250,10,20,rock_options);
  World.add(world,rock);

  ground= Bodies.rectangle(200,390,400,20,ground_options);
  LWall = Bodies.rectangle(0,200,10,400,ground_options);
  RWall = Bodies.rectangle(400,200,10,400,ground_options);
  World.add(world, ground);
  World.add(world,LWall);
  World.add(world,RWall);
 
  teto = Bodies.rectangle(200,0,400,10,ground_options);
  World.add(world,teto); 

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
rect(ground.position.x,ground.position.y,400,20);
rect(LWall.position.x,LWall.position.y,10,400);
rect(RWall.position.x,RWall.position.y,10,400);

rect(teto.position.x,teto.position.y,400,10);

ellipse(ball.position.x,ball.position.y,20);
push();
fill("brown");
ellipse(rock.position.x,rock.position.y,20);
pop();
}

function vForce()
{Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.001,y:-0.05});
  Matter.Body.applyForce(rock,{x:0,y:0},{x:-0.001,y:-0.015});
}


  


