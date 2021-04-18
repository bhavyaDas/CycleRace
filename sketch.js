//Created Globalvariables beginingImage,begining
var beginingImage, begining

//Created Globalvariables roadImage,road
var roadImage, road

//Created Globalvariables restartImage,restart
var restartImage, restart

//Created Globalvariables redCyclist,pinkCyclist,yellowCyclist
var redCyclist, pinkCyclist, yellowCyclist

//Created Globalvariables playerImage,player
var playerImage, player

//Created Globalvariable distance and set value as 0
var distance = 0

//Created Globalvariables redCyclistImage,pinkCyclistImage,yellowCyclistImage
var pinkCyclistImage, yellowCyclistImage, redCyclistImage

//Created Globalvariable PLAY and set value as 1
var PLAY = 1

//Created Globalvariable END and set value as 0
var END = 0

//Created Globalvariable SERVE and set value as 2
var SERVE = 2

//Created Globalvariable gameState and set value as SERVE
var gameState = SERVE

//Created Globalvariables player_FallImage,player_Fall
var player_FallImage, player_Fall

//Created Globalvariable pink_FallImage
var pink_FallImage

//Created Globalvariable yellow_FallImage
var yellow_FallImage

//Created Globalvariable red_FallImage
var red_FallImage

//Created Globalvariables obstacle1,obstacle2,obstacle3
var obstacle1, obstacle2, obstacle3

//Created Globalvariables yellowCG,redCG,pinkCG,obstaclesGroup
var yellowCG, redCG, pinkCG, obstaclesGroup

//Created Globalvariables gameOver,gameOverImage   
var gameOver, gameOverImage

//Created Globalvariable cyclebell
var cycleBell

//Images-Storage
function preload() {

  //Loaded an image ("images/Road.png") under roadImage variable
  roadImage = loadImage("images/Road.png")

  //Loaded aa animation  ("images/mainPlayer1.png","images/mainPlayer2.png") under playerImage variable 
  playerImage = loadAnimation("images/mainPlayer1.png", "images/mainPlayer2.png")

  //loaded an animation ("images/opponent1.png","images/opponent2.png") inside  pinkCyclistImage variable
  pinkCyclistImage = loadAnimation("images/opponent1.png", "images/opponent2.png")

  //loaded an animation ("images/opponent4.png","images/opponent5.png") inside  yellowCyclistImage variable
  yellowCyclistImage = loadAnimation("images/opponent4.png", "images/opponent5.png")

  //loaded an animation ("images/opponent7.png","images/opponent8.png") inside  redCyclistImage variable
  redCyclistImage = loadAnimation("images/opponent7.png", "images/opponent8.png")

  //loaded an image ("images/obstacle1.png") inside obstacle1 variable
  obstacle1 = loadImage("images/obstacle1.png")

  //loaded an image ("images/obstacle2.png") inside obstacle2 variable
  obstacle2 = loadImage("images/obstacle2.png")

  //loaded an image ("images/obstacle3.png") inside obstacle3 variable 
  obstacle3 = loadImage("images/obstacle3.png")

  //loaded an image ("images/gameOver.png") inside gameOverImage variable
  gameOverImage = loadImage("images/gameOver.png")

  //loaded an animation ("images/mainPlayer3.png") inside player_FallImage variable
  player_FallImage = loadAnimation("images/mainPlayer3.png")

  //loaded an animation ("images/opponent3.png") inside pink_FallImage variable
  pink_FallImage = loadAnimation("images/opponent3.png")

  //loaded an animation ("images/opponent6.png") inside yellow_FallImage variable
  yellow_FallImage = loadAnimation("images/opponent6.png")

  //loaded an animation ("images/opponent9.png") inside red_FallImage variable
  red_FallImage = loadAnimation("images/opponent9.png")

  //loaded a sound ("Sound/ring_bell.mp3") inside CycleBell variable
  CycleBell = loadSound("Sound/ring_bell.mp3")

  //loaded an image ("images/restart.png") inside  restartImage variable
  restartImage = loadImage("images/restart.png")

  //loaded an image ("images/background_cycle.jpg") inside  beginingImage variable
  beginingImage = loadImage("images/background_cycle.jpg")

}

