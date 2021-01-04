
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.x=ground.width/2;
  console.log(ground.x)
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
}


function draw() {
background("lime")
  
  stroke("white");
  textSize(20)
  fill("white")
  text("score:"+ score ,400,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
text("survivalTime:"+ survivalTime, 100,50)
  
  
  
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
      
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
 if (monkey.isTouching(FoodGroup)){
   FoodGroup.visible=false;
   score=score+1
 }
    if(monkey.isTouching(obstacleGroup)){
      obstacle.velocityX=0
      
    }
  
  
  rock();
  bannana();
  
  drawSprites();
}

function bannana(){
  if(frameCount % 80 === 0){
   banana=createSprite(500,50)
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.velocityX=-4;
    banana.lifetime = 800;
  FoodGroup.add(banana)
  } 

}
function rock(){
  if(frameCount % 300 === 0){
  obstacle=createSprite(500,330);
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-5;
    obstacle.scale=0.15
    obstacleGroup.add(obstacle)
  }
}



