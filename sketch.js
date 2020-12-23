var Engine = Matter.Engine;
 World = Matter.World;
 Events = Matter.Events
 Bodies = Matter.Bodies;



var particles=[];
var plinkos = [];
var divisions = [];

//not hardcoding the value300
var divisionHeight=300;



var score =0;
var gameState="play",points=0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


  //create divisions
//800-150 == height-divisionheight/2, width = 10, 300 

//x= 0 to width 800


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
   //plinkos green stationary balls for four rows on the top
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }
    
    for (var j = 100; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 100; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background("aqua");

  Engine.update(engine);
  ground.display();



  //widht/2-30 is 370 and 430 (random values between that)
  if(frameCount%80 === 0)
  {
     particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }


  

  for (var i = 0; i < plinkos.length; i++) {  
  plinkos[i].display();  
  }

 

   
   for (var j = 0; j < divisions.length; j++) {  
    divisions[j].display();  
  }
  


  for (var k = 0; k < particles.length; k++) {  
   particles[k].display();  
   }
 
  


}

/*
  function mousePressed()
{
  if(gameState!=="end")
  {
      points++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}
*/
