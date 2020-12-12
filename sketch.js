const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var en, wo;
var box1, ground1, box2;

function setup(){
    var canvas = createCanvas(1200,400);
    en = Engine.create();
    wo = en.world;

    //LEVEL 1

    box1 = new Box(700, 390-35, 70, 70);
    box2 = new Box(920, 390-35, 70, 70);

    pig1 = new Pig((700+920)/2, 390-(35/2));

    log1 = new Log((700+920)/2, 390-45, 300, PI/2);

    //LEVEL 2

    box3 = new Box(200, 200, 70, 70);
    box4 = new Box(600, 200, 70, 70);

    ground1 = new Ground(600, 390);
}

function draw(){
    background(0);
    Engine.update(en);
    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
}