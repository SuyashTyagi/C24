const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1045,350,70,70);
    box2 = new Box(850,350,70,70);
    box3 = new Box(1045,250,70,70);
    box4 = new Box(850,250,70,70);
    box5 = new Box(950,150,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new pig(950,350);
    pig2 = new pig(950,250);
    bird1 = new bird(200,200);
    log1 = new log(950,300,300,PI/2);
    log2 = new log(950,200,300,PI/2);
    log3 = new log(900,75,150,PI/7);
    log4 = new log(1000,75,150,-PI/7);

}

function draw() {
    background("black");
    Engine.update(engine);
    text(mouseX+","+mouseY,200,20);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    bird1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}