//Pre-defined function 
function setup() {

  //Created canvas(drawing space) with width=1000 and height=300
  createCanvas(1000, 300);

  //Created a sprite road with coordinates (x,y,w,h)
  road = createSprite(200, 150, 200, 200)

  //Added an image ("path", roadImage) inside road sprite
  road.addImage("path", roadImage)

  //Set velocityX of road as 10 towards left
  road.velocityX = -10

  //Created a sprite player with coordinates (x,y,w,h) 
  player = createSprite(70, 200, 200, 200)

  //Added an animation ("main_cyclist", playerImage) inside player sprite 
  player.addAnimation("main_cyclist", playerImage)

  //Resize the animation under player through scale property
  player.scale = 0.06

  /*Set a collider in rectangular shape with x-offSet=0,
  y-offSet=0,width=1350 and height=1350*/
  player.setCollider("rectangle", 0, 0, 1350, 1550)

  //Created a sprite gameOver with coordinates (x,y,w,h)  
  gameOver = createSprite(510, 150, 200, 200)

  //Added an image("gameOver_screen",gameOverImage)inside gameOver sprite 
  gameOver.addImage("gameOver_screen", gameOverImage)

  //Set the visiblity of sprite gameOver as false
  gameOver.visible = false

  //Created a new group -(yellowCG)
  yellowCG = createGroup()

  //Created a new group -(redCG)  
  redCG = createGroup()

  //Created a new group -(pinkCG)
  pinkCG = createGroup()

  //Created a new group -(obstaclesGroup)
  obstaclesGroup = createGroup()

  //Created a sprite restart with coordinates (x,y,w,h)  
  restart = createSprite(530, 240, 200)

  //Added an image("restart_screen",restartImage)inside restart sprite  
  restart.addImage("restart_screen", restartImage)

  //Resize the image under restart through scale property 
  restart.scale = 0.1

  //Set visiblity of sprite restart as false
  restart.visible = false

  //Created a sprite begining with coordinates (x,y,w,h)  
  begining = createSprite(500, 130, 200, 200)

  //Added an image("starting_screen",beginingImage)inside begining sprite   
  begining.addImage("starting_screen", beginingImage)

  //Resize the image under begining through scale property  
  begining.scale = 1.5

}

