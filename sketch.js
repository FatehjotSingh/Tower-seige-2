const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "ready";
//var bg = "sprites/bg1.png";
var score = 0;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1100,700);
    engine = Engine.create();
    world = engine.world;


    //ground = new Ground(550,690,11000,20);
    platform = new Ground(500, 400, 300, 10);
    platform2=new Ground(900,250,200,10)
    hex=new Hex(100,400)
    box1=new Box(500,300,"blue")
    box2=new Box(540,300,"blue")
    box3=new Box(460,300,"blue")
    box4=new Box(580,300,"blue")
    box5=new Box(420,300,"blue")
    box6=new Box(380,300,"blue")
    box7=new Box(620,300,"blue")

    box11=new Box(500,250,"lightblue")
    box12=new Box(540,250,"lightblue")
    box13=new Box(460,250,"lightblue")
    box14=new Box(580,250,"lightblue")
    box15=new Box(420,250,"lightblue")
    

    box21=new Box(500,200,"blue")
    box22=new Box(540,200,"blue")
    box23=new Box(460,200,"blue")

    boxalpha1=new Box(500,150,"lightblue")

    box31=new Box(900,120,"blue")
    box32=new Box(940,120,"blue")
    box33=new Box(860,120,"blue")
    box34=new Box(980,120,"blue")
    box35=new Box(820,120,"blue")

    box41=new Box(900,70,"lightblue")
    box42=new Box(940,70,"lightblue")
    box43=new Box(860,70,"lightblue")

    boxalpha2=new Box(900,20,"blue")

    slingshot = new SlingShot(hex.body,{x:100, y:400});
}

function draw(){
        background(0);
        if(gameState==="launched"){
            fill("white")
            text("press <SPACE> to retry",200,50)
        }
    
        
    Engine.update(engine);

      platform.display()
      platform2.display();
      hex.display()
      box1.display()
      box2.display();
      box3.display();
      box4.display();
      box5.display();
      box6.display();
      box7.display();

      box11.display()
      box12.display()
      box13.display()
      box14.display()
      box15.display()
       box21.display()
       box22.display()
       box23.display()
       boxalpha1.display();

       box31.display();
       box32.display();
       box33.display();
       box34.display();
       box35.display();

       box41.display();
       box42.display();
       box43.display();

       boxalpha2.display();

      slingshot.display();

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32  ){
       slingshot.attach(hex.body);
       Matter.Body.setPosition(hex.body,{x:100,y:400})
       gameState="ready"
    }
}

