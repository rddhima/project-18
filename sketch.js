var road,cash,boy,gems,necklace,sword;
var roadimg,cashimg,boyimg,gemsimg,necklaceimg,swordimg;
var cashgroup,gemsgroup,necklacegroup,swordgroup;
var gameover,gameoverimg;

function preload(){
  roadimg=loadImage("Road.png");
  cashimg=loadImage("cash.png");
  boyimg=loadAnimation("Runner-1.png","Runner-2.png");
  gemsimg=loadImage("diamonds.png");
  necklaceimg=loadImage("jwell.png");
  swordimg=loadImage("sword.png");
  gameoverimg=loadImage("gameOver.png");
}

function setup(){
  createCanvas(400,600);
  
  road=createSprite(200,200);
  road.addImage(roadimg);
  road.velocityY=4;
  
  boy=createSprite(70,550,20,20);
  boy.addAnimation("running",boyimg);
  boy.scale=0.08;
  
  cashgroup=new Group();
  gemsgroup=new Group();
  necklacegroup=new Group();
  swordgroup=new Group();
}
  function draw(){
    background(0);
    
    drawSprites();
  }