//Pre-defined function (repeats the instructions under it)
function draw() {

  //Set background color of canvas as "black"
  background("black")

  //Put a condition if gameState is equal to PLAY
  if (gameState == PLAY) {

    //Set visiblity of sprite road as true
    road.visible = true

    //Set visiblity of sprite player as true
    player.visible = true

    //Put a condtion if "space" key is pressed
    if (keyDown("space")) {

      //Asked the sound CycleBell to be played
      CycleBell.play()

    }

    //Put a condition if road's X position is less than 0   
    if (road.x < 0) {

      //Set the road's X position equal to width/2 or in other words making an infinite screen
      road.x = width / 2

    }

    //Increasing the speed or distance as equal to rounded off to (getFrameRate()/60)' result
    distance = distance + Math.round(getFrameRate() / 60)

    //Set player's Y position as equal to mouse's Y position
    player.y = mouseY

    //Put a condition if distance's value is equal to or greater than 5000
    if (distance >= 5000) {

      //Added a customizable function the-: (obstacle_s())
      obstacle_s()

      //Putting a else situation if the if condition is false 
    } else {

      //Made a localVariable and set it's avlue roundedoff to the random no. at a range of (1,3)
      var select_oppPlayer = Math.round(random(1, 3));

      //Put a condition if frameCount is divisible by 150
      if (World.frameCount % 150 == 0) {

        //Put a condition if select_oppPlayer is equal to 1
        if (select_oppPlayer == 1) {

          //Then put a customizable function (pinkCyclists())
          pinkCyclists();

          //Else put a condition if select_oppPlayer is equal to 2
        } else if (select_oppPlayer == 2) {

          //Then put a customizable function (yellowCyclists())
          yellowCyclists();

          //Put a condition if both of above condition are not true and slelct_oppPlayer has value of 3
        } else {

          //Then put a customizable function (redCyclists())     
          redCyclists();

        }

      }

    }

    //Increasing the velocity of road according to every 150th distance
    road.velocityX = -(6 + 2 * distance / 150);

    //Increasing the velocity of redCG group according to every 300th distance
    redCG.setVelocityXEach(-(6 + 2 * distance / 300))

    //Increasing the velocity of pinkCG group according to every 310th distance  
    pinkCG.setVelocityXEach(-(6 + 2 * distance / 310))

    //Increasing the velocity of yellowCG group according to every 320th distance
    yellowCG.setVelocityXEach(-(6 + 2 * distance / 320))

    //Put a condition if pinkCG isTouching player
    if (pinkCG.isTouching(player)) {

      //Assigning gameState as END
      gameState = END

      //Added an another animation to pinkCyclist-("opponent3",pink_FallImage)
      pinkCyclist.addAnimation("opponent3", pink_FallImage)

    }

    //Put a condition if obstaclesGroup isTouching player   
    if (obstaclesGroup.isTouching(player)) {

      //Assigning gameState as END
      gameState = END

    }

    //Put a condition if redCG isTouching player      
    if (redCG.isTouching(player)) {

      //Assigning gameState as END      
      gameState = END

      //Added an another animation to redCyclist-("opponent2",red_FallImage)
      redCyclist.addAnimation("opponent2", red_FallImage)

    }

    //Put a condition if yellowCG isTouching player   
    if (yellowCG.isTouching(player)) {

      //Assigning gameState as END           
      gameState = END

      //Added an another animation to yellowCyclist-("opponent1",yellow_FallImage)   
      yellowCyclist.addAnimation("opponent1", yellow_FallImage)

    }

    //Created a localvariable edges and set value as a function-: createEdgeSprites();
    var edges = createEdgeSprites();

    //Asked the player to stick to edges
    player.collide(edges);

    //Put a else if condition if gameState is equal to END
  } else if (gameState == END) {

    //Set the obstaclesGroup velocityX of each of it's sprite as (0)
    obstaclesGroup.setVelocityXEach(0)

    //Set the obstaclesGroup lifetime of each of it's sprite as (-1)   
    obstaclesGroup.setLifetimeEach(-1)

    //Set the yellowCG velocityX of each of it's sprite as (0)
    yellowCG.setVelocityXEach(0)

    //Set the redCG velocityX of each of it's sprite as (0)
    redCG.setVelocityXEach(0)

    //Set the pinkCG velocityX of each of it's sprite as (0)
    pinkCG.setVelocityXEach(0)

    //Set the yellowCG lifetime of each of it's sprite as (-1)   
    yellowCG.setLifetimeEach(-1)

    //Set the redCG lifetime of each of it's sprite as (-1)  
    redCG.setLifetimeEach(-1)

    //Set the pinkCG lifetime of each of it's sprite as (-1)  
    pinkCG.setLifetimeEach(-1)

    //Set velocityX of road as 0
    road.velocityX = 0

    //Set visiblity of gameOver as true
    gameOver.visible = true

    //Set visiblity of restart as true
    restart.visible = true

    //Add another animation to player:-("main_cyclist",player_FallImage)
    player.addAnimation("main_cyclist", player_FallImage)

    //Put a condition if mousePressedOver (restart)
    if (mousePressedOver(restart)) {

      //Added a customizable function(reset())
      reset()

    }

  }

  //Added a function to draw sprites 
  drawSprites()

  //Set text's color as "white"
  fill("white")

  //Set text's size as 20
  textSize(20)

  //Set text as (`Distance:${distance}`, 800(Xposition), 40(Yposition))
  text(`Distance:${distance}`, 800, 40)

  //Put a condition if gameState is equal to SERVE
  if (gameState == SERVE) {

    //Set text's color as "black"  
    fill("black")

    //Set text as ("PRESS SPACE TO START",390(Xposition),285(Yposition))
    text("PRESS SPACE TO START", 390, 285)

    //Set visiblity of player as false
    player.visible = false

    //Set visiblity of road as false  
    road.visible = false

    //Set visiblity of begining as true
    begining.visible = true

  }

  //Put a condition if "space" key is pressed and gameState is equal to SERVE
  if (keyDown("space") && gameState == SERVE) {

    //Assigned gameState as PLAY
    gameState = PLAY

    //Set visiblity of begining as false  
    begining.visible = false

  }

}

