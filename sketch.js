//Create variables here


var dog ,happyDog ,database , food,foodStock;
var dogImage,happyDogImage;







function preload()
{
  //load images here
  
 dogImage = loadImage("images/dogImg.png");
 happyDogImage = loadImage("images/dogImg1.png");





}

function setup() {
  createCanvas(500,500);
  
   dog=createSprite(250,250,20,20);
   dog.addImage(dogImage);
   dog.scale=0.2;
   database=firebase.database();
   foodStock=database.ref("food");
   foodStock.on("value",readStock);










  
}


function draw() {  

  background(46,139,87);
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happyDogImage);
  }
  drawSprites();
  textSize(20);
  fill ("black");
  text("FOOD STOCK REMAINING : "+food,120,180);
  

  text("press UP_ARROW key to feed watkins",100,20);
  textSize(20);
  fill("black");
  
}


function readStock(data){
  food=data.val();
}


function writeStock(x){


  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref("/").update({
    food:x
  })
}



















