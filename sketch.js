const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground1, Block1a, Block1b, Block1c, Block1d, Block1e, Block1f;

var Block2a, Block2b, Block2c, Block2d, Block2e, Block2f, Block2g;

var Block1g, Block1h, Block1i, Block1j, Block1k, Block1l, Block1m;

var polygon1;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

  ground1 = new Ground(170, 200, 320, 20);

  //1st
  Block1a = new Box(200, 182, 20, 20);

  Block1b = new Box(220, 182, 20, 20);

  Block1c = new Box(240, 182, 20, 20);

  Block1d = new Box(260, 182, 20, 20);

  Block1e = new Box(280, 182, 20, 20);

  Block1f = new Box(300, 182, 20, 20);

  Block1g = new Box(320, 182, 20, 20);

  //second level
  Block2a = new BoxPink(201, 2, 20, 20);

  Block2b = new BoxPink(220, 2, 20, 20);

  Block2c = new BoxPink(240, 2, 20, 20);

  Block2d = new BoxPink(260, 2, 20, 20);

  Block2e = new BoxPink(280, 2, 20, 20);

  Block2f = new BoxPink(300, 2, 20, 20);

  Block2g = new BoxPink(320, 2, 20, 20);

  //third level
  

  Block1h  = new Box(220, 182, 20, 20);

  Block1i = new Box(240, 182, 20, 20);

  Block1j = new Box(260, 182, 20, 20);

  Block1k = new Box(280, 182, 20, 20);

  Block1l = new Box(300, 182, 20, 20);

  Block1m = new Box(320, 182, 20, 20);

  polygon_1 = new poly(110, 100, 20, 20);

  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  ground1.display();

  Block1a.display();

  Block1b.display();

  Block1c.display();

  Block1d.display();

  Block1e.display();

  Block1f.display();

  Block1g.display();

  Block2a.display ();

  Block2b.display ();

  Block2c.display ();

  Block2d.display ();

  Block2e.display ();

  Block2f.display ();

  Block2g.display ();

  Block1h.display ();

  Block1i.display ();

  Block1j.display();

  Block1k.display();

  Block1l.display();

  Block1m.display();



  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

