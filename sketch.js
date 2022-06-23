var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
  createCanvas(400,400);
 garden=createSprite(200,200);
 garden.addImage(gardenImg);
 garden.scale=1.2;
 garden.velocityY = 4;

 
 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage("coelho", rabbitImg);
 rabbit.velocityY = 4;
}



function draw() {
  background(0);

 rabbit.x = mouse.x


  edges= createEdgeSprites();
  rabbit.collide(edges);

  if (garden > 400){

     garden.y = height/2;


  }




  drawSprites();
  
}
