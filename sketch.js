const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5,sling1,sling2,sling3,sling4,sling5;


function setup(){
    createCanvas(700,400);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options ={
        mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);
   
    bob1 = new Bob(450,200);
    bob2 = new Bob(400,200);
    bob3 = new Bob(350,200);
    bob4 = new Bob(300,200);
    bob5 = new Bob(250,200);

    sling1= new Sling(bob1.body,{x:450,y:50});
    sling2= new Sling(bob2.body,{x:400,y:50});
    sling3= new Sling(bob3.body,{x:350,y:50});
    sling4= new Sling(bob4.body,{x:300,y:50});
    sling5= new Sling(bob5.body,{x:250,y:50});

    roof = new Roof(350,50,400,20);
}

function draw(){
    
    background(180);
    
    Engine.update(engine);
    
   

    bob1.display();
    sling1.display();
    bob2.display();
    sling2.display();
    bob3.display();
    sling3.display();
    bob4.display();
    sling4.display();
    bob5.display();
    sling5.display();
    roof.display();
    
    
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:250})
    }
}

