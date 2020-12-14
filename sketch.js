const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var division1, division2, division3, division4, division5, division6, division7;
var particles = [];
var plinkos = [];


function setup() {
  createCanvas(600,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 780, 1200, 10);

  division1 = new Division(50, 680, 10, 200);
  division2 = new Division(130, 680, 10, 200);
  division3 = new Division(210, 680, 10, 200);
  division4 = new Division(290, 680, 10, 200);
  division5 = new Division(370, 680, 10, 200);
  division6 = new Division(450, 680, 10, 200);
  division7 = new Division(530, 680, 10, 200);

  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,375,10));
     
  }

  

  
  
}

function draw() {
   background(0);

   Engine.update(engine);

   ground.display();

   division1.display();
   division2.display();
   division3.display();
   division4.display();
   division5.display();
   division6.display();
   division7.display();

   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  
  if(frameCount%60===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
 }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

   

}