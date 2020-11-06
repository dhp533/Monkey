
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas (400, 400);

  monkey = createSprite(80,340,20,20);
  monkey.addAnimation ("moving", monkey_running);
  monkey.scale = 0.12
  
  ground = createSprite (250, 380, 900, 10);
  ground.x=ground.width/2;
  
foodGroup = new Group();
obstacleGroup = new Group();
  
  score = 0;
}

function draw() {
  background (250);
  text("Survival Time: "+ score, 100,50);
  
  score = score + Math.round(getFrameRate()/60);
  
  if (ground.x < 0)
    {
      ground.x = ground.width/2;
    }

  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(ground);
  bananas();
  obstacles();
   
  drawSprites ();
}

function bananas () 
{
 if (frameCount % 80 === 0)
 {
    var banana = createSprite(300,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage); 
    banana.scale = 0.11;
    banana.velocityX = -3;

    banana.lifetime = 200;

 }
}

function obstacles () 
{
 if (frameCount % 300 === 0)
 {
    var obstacle = createSprite(200,360,40,10);
    obstacle.x = Math.round(random(300,200));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.12;
    obstacle.velocityX = -(1 + 3*score/100);
   
    obstacle.lifetime = 200;
 }
}