//Created a customizable function (yellowCyclists())
function yellowCyclists() {

  //Created a sprite yellowCyclist with coordinates(x,y,w,h)
  yellowCyclist = createSprite(1001, Math.round(random(50, 250)), 200, 200)

  //Added an animation to yellowCyclist as ("opponent1",yellowCyclistImage)
  yellowCyclist.addAnimation("opponent1", yellowCyclistImage)

  //Set velocityX of yellowCyclist as 5 towards left
  yellowCyclist.velocityX = -5

  //Resize the animation under yellowCyclist through scale property
  yellowCyclist.scale = 0.06

  //Set lifetime of yellowCyclist as 190
  yellowCyclist.lifetime = 190

  //Added (yellowCyclist) to a group named yellowCG
  yellowCG.add(yellowCyclist)

}

//Created a customizable function (redCyclists())
function redCyclists() {

  //Created a sprite redCyclist with coordinates(x,y,w,h) 
  redCyclist = createSprite(1001, Math.round(random(50, 250)), 200, 200)

  //Added an animation to redCyclist as ("opponent2",redCyclistImage)
  redCyclist.addAnimation("opponent2", redCyclistImage)

  //Set velocityX of redCyclist as 5 towards left 
  redCyclist.velocityX = -5

  //Resize the animation under redCyclist through scale property
  redCyclist.scale = 0.06

  //Set lifetime of redCyclist as 190
  redCyclist.lifetime = 190

  //Added (redCyclist) to a group named redCG
  redCG.add(redCyclist)

}

//Created a customizable function (pinkCyclists())
function pinkCyclists() {

  //Created a sprite pinkCyclist with coordinates(x,y,w,h)   
  pinkCyclist = createSprite(1001, Math.round(random(50, 250)), 200, 200)

  //Added an animation to pinkCyclist as ("opponent3",pinkCyclistImage) 
  pinkCyclist.addAnimation("opponent3", pinkCyclistImage)

  //Set velocityX of pinkCyclist as 5 towards left  
  pinkCyclist.velocityX = -5

  //Resize the animation under pinkCyclist through scale property
  pinkCyclist.scale = 0.06

  //Set lifetime of pinkCyclist as 190
  pinkCyclist.lifetime = 190

  //Added (pinkCyclist) to a group named pinkCG
  pinkCG.add(pinkCyclist)

}

//Created a customizable function (obstacle_s)   
function obstacle_s() {

  //Put a condition if frameCount is divisble by 150
  if (frameCount % 150 == 0) {

    //Created a sprite obstacles with coordinates(x,y,w,h)      
    obstacles = createSprite(1020, Math.round(random(50, 250)), 200, 200)

    //Created a localVariable and set it's value as rounded off to random no. at a range at (1,3)
    var obstac = Math.round(random(1, 3))

    //Switched the variable(obstac)
    switch (obstac) {

      //Set case 1:
      case 1:

        //Under this added an image to obstacles that is ("obstacle1",obstacle1)
        obstacles.addImage("obstacle1", obstacle1)

        //Added a braek for going for further checking to computer
        break;

        //Set case 2:
      case 2:

        //Under this added an image to obstacles that is ("obstacle2",obstacle2) 
        obstacles.addImage("obstacle2", obstacle2)

        //Added a braek for going for further checking to computer
        break;

        //Set case 3:   
      case 3:

        //Under this added an image to obstacles that is ("obstacle3",obstacle3)   
        obstacles.addImage("obstacle3", obstacle3)

        //Added a braek for going for further checking to computer
        break;

        /*Added a default :
          break to not go further*/
      default:
        break;

    }

    //Set velocityX of obstacles as 5 towards left
    obstacles.velocityX = -5

    //Set lifetime of obstacles as 190
    obstacles.lifetime = 190

    //Resize the animation under obstacles through scale property
    obstacles.scale = 0.1

    //Added (obstacles) to a group obstaclesGroup
    obstaclesGroup.add(obstacles)

  }

}

//Made a customizable function (reset())
function reset() {

  //Destroyed each sprite of obstaclesGroup
  obstaclesGroup.destroyEach()

  //Destroyed each sprite of redCG
  redCG.destroyEach()

  //Destroyed each sprite of pinkCG 
  pinkCG.destroyEach()

  //Destroyed each sprite of yellowCG
  yellowCG.destroyEach()

  //Set visiblity of gameOver as false
  gameOver.visible = false

  //Set visiblity of restart as false
  restart.visible = false

  //Set distance as 0
  distance = 0

  //Assigned gameState as SERVE
  gameState = SERVE

  //Added another animation to player that is ("main_cyclist", playerImage)
  player.addAnimation("main_cyclist", playerImage)

}