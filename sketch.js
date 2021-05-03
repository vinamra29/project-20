var garden 
var cat
var mouse
var gardenImg
var catImg
var catAnm
var mouseImg
var mouseAnm
var catImg2 , mouseImg2
function preload() {
    //load the images here
    gardenImg = loadImage("garden.png")
    catImg = loadImage("cat1.png")
    mouseImg = loadImage("mouse1.png")
    catAnm = loadAnimation( "cat2.png", "cat3.png")
    mouseAnm = loadAnimation( "mouse2.png", "mouse3.png")
    catImg2 = loadImage("cat4.png")
    mouseImg2 = loadImage("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,50,50)
    garden.addImage(gardenImg)
    mouse = createSprite(100,500,20,20)
    mouse.addImage( mouseImg)
    mouse.scale = 0.2
    cat = createSprite(600,500,20,20)
   cat.addImage(catImg)
    cat.scale = 0.2
}

function draw() {

    background("green");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<=0){
        cat.velocityX = 0
        cat.x = 200
        cat.addAnimation("catstopped", catImg2)
        cat.changeAnimation("catstopped")
        mouse.addAnimation("mousestop", mouseImg2)
        mouse.changeAnimation("mousestop")
    }
    drawSprites();
}


function keyPressed(){
if(keyDown("left_arrow")){
    cat.addAnimation("catrunning", catAnm)
    cat.velocityX = - 4
    cat.changeAnimation("catrunning")
    mouse.addAnimation("mouserunning", mouseAnm)
    mouse.changeAnimation("mouserunning")
}
  


}
